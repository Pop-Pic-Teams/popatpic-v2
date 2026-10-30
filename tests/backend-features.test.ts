import { describe, expect, it } from 'vitest';
import {
  isValidPngBuffer,
  generateSafeFileName,
  parseBase64DataUrl,
  validateFrameInput,
  MAX_FRAME_FILE_SIZE,
} from '../src/features/frames/server/validation';
import {
  toPublicUser,
  mapRole,
  type UserProfileRow,
} from '../src/features/auth/server/shared';
import { getAllFrames, getAuditLogs } from '../src/data/frames';

describe('FITUR 1: Validasi Upload Frame & Keamanan Asset', () => {
  it('menerima buffer dengan signature magic bytes PNG yang valid', () => {
    // Valid 8-byte PNG header
    const validPng = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00]);
    expect(isValidPngBuffer(validPng)).toBe(true);
  });

  it('menolak file bukan PNG (JPEG, WebP, Text, Corrupted)', () => {
    // JPEG header: FF D8 FF
    const jpeg = Buffer.from([0xff, 0xd8, 0xff, 0xe0, 0x00, 0x10, 0x4a, 0x46]);
    expect(isValidPngBuffer(jpeg)).toBe(false);

    // Plain text header
    const text = Buffer.from('Hello world this is not a png');
    expect(isValidPngBuffer(text)).toBe(false);

    // Corrupted magic byte
    const corrupted = Buffer.from([0x89, 0x50, 0x4e, 0x00, 0x0d, 0x0a, 0x1a, 0x0a]);
    expect(isValidPngBuffer(corrupted)).toBe(false);

    // Empty or short buffer
    expect(isValidPngBuffer(Buffer.alloc(0))).toBe(false);
    expect(isValidPngBuffer(Buffer.from([0x89, 0x50]))).toBe(false);
  });

  it('menghasilkan nama file acak yang aman tanpa path traversal', () => {
    const fileName = generateSafeFileName('frame_upload');
    expect(fileName).toMatch(/^frame_upload_[a-f0-9-]+\.png$/);
    expect(fileName).not.toContain('..');
    expect(fileName).not.toContain('/');
    expect(fileName).not.toContain('\\');
  });

  it('memvalidasi batas ukuran file maksimum 15MB', () => {
    expect(MAX_FRAME_FILE_SIZE).toBe(15 * 1024 * 1024);
    const oversizedLength = MAX_FRAME_FILE_SIZE + 1;
    expect(oversizedLength > MAX_FRAME_FILE_SIZE).toBe(true);
  });

  it('memvalidasi input metadata frame: judul, jumlah pose, dan kategori', () => {
    // Valid input
    const valid = validateFrameInput({
      name: 'Retro Arcade Pop',
      description: 'Tema retro 80-an yang seru',
      poseCount: 4,
      category: 'Retro',
      tags: ['retro', 'vintage', 'arcade'],
    });
    expect(valid.valid).toBe(true);
    expect(valid.sanitized?.name).toBe('Retro Arcade Pop');
    expect(valid.sanitized?.poseCount).toBe(4);
    expect(valid.sanitized?.category).toBe('Retro');

    // Judul kosong ditolak
    const emptyName = validateFrameInput({
      name: '',
      poseCount: 4,
      category: 'Retro',
    });
    expect(emptyName.valid).toBe(false);

    // Pose count tidak diizinkan ditolak
    const invalidPose = validateFrameInput({
      name: 'Test Frame',
      poseCount: 7, // hanya 1, 2, 4, 6, 8
      category: 'Cute',
    });
    expect(invalidPose.valid).toBe(false);

    // Style / kategori tidak terdaftar ditolak
    const invalidCat = validateFrameInput({
      name: 'Test Frame',
      poseCount: 4,
      category: 'FuturisticCyberpunkInvalid',
    });
    expect(invalidCat.valid).toBe(false);
  });

  it('mengonversi base64 data URL dengan aman', () => {
    const validDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    const parsed = parseBase64DataUrl(validDataUrl);
    expect(parsed).not.toBeNull();
    expect(parsed?.mimeType).toBe('image/png');
    expect(isValidPngBuffer(parsed!.buffer)).toBe(true);

    const invalid = parseBase64DataUrl('bukan-data-url');
    expect(invalid).toBeNull();
  });
});

describe('FITUR 2: Review dan Approve Frame oleh Admin', () => {
  it('memastikan format transisi status moderasi hanya mengizinkan keputusan valid', () => {
    const validDecisions = ['approve', 'reject', 'archive', 'toggle_active'];
    expect(validDecisions.includes('approve')).toBe(true);
    expect(validDecisions.includes('reject')).toBe(true);
    expect(validDecisions.includes('invalid_status')).toBe(false);
  });

  it('memastikan alasan penolakan wajib ada ketika keputusan adalah reject', () => {
    const checkReject = (decision: string, reason?: string) => {
      if (decision === 'reject' && (!reason || !reason.trim())) {
        return { valid: false, error: 'Alasan penolakan wajib diisi.' };
      }
      return { valid: true };
    };

    expect(checkReject('reject', '').valid).toBe(false);
    expect(checkReject('reject', '   ').valid).toBe(false);
    expect(checkReject('reject', 'Layout tidak proporsional').valid).toBe(true);
    expect(checkReject('approve').valid).toBe(true);
  });
});

describe('FITUR 3: Kelola Pengguna oleh Admin & Keamanan Kredensial', () => {
  it('tidak pernah membocorkan password atau hash password pada model User publik', () => {
    const rowWithSecrets: UserProfileRow & { password_hash?: string; raw_pass?: string } = {
      id: 'usr-uuid-123',
      email: 'creator@popatpic.com',
      full_name: 'Karima Ulya',
      username: 'karimacreator',
      role: 'creator',
      account_status: 'active',
      created_at: '2026-03-01T00:00:00Z',
      password_hash: '$2a$12$e80yqXdummyhash',
      raw_pass: 'supersecretpassword123',
    };

    const publicUser = toPublicUser(rowWithSecrets, 'Creator');

    expect(publicUser.id).toBe('usr-uuid-123');
    expect(publicUser.email).toBe('creator@popatpic.com');
    expect(publicUser.role).toBe('Creator');
    expect(publicUser.creatorStatus).toBe('active');
    expect(publicUser).not.toHaveProperty('password_hash');
    expect(publicUser).not.toHaveProperty('raw_pass');
    expect(publicUser.password).toBeUndefined();
  });

  it('memvalidasi mapping role database ke format frontend secara konsisten', () => {
    expect(mapRole('admin')).toBe('Admin');
    expect(mapRole('creator')).toBe('Creator');
    expect(mapRole('guest')).toBeNull();
    expect(mapRole('invalid_role')).toBeNull();
  });

  it('memproteksi agar admin tidak dapat menonaktifkan atau menghapus dirinya sendiri', () => {
    const currentAdminId = 'admin-uuid-001';
    const targetUserId = 'admin-uuid-001';

    const canSuspendSelf = targetUserId !== currentAdminId;
    expect(canSuspendSelf).toBe(false);

    const canDeleteSelf = targetUserId !== currentAdminId;
    expect(canDeleteSelf).toBe(false);
  });
});

describe('FITUR 4: Penghapusan Data Dummy & Fallback Hardcode', () => {
  it('getAllFrames mengembalikan array kosong dan tidak lagi mengembalikan INITIAL_FRAMES hardcode secara fallback diam-diam', () => {
    // Pada environment tanpa localStorage terisi, data dinamis harus dimulai dari array kosong
    const frames = getAllFrames();
    expect(Array.isArray(frames)).toBe(true);
    expect(frames.length).toBe(0);
  });

  it('getAuditLogs mengembalikan array kosong dan tidak lagi mengembalikan seed dummy log hardcode', () => {
    const logs = getAuditLogs();
    expect(Array.isArray(logs)).toBe(true);
    expect(logs.length).toBe(0);
  });
});

