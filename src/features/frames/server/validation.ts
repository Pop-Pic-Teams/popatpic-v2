import crypto from 'crypto';
import type { FrameStyle, FrameSlot } from '../../../types/photobooth';

export const MAX_FRAME_FILE_SIZE = 15 * 1024 * 1024; // 15MB
export const ALLOWED_MIME_TYPES = ['image/png'];
export const VALID_STYLES: FrameStyle[] = ['Cute', 'Vintage', 'Retro', 'Minimalist', 'Formal'];

/**
 * Memeriksa magic bytes file PNG:
 * 8 byte pertama wajib berupa: 0x89 0x50 0x4E 0x47 0x0D 0x0A 0x1A 0x0A
 */
export function isValidPngBuffer(buffer: Buffer): boolean {
  if (!buffer || buffer.length < 8) return false;
  return (
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 && // P
    buffer[2] === 0x4e && // N
    buffer[3] === 0x47 && // G
    buffer[4] === 0x0d && // \r
    buffer[5] === 0x0a && // \n
    buffer[6] === 0x1a && // EOF
    buffer[7] === 0x0a    // \n
  );
}

/**
 * Menghasilkan nama file acak yang aman berbasis UUID untuk menghindari
 * path traversal maupun benturan nama file.
 */
export function generateSafeFileName(prefix = 'frame'): string {
  const safeId = crypto.randomUUID();
  return `${prefix}_${safeId}.png`;
}

/**
 * Mengonversi data URL base64 menjadi Buffer biner
 */
export function parseBase64DataUrl(dataUrl: string): { buffer: Buffer; mimeType: string } | null {
  try {
    const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
    if (!match) return null;
    const mimeType = match[1];
    const buffer = Buffer.from(match[2], 'base64');
    return { buffer, mimeType };
  } catch {
    return null;
  }
}

export interface FrameInputValidation {
  valid: boolean;
  error?: string;
  sanitized?: {
    name: string;
    description: string;
    poseCount: number;
    category: FrameStyle;
    tags: string[];
  };
}

export function validateFrameInput(input: {
  name?: unknown;
  description?: unknown;
  poseCount?: unknown;
  category?: unknown;
  tags?: unknown;
}): FrameInputValidation {
  const name = typeof input.name === 'string' ? input.name.trim() : '';
  if (!name || name.length < 2 || name.length > 100) {
    return {
      valid: false,
      error: 'Nama/judul frame wajib diisi (minimal 2 dan maksimal 100 karakter).',
    };
  }

  const description =
    typeof input.description === 'string'
      ? input.description.trim().slice(0, 500)
      : 'Custom creative frame designed by Pop@Pic! creator.';

  const poseCountNum = Number(input.poseCount);
  if (![1, 2, 4, 6, 8].includes(poseCountNum)) {
    return {
      valid: false,
      error: 'Jumlah pose tidak valid. Pilihan yang diizinkan: 1, 2, 4, 6, atau 8 pose.',
    };
  }

  const categoryStr = typeof input.category === 'string' ? input.category.trim() : '';
  const matchedCategory = VALID_STYLES.find(
    (s) => s.toLowerCase() === categoryStr.toLowerCase()
  );
  if (!matchedCategory) {
    return {
      valid: false,
      error: `Kategori/style "${categoryStr}" tidak valid. Pilihan: ${VALID_STYLES.join(', ')}.`,
    };
  }

  let tags: string[] = [];
  if (Array.isArray(input.tags)) {
    tags = input.tags
      .map((t) => (typeof t === 'string' ? t.trim().replace(/^#/, '') : ''))
      .filter((t) => t.length > 0 && t.length <= 30)
      .slice(0, 10);
  }
  if (tags.length === 0) {
    tags = [matchedCategory.toLowerCase(), 'aesthetic'];
  }

  return {
    valid: true,
    sanitized: {
      name,
      description,
      poseCount: poseCountNum,
      category: matchedCategory,
      tags,
    },
  };
}

