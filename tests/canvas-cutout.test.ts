import { describe, expect, it } from 'vitest';
import { punchOpaqueSlotCutouts } from '../src/utils/canvas';

describe('punchOpaqueSlotCutouts', () => {
  it('membuat slot opaque berwarna solid (seperti frame Everyone is a Star) menjadi transparan tanpa merusak border/stiker', () => {
    const w = 40;
    const h = 40;
    const data = new Uint8ClampedArray(w * h * 4);

    // Isi seluruh gambar dengan border biru denim opaque (30, 75, 120, 255)
    for (let i = 0; i < w * h; i++) {
      data[i * 4] = 30;
      data[i * 4 + 1] = 75;
      data[i * 4 + 2] = 120;
      data[i * 4 + 3] = 255;
    }

    // Isi kotak slot (5..34, 5..34) dengan abu-abu placeholder (217, 217, 217, 255)
    for (let y = 5; y < 35; y++) {
      for (let x = 5; x < 35; x++) {
        const idx = (y * w + x) * 4;
        data[idx] = 217;
        data[idx + 1] = 217;
        data[idx + 2] = 217;
        data[idx + 3] = 255;
      }
    }

    // Tambahkan stiker merah di pojok kanan atas slot (28..34, 5..12)
    for (let y = 5; y < 12; y++) {
      for (let x = 28; x < 35; x++) {
        const idx = (y * w + x) * 4;
        data[idx] = 220;
        data[idx + 1] = 40;
        data[idx + 2] = 40;
        data[idx + 3] = 255;
      }
    }

    const res = punchOpaqueSlotCutouts(data, w, h, [{ x: 5, y: 5, w: 30, h: 30 }], 2);
    expect(res.modified).toBe(true);
    expect(res.fallbackSlotIndices).toEqual([]);

    // Tengah slot harus transparan (alpha = 0) agar foto terlihat
    expect(data[(20 * w + 20) * 4 + 3]).toBe(0);
    // Border biru tetap opaque (alpha = 255)
    expect(data[(1 * w + 1) * 4 + 3]).toBe(255);
    // Stiker merah di pojok slot tetap opaque di atas foto
    expect(data[(7 * w + 30) * 4 + 3]).toBe(255);
  });

  it('tidak memodifikasi frame yang sudah memiliki cutout transparan', () => {
    const w = 20;
    const h = 20;
    const data = new Uint8ClampedArray(w * h * 4);
    // Default alpha = 0 (transparan)
    const res = punchOpaqueSlotCutouts(data, w, h, [{ x: 2, y: 2, w: 16, h: 16 }]);
    expect(res.modified).toBe(false);
    expect(res.fallbackSlotIndices).toEqual([]);
  });
});
