export const APP_CONFIG = {
  name: 'Pop@Pic!',
  tagline: 'Vintage Charm Meets Modern Self-Photo Studio',
  canvas: {
    width: 4000,
    height: 5900,
    aspectRatio: '4000 / 5900',
  },
  supportedPoseCounts: [1, 2, 3, 4, 6] as const,
  categories: [
    'Retro Vintage',
    'Cute & Playful',
    'Y2K Aesthetic',
    'Minimalist Modern',
    'Editorial Film',
    'Seasonal Festive',
  ] as const,
};
