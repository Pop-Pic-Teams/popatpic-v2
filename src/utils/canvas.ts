import type { FrameSlot, PhotoFilter } from '../types/photobooth';

export function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => {
      console.warn('Failed to load image:', src);
      resolve(null);
    };
    const resolvedSrc = typeof src === 'string' ? src : String(src);
    img.src = resolvedSrc;
  });
}

export interface ComposeOptions {
  frameImageSrc: string;
  photos: string[];
  slots: FrameSlot[];
  figmaWidth?: number;
  filter?: PhotoFilter;
}

export interface ScaledSlotRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

/**
 * Jika frame PNG diunggah tanpa channel transparansi (opaque) sehingga kotak slot
 * tertutup warna solid placeholder (mis. abu-abu/putih), fungsi ini membuat area
 * placeholder di dalam tiap slot menjadi transparan menggunakan flood-fill (BFS)
 * dari area tengah slot. Border dan stiker dekoratif di pinggir slot tetap utuh di atas foto.
 */
export function punchOpaqueSlotCutouts(
  data: Uint8ClampedArray,
  width: number,
  height: number,
  slots: ScaledSlotRect[],
  pad = 16,
  channelTolerance = 28
): { modified: boolean; fallbackSlotIndices: number[] } {
  let modified = false;
  const fallbackSlotIndices: number[] = [];

  const clampX = (x: number) => Math.max(0, Math.min(width - 1, Math.round(x)));
  const clampY = (y: number) => Math.max(0, Math.min(height - 1, Math.round(y)));

  for (let i = 0; i < slots.length; i++) {
    const slot = slots[i];
    if (slot.w <= 0 || slot.h <= 0) continue;

    // Cek 5 titik sampel (tengah + 4 kuadran) untuk memastikan apakah slot sudah transparan
    const samplePoints: Array<[number, number]> = [
      [clampX(slot.x + slot.w * 0.5), clampY(slot.y + slot.h * 0.5)],
      [clampX(slot.x + slot.w * 0.3), clampY(slot.y + slot.h * 0.3)],
      [clampX(slot.x + slot.w * 0.7), clampY(slot.y + slot.h * 0.3)],
      [clampX(slot.x + slot.w * 0.3), clampY(slot.y + slot.h * 0.7)],
      [clampX(slot.x + slot.w * 0.7), clampY(slot.y + slot.h * 0.7)],
    ];

    const hasTransparency = samplePoints.some(
      ([sx, sy]) => data[(sy * width + sx) * 4 + 3] < 245
    );
    if (hasTransparency) continue;

    // Slot sepenuhnya opaque: ambil warna placeholder di titik tengah slot
    const [cx, cy] = samplePoints[0];
    const centerIdx = (cy * width + cx) * 4;
    const pr = data[centerIdx];
    const pg = data[centerIdx + 1];
    const pb = data[centerIdx + 2];

    const minX = Math.max(0, Math.floor(slot.x - pad));
    const maxX = Math.min(width - 1, Math.ceil(slot.x + slot.w + pad));
    const minY = Math.max(0, Math.floor(slot.y - pad));
    const maxY = Math.min(height - 1, Math.ceil(slot.y + slot.h + pad));
    const boxW = maxX - minX + 1;
    const boxH = maxY - minY + 1;

    const visited = new Uint8Array(boxW * boxH);
    const queue = new Int32Array(boxW * boxH);
    let head = 0;
    let tail = 0;

    const matchesPlaceholder = (x: number, y: number): boolean => {
      const idx = (y * width + x) * 4;
      if (data[idx + 3] < 245) return false;
      return (
        Math.abs(data[idx] - pr) <= channelTolerance &&
        Math.abs(data[idx + 1] - pg) <= channelTolerance &&
        Math.abs(data[idx + 2] - pb) <= channelTolerance
      );
    };

    const enqueue = (x: number, y: number) => {
      if (x < minX || x > maxX || y < minY || y > maxY) return;
      const localIdx = (y - minY) * boxW + (x - minX);
      if (visited[localIdx]) return;
      if (!matchesPlaceholder(x, y)) return;
      visited[localIdx] = 1;
      queue[tail++] = localIdx;
    };

    for (const [sx, sy] of samplePoints) {
      enqueue(sx, sy);
    }

    let cleared = 0;
    while (head < tail) {
      const localIdx = queue[head++];
      const x = minX + (localIdx % boxW);
      const y = minY + Math.floor(localIdx / boxW);
      const idx = (y * width + x) * 4;
      data[idx + 3] = 0;
      cleared++;

      enqueue(x - 1, y);
      enqueue(x + 1, y);
      enqueue(x, y - 1);
      enqueue(x, y + 1);
    }

    if (cleared >= slot.w * slot.h * 0.45) {
      modified = true;
    } else {
      fallbackSlotIndices.push(i);
    }
  }

  return { modified, fallbackSlotIndices };
}

function drawPhotoInSlot(
  ctx: CanvasRenderingContext2D,
  photoImg: HTMLImageElement,
  rect: ScaledSlotRect,
  margin: number,
  filterString: string
) {
  const imgRatio = photoImg.width / photoImg.height;
  const slotRatio = rect.w / rect.h;

  let sx = 0;
  let sy = 0;
  let sw = photoImg.width;
  let sh = photoImg.height;

  if (imgRatio > slotRatio) {
    sw = photoImg.height * slotRatio;
    sx = (photoImg.width - sw) / 2;
  } else {
    sh = photoImg.width / slotRatio;
    sy = (photoImg.height - sh) / 2;
  }

  ctx.save();
  if (filterString !== 'none') {
    ctx.filter = filterString;
  }
  ctx.drawImage(
    photoImg,
    sx,
    sy,
    sw,
    sh,
    rect.x - margin,
    rect.y - margin,
    rect.w + margin * 2,
    rect.h + margin * 2
  );
  ctx.restore();
}

/**
 * Composite photo captures into the selected frame with filters and overlays
 */
export async function composePhotoboothImage(
  canvas: HTMLCanvasElement,
  options: ComposeOptions
): Promise<string | null> {
  const { frameImageSrc, photos, slots, figmaWidth = 4000, filter } = options;

  const [loadedFrame, ...loadedPhotos] = await Promise.all([
    loadImage(frameImageSrc),
    ...photos.map((src) => loadImage(src)),
  ]);

  if (!loadedFrame) {
    throw new Error('Frame image could not be loaded');
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  canvas.width = loadedFrame.width;
  canvas.height = loadedFrame.height;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const scale = canvas.width / (figmaWidth || canvas.width);
  // Slight margin to guarantee no white seam around the cutout
  const margin = Math.round(20 * scale);

  // Apply filter to individual photos if specified
  const filterString = filter && filter.cssFilter !== 'none' ? filter.cssFilter : 'none';

  const scaledSlots: ScaledSlotRect[] = slots.map((slot) => ({
    x: Math.round(slot.x * scale),
    y: Math.round(slot.y * scale),
    w: Math.round(slot.w * scale),
    h: Math.round(slot.h * scale),
  }));

  // 1. Draw each photo in its designated slot
  loadedPhotos.forEach((photoImg, index) => {
    const rect = scaledSlots[index];
    if (photoImg && rect) {
      drawPhotoInSlot(ctx, photoImg, rect, margin, filterString);
    }
  });

  // 2. Prepare frame overlay (auto-cutout opaque placeholder slots if frame has no alpha)
  let frameSource: CanvasImageSource = loadedFrame;
  let fallbackSlotIndices: number[] = [];

  if (scaledSlots.length > 0 && typeof document !== 'undefined') {
    try {
      const frameCanvas = document.createElement('canvas');
      frameCanvas.width = canvas.width;
      frameCanvas.height = canvas.height;
      const frameCtx = frameCanvas.getContext('2d', { willReadFrequently: true });
      if (frameCtx) {
        frameCtx.drawImage(loadedFrame, 0, 0, canvas.width, canvas.height);
        const imgData = frameCtx.getImageData(0, 0, canvas.width, canvas.height);
        const result = punchOpaqueSlotCutouts(
          imgData.data,
          canvas.width,
          canvas.height,
          scaledSlots,
          Math.max(12, Math.round(35 * scale))
        );
        fallbackSlotIndices = result.fallbackSlotIndices;
        if (result.modified) {
          frameCtx.putImageData(imgData, 0, 0);
          frameSource = frameCanvas;
        }
      }
    } catch (err) {
      console.warn('Unable to inspect frame transparency, drawing frame directly:', err);
    }
  }

  // 3. Draw the frame overlay on top
  ctx.drawImage(frameSource, 0, 0, canvas.width, canvas.height);

  // 4. Fallback: if any opaque slot had a non-uniform pattern, draw photo cleanly inside slot
  fallbackSlotIndices.forEach((index) => {
    const photoImg = loadedPhotos[index];
    const rect = scaledSlots[index];
    if (photoImg && rect) {
      drawPhotoInSlot(ctx, photoImg, rect, 0, filterString);
    }
  });

  try {
    return canvas.toDataURL('image/png');
  } catch (err) {
    console.error('Error generating canvas data URL:', err);
    return null;
  }
}
