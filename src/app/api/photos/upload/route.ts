import crypto from 'crypto';
import { NextResponse, type NextRequest } from 'next/server';
import { isCrossOrigin } from '../../../../features/auth/server/shared';
import {
  MAX_PHOTO_UPLOAD_BYTES,
  detectImageType,
  getCloudinaryConfig,
  uploadToCloudinary,
} from '../../../../features/photos/server/cloudinary';

export const runtime = 'nodejs';
export const maxDuration = 120;

// Rate limit sederhana per IP (in-memory) untuk endpoint publik guest.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 60;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_MAX;
}

/**
 * POST /api/photos/upload
 * Mengunggah hasil foto photobooth (multipart field `file`) ke Cloudinary dan
 * mengembalikan URL publik yang dipakai sebagai isi QR Code untuk diunduh dari HP.
 * Akses: publik (guest), dengan validasi origin, ukuran, magic bytes, dan rate limit.
 */
export async function POST(request: NextRequest) {
  if (isCrossOrigin(request)) {
    return NextResponse.json({ success: false, error: 'Origin tidak diizinkan.' }, { status: 403 });
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'local';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: 'Terlalu banyak permintaan upload. Coba lagi beberapa menit lagi.' },
      { status: 429 }
    );
  }

  const config = getCloudinaryConfig();
  if (!config) {
    console.error('[POST /api/photos/upload] Cloudinary belum dikonfigurasi (cloud name / upload preset kosong).');
    return NextResponse.json(
      { success: false, error: 'Layanan penyimpanan foto belum dikonfigurasi.' },
      { status: 503 }
    );
  }

  let file: Blob | null = null;
  try {
    const formData = await request.formData();
    const value = formData.get('file');
    if (value && typeof value === 'object' && 'arrayBuffer' in value) {
      file = value as Blob;
    }
  } catch {
    return NextResponse.json({ success: false, error: 'Format request tidak valid.' }, { status: 400 });
  }

  if (!file) {
    return NextResponse.json({ success: false, error: 'File foto wajib disertakan.' }, { status: 400 });
  }
  if (file.size === 0 || file.size > MAX_PHOTO_UPLOAD_BYTES) {
    return NextResponse.json(
      { success: false, error: 'Ukuran file foto tidak valid atau melebihi batas 9.5 MB.' },
      { status: 413 }
    );
  }

  const bytes = new Uint8Array(await file.arrayBuffer());
  const mime = detectImageType(bytes);
  if (!mime) {
    return NextResponse.json(
      { success: false, error: 'File harus berupa gambar JPEG atau PNG yang valid.' },
      { status: 400 }
    );
  }

  const ext = mime === 'image/png' ? 'png' : 'jpg';
  const fileName = `popatpic_${Date.now()}_${crypto.randomUUID().slice(0, 8)}.${ext}`;

  try {
    const result = await uploadToCloudinary(new Blob([bytes], { type: mime }), config, fileName);
    return NextResponse.json(
      {
        success: true,
        url: result.secureUrl,
        downloadUrl: result.downloadUrl,
        publicId: result.publicId,
      },
      { status: 201 }
    );
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error('[POST /api/photos/upload] Cloudinary error:', detail);
    return NextResponse.json(
      { success: false, error: 'Gagal mengunggah foto ke penyimpanan cloud. Silakan coba lagi.' },
      { status: 502 }
    );
  }
}
