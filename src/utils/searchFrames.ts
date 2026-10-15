import type { FrameTemplate } from '../types/photobooth';

/**
 * Interface parameter untuk pencarian frame pada Halaman Guest
 */
export interface SearchFramesOptions {
  /** Keyword dari Search Bar */
  query: string;
  /** Filter pose opsional (1, 2, 4, 6, atau 'all') */
  poseFilter?: number | 'all' | 'All';
  /** Filter tag spesifik (array tag aktif) */
  selectedTags?: string[];
}

/**
 * Fungsi TypeScript untuk Search Bar Halaman Guest.
 * Mencari frame secara fleksibel berdasarkan:
 * 1. nama_frame (case-insensitive substring)
 * 2. ATAU isi dari array `tags` (mencocokkan keyword pencarian dengan elemen array tags)
 * 3. Menghilangkan awalan '#' jika pengguna mengetikkannya di search bar
 *
 * @param frames Daftar frame yang tersedia
 * @param query Kata kunci dari search bar pengguna
 * @returns Array frame yang cocok
 */
export function searchFramesByNameOrTags(
  frames: FrameTemplate[],
  query: string
): FrameTemplate[] {
  const cleanQuery = query.trim().toLowerCase().replace(/^#+/, '');

  if (!cleanQuery) {
    return frames;
  }

  return frames.filter((frame) => {
    // 1. Cek kecocokan nama frame
    const matchesName = frame.name.toLowerCase().includes(cleanQuery);

    // 2. Cek kecocokan isi dari array tags
    const frameTags = frame.tags && frame.tags.length > 0 ? frame.tags : [frame.category];
    const matchesTags = frameTags.some((tag) => {
      const cleanTag = tag.trim().toLowerCase().replace(/^#+/, '');
      return cleanTag.includes(cleanQuery);
    });

    // Mengembalikan true jika cocok berdasarkan nama_frame ATAU isi tags
    return matchesName || matchesTags;
  });
}

/**
 * Versi query builder untuk Supabase Client (PostgreSQL / PostgREST)
 * jika Guest melakukan query langsung ke database Supabase:
 *
 * @example
 * ```ts
 * // Supabase RPC or textSearch / or filter query
 * const { data, error } = await supabase
 *   .from('frames')
 *   .select('*')
 *   .or(`name.ilike.%${cleanQuery}%,tags.cs.{${cleanQuery}}`);
 * ```
 */
