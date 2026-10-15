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
    img.src = src;
  });
}

export interface ComposeOptions {
  frameImageSrc: string;
  photos: string[];
  slots: FrameSlot[];
  figmaWidth?: number;
  filter?: PhotoFilter;
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
  const margin = Math.round(15 * scale);

  // Apply filter to individual photos if specified
  const filterString = filter && filter.cssFilter !== 'none' ? filter.cssFilter : 'none';

  // 1. Draw each photo in its designated slot
  loadedPhotos.forEach((photoImg, index) => {
    const slot = slots[index];
    if (photoImg && slot) {
      const scaledX = Math.round(slot.x * scale);
      const scaledY = Math.round(slot.y * scale);
      const scaledW = Math.round(slot.w * scale);
      const scaledH = Math.round(slot.h * scale);

      // Center-crop (cover) calculation
      const imgRatio = photoImg.width / photoImg.height;
      const slotRatio = scaledW / scaledH;

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
      // Apply photo filter if present
      if (filterString !== 'none') {
        ctx.filter = filterString;
      }

      ctx.drawImage(
        photoImg,
        sx,
        sy,
        sw,
        sh,
        scaledX - margin,
        scaledY - margin,
        scaledW + margin * 2,
        scaledH + margin * 2
      );

      ctx.restore();
    }
  });

  // 2. Draw the frame overlay on top
  ctx.drawImage(loadedFrame, 0, 0, canvas.width, canvas.height);

  try {
    return canvas.toDataURL('image/png');
  } catch (err) {
    console.error('Error generating canvas data URL:', err);
    return null;
  }
}
