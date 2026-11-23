import { describe, expect, it } from 'vitest';
import {
  buildDownloadUrl,
  detectImageType,
  getCloudinaryConfig,
} from '../src/features/photos/server/cloudinary';

describe('QR download via Cloudinary', () => {
  it('membaca konfigurasi dari CLOUDINARY_CLOUD_NAME dan CLOUDINARY_UPLOAD_PRESET', () => {
    expect(
      getCloudinaryConfig({
        CLOUDINARY_CLOUD_NAME: 'main',
        CLOUDINARY_UPLOAD_PRESET: 'preset1',
      })
    ).toEqual({ cloudName: 'main', uploadPreset: 'preset1' });
  });

  it('mengembalikan null jika konfigurasi kosong atau cloud name tidak aman', () => {
    expect(getCloudinaryConfig({})).toBeNull();
    expect(
      getCloudinaryConfig({ CLOUDINARY_CLOUD_NAME: '../evil', CLOUDINARY_UPLOAD_PRESET: 'p' })
    ).toBeNull();
  });

  it('menyisipkan fl_attachment agar HP langsung mengunduh foto', () => {
    const url = 'https://res.cloudinary.com/demo/image/upload/v1700000000/popatpic/guest-photos/abc.jpg';
    expect(buildDownloadUrl(url)).toBe(
      'https://res.cloudinary.com/demo/image/upload/fl_attachment/v1700000000/popatpic/guest-photos/abc.jpg'
    );
    // idempotent
    expect(buildDownloadUrl(buildDownloadUrl(url))).toBe(buildDownloadUrl(url));
  });

  it('mendeteksi JPEG/PNG dari magic bytes dan menolak file lain', () => {
    expect(detectImageType(new Uint8Array([0xff, 0xd8, 0xff, 0xe0]))).toBe('image/jpeg');
    expect(detectImageType(new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))).toBe('image/png');
    expect(detectImageType(new TextEncoder().encode('<svg></svg>'))).toBeNull();
    expect(detectImageType(new Uint8Array([]))).toBeNull();
  });
});
