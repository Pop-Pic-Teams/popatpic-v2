/** Target ukuran & dimensi upload QR agar cepat, tajam di HP, dan tidak timeout. */
const TARGET_MAX_BYTES = 3.5 * 1024 * 1024;
const MAX_UPLOAD_WIDTH = 2400;

function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality: number): Promise<Blob | null> {
  return new Promise((resolve) => canvas.toBlob((b) => resolve(b), type, quality));
}

function resizeCanvas(source: HTMLCanvasElement, targetWidth: number): HTMLCanvasElement | null {
  const scale = targetWidth / source.width;
  const scaled = document.createElement('canvas');
  scaled.width = Math.max(1, Math.round(source.width * scale));
  scaled.height = Math.max(1, Math.round(source.height * scale));
  const ctx = scaled.getContext('2d');
  if (!ctx) return null;
  ctx.drawImage(source, 0, 0, scaled.width, scaled.height);
  return scaled;
}

/**
 * Mengubah canvas hasil foto menjadi JPEG berkualitas tinggi yang ukurannya
 * optimal untuk upload QR. Jika masih terlalu besar, kualitas lalu resolusi diturunkan bertahap.
 */
export async function canvasToUploadBlob(source: HTMLCanvasElement): Promise<Blob | null> {
  let canvas: HTMLCanvasElement =
    source.width > MAX_UPLOAD_WIDTH
      ? (resizeCanvas(source, MAX_UPLOAD_WIDTH) ?? source)
      : source;
  const qualities = [0.9, 0.82, 0.74];

  for (let attempt = 0; attempt < 4; attempt++) {
    for (const q of qualities) {
      const blob = await canvasToBlob(canvas, 'image/jpeg', q);
      if (blob && blob.size <= TARGET_MAX_BYTES) return blob;
    }
    const scaled = resizeCanvas(canvas, Math.round(canvas.width * 0.8));
    if (!scaled) return null;
    canvas = scaled;
  }
  return null;
}

export interface PhotoUploadResult {
  success: boolean;
  url?: string;
  downloadUrl?: string;
  error?: string;
}

function sleepWithAbort(ms: number, signal?: AbortSignal): Promise<boolean> {
  return new Promise((resolve) => {
    if (signal?.aborted) {
      resolve(false);
      return;
    }
    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', onAbort);
      resolve(true);
    }, ms);
    const onAbort = () => {
      clearTimeout(timer);
      resolve(false);
    };
    signal?.addEventListener('abort', onAbort, { once: true });
  });
}

/**
 * Mengunggah hasil foto ke backend (/api/photos/upload) yang meneruskannya ke Cloudinary.
 * Jika terjadi gangguan jaringan/server sementara, akan otomatis mencoba ulang di latar belakang
 * tanpa memutus proses loading atau meminta user menekan tombol retry.
 */
export async function uploadResultPhoto(
  canvas: HTMLCanvasElement,
  signal?: AbortSignal
): Promise<PhotoUploadResult> {
  const blob = await canvasToUploadBlob(canvas);
  if (!blob) return { success: false, error: 'Gagal menyiapkan file foto.' };

  let attempt = 0;

  while (!signal?.aborted) {
    attempt++;
    try {
      const form = new FormData();
      form.append('file', blob, 'popatpic.jpg');

      const res = await fetch('/api/photos/upload', {
        method: 'POST',
        body: form,
        signal,
      });

      const data = await res.json().catch(() => null);
      if (res.ok && data?.success && data?.downloadUrl) {
        return { success: true, url: data.url, downloadUrl: data.downloadUrl };
      }

      // Error permanen (400/403/413/503 config): hentikan loop
      if (res.status === 400 || res.status === 403 || res.status === 413 || res.status === 503) {
        return { success: false, error: data?.error || `Upload gagal (HTTP ${res.status}).` };
      }
    } catch (err) {
      if (signal?.aborted) {
        return { success: false, error: 'Dibatalkan.' };
      }
      console.warn(`[photosApi] upload attempt ${attempt} failed, retrying automatically:`, err);
    }

    // Backoff ringan (1s, 2s, 3s, 4s, maks 5s) lalu coba lagi otomatis
    const delayMs = Math.min(5000, attempt * 1000);
    const shouldContinue = await sleepWithAbort(delayMs, signal);
    if (!shouldContinue) {
      return { success: false, error: 'Dibatalkan.' };
    }
  }

  return { success: false, error: 'Dibatalkan.' };
}
