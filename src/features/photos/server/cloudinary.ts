import dns from 'dns';

try {
  dns.setDefaultResultOrder('ipv4first');
} catch {
  // Abaikan pada runtime yang tidak mendukung pengaturan DNS Node.js
}

/**
 * Helper server-side untuk upload hasil foto photobooth ke Cloudinary
 * memakai unsigned upload preset (REST API, tanpa dependency tambahan).
 *
 * Konfigurasi dibaca HANYA di server dari variabel:
 *   CLOUDINARY_CLOUD_NAME
 *   CLOUDINARY_UPLOAD_PRESET
 */

/** Batas ukuran file hasil foto yang diterima (di bawah limit 10 MB Cloudinary free & body proxy Next.js). */
export const MAX_PHOTO_UPLOAD_BYTES = 9.5 * 1024 * 1024;

export const CLOUDINARY_FOLDER = 'popatpic/guest-photos';

export interface CloudinaryConfig {
  cloudName: string;
  uploadPreset: string;
}

function firstNonEmpty(...values: Array<string | undefined>): string {
  for (const v of values) {
    const clean = (v ?? '').trim().replace(/^['"]|['"]$/g, '');
    if (clean) return clean;
  }
  return '';
}

export function getCloudinaryConfig(
  env: Record<string, string | undefined> = process.env
): CloudinaryConfig | null {
  const cloudName = firstNonEmpty(env.CLOUDINARY_CLOUD_NAME);
  const uploadPreset = firstNonEmpty(env.CLOUDINARY_UPLOAD_PRESET);
  if (!cloudName || !uploadPreset) return null;
  if (!/^[a-zA-Z0-9_-]+$/.test(cloudName)) return null;
  return { cloudName, uploadPreset };
}

/** Deteksi tipe gambar berdasarkan magic bytes (bukan ekstensi / header Content-Type). */
export function detectImageType(buffer: Uint8Array): 'image/jpeg' | 'image/png' | null {
  if (buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
    return 'image/jpeg';
  }
  if (
    buffer.length >= 8 &&
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47 &&
    buffer[4] === 0x0d &&
    buffer[5] === 0x0a &&
    buffer[6] === 0x1a &&
    buffer[7] === 0x0a
  ) {
    return 'image/png';
  }
  return null;
}

/**
 * Membuat URL Cloudinary yang memaksa browser HP mengunduh file
 * (flag `fl_attachment`), bukan sekadar menampilkan gambar.
 */
export function buildDownloadUrl(secureUrl: string): string {
  const marker = '/image/upload/';
  const idx = secureUrl.indexOf(marker);
  if (idx === -1) return secureUrl;
  const head = secureUrl.slice(0, idx + marker.length);
  const tail = secureUrl.slice(idx + marker.length);
  if (tail.startsWith('fl_attachment')) return secureUrl;
  return `${head}fl_attachment/${tail}`;
}

export interface CloudinaryUploadResult {
  secureUrl: string;
  downloadUrl: string;
  publicId: string;
}

const UPLOAD_TIMEOUT_MS = 90_000;
const MAX_UPLOAD_ATTEMPTS = 5;

function isRetryableNetworkError(err: unknown): boolean {
  if (!(err instanceof Error)) return false;
  const msg = err.message.toLowerCase();
  const cause = (err as Error & { cause?: { code?: string; message?: string } }).cause;
  const code = (cause?.code || '').toUpperCase();
  return (
    err.name === 'TimeoutError' ||
    err.name === 'AbortError' ||
    msg.includes('fetch failed') ||
    ['EAI_AGAIN', 'ENOTFOUND', 'ECONNRESET', 'ETIMEDOUT', 'UND_ERR_CONNECT_TIMEOUT', 'UND_ERR_SOCKET'].includes(code)
  );
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function uploadToCloudinary(
  file: Blob,
  config: CloudinaryConfig,
  fileName: string
): Promise<CloudinaryUploadResult> {
  const endpoint = `https://api.cloudinary.com/v1_1/${encodeURIComponent(config.cloudName)}/image/upload`;
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= MAX_UPLOAD_ATTEMPTS; attempt++) {
    const form = new FormData();
    form.append('file', file, fileName);
    form.append('upload_preset', config.uploadPreset);
    form.append('folder', CLOUDINARY_FOLDER);

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: form,
        signal: AbortSignal.timeout(UPLOAD_TIMEOUT_MS),
      });

      const data = (await res.json().catch(() => null)) as
        | { secure_url?: string; public_id?: string; error?: { message?: string } }
        | null;

      if (res.ok && data?.secure_url) {
        return {
          secureUrl: data.secure_url,
          downloadUrl: buildDownloadUrl(data.secure_url),
          publicId: data.public_id || '',
        };
      }

      const detail = data?.error?.message || `Cloudinary upload gagal (HTTP ${res.status}).`;
      lastError = new Error(detail);

      // Retry hanya untuk error server sementara (5xx / 429), bukan 4xx dari preset/file
      if (res.status < 500 && res.status !== 429) {
        throw lastError;
      }
    } catch (err) {
      if (err === lastError) throw err;
      const errCause =
        err instanceof Error
          ? (err as { cause?: { code?: string; message?: string } }).cause
          : undefined;
      const causeDetail: string = errCause?.code || errCause?.message || '';
      lastError = new Error(
        `${err instanceof Error ? err.message : String(err)}${causeDetail ? ` (${causeDetail})` : ''}`
      );
      if (!isRetryableNetworkError(err)) {
        throw lastError;
      }
    }

    if (attempt < MAX_UPLOAD_ATTEMPTS) {
      await sleep(attempt * 500);
    }
  }

  throw lastError || new Error('Cloudinary upload gagal setelah beberapa percobaan.');
}
