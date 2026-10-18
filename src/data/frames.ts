import type {
  FrameTemplate,
  PhotoFilter,
  AuditLog,
  GuestPhotoRecord,
  FrameStyle,
  FrameSlot,
} from '../types/photobooth';

import pixelFramePng from '../assets/frames/pixel-frame.png';
import cuteFramePng from '../assets/frames/cute-frame.png';
import circusFramePng from '../assets/frames/circus-frame.png';
import monochromeFramePng from '../assets/frames/monochrome-frame.png';
import tapeFramePng from '../assets/frames/tape-frame.png';

const resolveImgSrc = (img: any): string =>
  typeof img === 'object' && img?.src ? img.src : String(img || '');

// Generate dynamic SVG frame data URL with Poppins typography
function createSvgFrameDataUrl(
  title: string,
  subtitle: string,
  theme: 'pink' | 'purple' | 'cream' | 'dark' | 'formal',
  slots: FrameSlot[]
): string {
  const width = 4000;
  const height = 5900;

  const bgGradient =
    theme === 'pink'
      ? ['#ffe4ec', '#fecdd3', '#fda4af']
      : theme === 'purple'
        ? ['#f3e8ff', '#e9d5ff', '#d8b4fe']
        : theme === 'dark'
          ? ['#0f172a', '#1e293b', '#334155']
          : theme === 'formal'
            ? ['#f8fafc', '#e2e8f0', '#cbd5e1']
            : ['#fef3c7', '#fde68a', '#fef9c3'];

  const textColor = theme === 'dark' ? '#f8fafc' : '#4c1d95';
  const subtextColor = theme === 'dark' ? '#94a3b8' : '#6b21a8';
  const accentColor = theme === 'dark' ? '#38bdf8' : '#ec4899';

  const cutoutRects = slots
    .map(
      (s) =>
        `<rect x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="30" fill="black" />`
    )
    .join('');

  const slotBorders = slots
    .map(
      (s) =>
        `<rect x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="30" fill="none" stroke="${accentColor}" stroke-width="12" opacity="0.6"/>`
    )
    .join('');

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bgGradient[0]}" />
        <stop offset="50%" stop-color="${bgGradient[1]}" />
        <stop offset="100%" stop-color="${bgGradient[2]}" />
      </linearGradient>
      <mask id="cutoutMask">
        <rect width="${width}" height="${height}" fill="white" />
        ${cutoutRects}
      </mask>
    </defs>
    
    <rect width="${width}" height="${height}" fill="url(#frameGrad)" mask="url(#cutoutMask)" />
    
    <rect x="120" y="120" width="${width - 240}" height="${height - 240}" rx="60" fill="none" stroke="${accentColor}" stroke-width="16" opacity="0.35" />
    ${slotBorders}
    
    <text x="2000" y="5200" font-family="'Poppins', sans-serif" font-size="200" font-weight="800" text-anchor="middle" fill="${textColor}">
      ${title}
    </text>
    <text x="2000" y="5420" font-family="'Poppins', sans-serif" font-size="95" font-weight="600" text-anchor="middle" fill="${subtextColor}" letter-spacing="12">
      ${subtitle}
    </text>
    <circle cx="1200" cy="5140" r="30" fill="${accentColor}" />
    <circle cx="2800" cy="5140" r="30" fill="${accentColor}" />
  </svg>`.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Layout template guides for Creator download (SRS F-C15, BR-014)
export function getLayoutGuideDownload(poseCount: number): string {
  const width = 4000;
  const height = 5900;
  const slots = getStandardSlots(poseCount);
  const slotGuide = slots
    .map(
      (s, idx) => `
    <rect x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="20" fill="none" stroke="#6b38d4" stroke-width="14" stroke-dasharray="24,16"/>
    <text x="${s.x + s.w / 2}" y="${s.y + s.h / 2}" font-family="'Poppins', sans-serif" font-size="120" font-weight="700" fill="#6b38d4" text-anchor="middle" dominant-baseline="middle">
      Slot #${idx + 1} (${s.w} x ${s.h}px)
    </text>`
    )
    .join('');

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" fill="#f8fafc" />
    <rect x="80" y="80" width="${width - 160}" height="${height - 160}" fill="none" stroke="#cbd5e1" stroke-width="8" stroke-dasharray="16,16" />
    
    <text x="2000" y="240" font-family="'Inter', sans-serif" font-size="100" font-weight="800" fill="#1e293b" text-anchor="middle">
      POP@PIC! LAYOUT TEMPLATE GUIDE (${poseCount} POSES)
    </text>
    <text x="2000" y="320" font-family="'Inter', sans-serif" font-size="60" font-weight="500" fill="#64748b" text-anchor="middle">
      Standard Canvas: 4000 x 5900 px. Transparent areas reserved for photo slots.
    </text>
    
    ${slotGuide}
    
    <rect x="400" y="5250" width="3200" height="450" rx="30" fill="#f1f5f9" stroke="#e2e8f0" stroke-width="6"/>
    <text x="2000" y="5420" font-family="'Inter', sans-serif" font-size="65" font-weight="700" fill="#ea580c" text-anchor="middle">
      Creator Branding / Watermark Area (Leave blank or add artwork)
    </text>
    <text x="2000" y="5520" font-family="'Inter', sans-serif" font-size="50" font-weight="500" fill="#64748b" text-anchor="middle">
      Export your final design file in transparent PNG format.
    </text>
  </svg>`.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Standard slots generator
export function getStandardSlots(poseCount: number): FrameSlot[] {
  if (poseCount === 1) {
    return [{ x: 500, y: 600, w: 3000, h: 4200 }];
  }
  if (poseCount === 2) {
    return [
      { x: 650, y: 500, w: 2700, h: 2200 },
      { x: 650, y: 2850, w: 2700, h: 2200 },
    ];
  }
  if (poseCount === 6) {
    return [
      { x: 480, y: 380, w: 1460, h: 1450 },
      { x: 2060, y: 380, w: 1460, h: 1450 },
      { x: 480, y: 1950, w: 1460, h: 1450 },
      { x: 2060, y: 1950, w: 1460, h: 1450 },
      { x: 480, y: 3520, w: 1460, h: 1450 },
      { x: 2060, y: 3520, w: 1460, h: 1450 },
    ];
  }
  // Default 4 poses
  return [
    { x: 480, y: 480, w: 1460, h: 1940 },
    { x: 2060, y: 480, w: 1460, h: 1940 },
    { x: 480, y: 2540, w: 1460, h: 1940 },
    { x: 2060, y: 2540, w: 1460, h: 1940 },
  ];
}

const fourSlots = getStandardSlots(4);
const oneSlot = getStandardSlots(1);
const twoSlots = getStandardSlots(2);
const sixSlots = getStandardSlots(6);

// Pre-seeded frames adhering strictly to SRS categories: Cute, Vintage, Minimalist, Formal, Retro
export const INITIAL_FRAMES: FrameTemplate[] = [
  // 4 Poses
  {
    id: 'frm_pixel_arcade',
    name: 'Pixel Arcade',
    count: 4,
    image: resolveImgSrc(pixelFramePng),
    desc: 'Retro 8-bit arcade aesthetic with energetic vibrant neon accents.',
    figmaWidth: 4000,
    slots: fourSlots,
    category: 'Retro',
    tags: ['Retro', 'Arcade', '8Bit', 'Y2K', 'Gamer'],
    author: 'Karima Ulya',
    creator_id: 'usr_creator_1',
    status: 'approved',
    is_active: true,
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'frm_cute_pastel',
    name: 'Cute Pastel',
    count: 4,
    image: resolveImgSrc(cuteFramePng),
    desc: 'Sweet strawberry pastel tones with charming aesthetic stickers.',
    figmaWidth: 4000,
    slots: fourSlots,
    category: 'Cute',
    tags: ['Cute', 'Pastel', 'Aesthetic', 'Pink', 'Kawaii'],
    author: 'Karima Ulya',
    creator_id: 'usr_creator_1',
    status: 'approved',
    is_active: true,
    created_at: '2026-03-02T12:00:00Z',
  },
  {
    id: 'frm_circus_carnival',
    name: 'Circus Carnival',
    count: 4,
    image: resolveImgSrc(circusFramePng),
    desc: 'Joyful festival theme decorated with vintage circus ornaments.',
    figmaWidth: 4000,
    slots: fourSlots,
    category: 'Vintage',
    tags: ['Vintage', 'Carnival', 'Festive', 'Retro', 'Classic'],
    author: 'Karima Ulya',
    creator_id: 'usr_creator_1',
    status: 'approved',
    is_active: true,
    created_at: '2026-03-03T15:00:00Z',
  },
  {
    id: 'frm_monochrome_noir',
    name: 'Monochrome Noir',
    count: 4,
    image: resolveImgSrc(monochromeFramePng),
    desc: 'Clean black-and-white minimalist design with modern editorial flair.',
    figmaWidth: 4000,
    slots: fourSlots,
    category: 'Minimalist',
    tags: ['Minimalist', 'Monochrome', 'Noir', 'Clean', 'Modern'],
    author: 'Nadhira Studio',
    creator_id: 'usr_creator_2',
    status: 'approved',
    is_active: true,
    created_at: '2026-03-04T09:00:00Z',
  },
  {
    id: 'frm_tape_scrapbook',
    name: 'Tape Scrapbook',
    count: 4,
    image: resolveImgSrc(tapeFramePng),
    desc: 'Vintage scrapbook journal style with aesthetic washi tape cutouts.',
    figmaWidth: 4000,
    slots: fourSlots,
    category: 'Vintage',
    tags: ['Vintage', 'Scrapbook', 'Aesthetic', 'WashiTape', 'Journal'],
    author: 'Karima Ulya',
    creator_id: 'usr_creator_1',
    status: 'approved',
    is_active: true,
    created_at: '2026-03-05T14:30:00Z',
  },

  // 1 Pose
  {
    id: 'frm_solo_spotlight',
    name: 'Sweet Solo',
    count: 1,
    image: createSvgFrameDataUrl('Pop@Pic!', 'SWEET SOLO • EDITION 2026', 'pink', oneSlot),
    desc: 'Single portrait frame with gentle warm blush accents.',
    figmaWidth: 4000,
    slots: oneSlot,
    category: 'Cute',
    tags: ['Cute', 'Solo', 'Sweet', 'Portrait', 'Minimalist'],
    author: 'Karima Ulya',
    creator_id: 'usr_creator_1',
    status: 'approved',
    is_active: true,
    created_at: '2026-03-06T11:00:00Z',
  },
  {
    id: 'frm_formal_mono',
    name: 'Formal Elegance',
    count: 1,
    image: createSvgFrameDataUrl('Pop@Pic!', 'EXECUTIVE PORTRAIT • 2026', 'formal', oneSlot),
    desc: 'Minimalist executive frame tailored for professional portraits and celebrations.',
    figmaWidth: 4000,
    slots: oneSlot,
    category: 'Formal',
    tags: ['Formal', 'Executive', 'Minimalist', 'Clean', 'Portrait'],
    author: 'Nadhira Studio',
    creator_id: 'usr_creator_2',
    status: 'approved',
    is_active: true,
    created_at: '2026-03-07T16:00:00Z',
  },

  // 2 Poses
  {
    id: 'frm_duo_sweetheart',
    name: 'Duo Sweetheart',
    count: 2,
    image: createSvgFrameDataUrl('Pop@Pic!', 'BESTIES FOREVER • 2 CUT STRIP', 'purple', twoSlots),
    desc: 'Two-cut strip layout perfect for couples and best friends.',
    figmaWidth: 4000,
    slots: twoSlots,
    category: 'Cute',
    tags: ['Cute', 'Besties', 'Couple', 'Purple', 'Sweetheart'],
    author: 'Karima Ulya',
    creator_id: 'usr_creator_1',
    status: 'approved',
    is_active: true,
    created_at: '2026-03-08T10:00:00Z',
  },
  {
    id: 'frm_vintage_diary',
    name: 'Vintage Diary',
    count: 2,
    image: createSvgFrameDataUrl('Pop@Pic!', 'MEMORY ARCHIVE • GOLDEN HOUR', 'cream', twoSlots),
    desc: 'Warm golden-hour tones inspired by classic memory albums.',
    figmaWidth: 4000,
    slots: twoSlots,
    category: 'Vintage',
    tags: ['Vintage', 'Diary', 'GoldenHour', 'Retro', 'Archive'],
    author: 'Nadhira Studio',
    creator_id: 'usr_creator_2',
    status: 'approved',
    is_active: true,
    created_at: '2026-03-09T13:00:00Z',
  },

  // 6 Poses
  {
    id: 'frm_party_filmstrip',
    name: 'Party Filmstrip',
    count: 6,
    image: createSvgFrameDataUrl('Pop@Pic!', 'SIX-CUT SPREAD • PHOTO ARCHIVE', 'pink', sixSlots),
    desc: 'Dynamic 6-slot montage designed for lively group memories.',
    figmaWidth: 4000,
    slots: sixSlots,
    category: 'Cute',
    tags: ['Cute', 'Party', 'Filmstrip', 'Group', 'Memories'],
    author: 'Karima Ulya',
    creator_id: 'usr_creator_1',
    status: 'approved',
    is_active: true,
    created_at: '2026-03-10T11:00:00Z',
  },
  {
    id: 'frm_minimal_six',
    name: 'Minimal Clean Grid',
    count: 6,
    image: createSvgFrameDataUrl('Pop@Pic!', 'CLEAN GRID • ARCHIVE 06', 'formal', sixSlots),
    desc: 'Modern 6-slot grid featuring architectural precision.',
    figmaWidth: 4000,
    slots: sixSlots,
    category: 'Minimalist',
    tags: ['Minimalist', 'CleanGrid', 'Modern', 'Aesthetic', 'Architecture'],
    author: 'Nadhira Studio',
    creator_id: 'usr_creator_2',
    status: 'approved',
    is_active: true,
    created_at: '2026-03-11T14:00:00Z',
  },

  // Pending Review Example (for Admin approval demo)
  {
    id: 'frm_pending_y2k',
    name: 'Retro Y2K Cyber Butterfly',
    count: 4,
    image: createSvgFrameDataUrl('Pop@Pic!', 'Y2K CYBER • LIVE PREVIEW', 'purple', fourSlots),
    desc: 'Vibrant 2000s cyber butterfly aesthetic with holographic tones.',
    figmaWidth: 4000,
    slots: fourSlots,
    category: 'Retro',
    tags: ['Retro', 'Y2K', 'Cyber', 'Holographic', 'Butterfly'],
    author: 'Karima Ulya',
    creator_id: 'usr_creator_1',
    status: 'pending_review',
    is_active: false,
    created_at: '2026-10-11T09:15:00Z',
  },
];

// Presets photo filters (SRS 1.3, 3.1 F-G012)
export const PHOTO_FILTERS: PhotoFilter[] = [
  {
    id: 'normal',
    name: 'Normal',
    label: 'Natural',
    cssFilter: 'none',
    previewColor: '#e0e7ff',
    description: 'Original sharp colors without filter enhancements.',
  },
  {
    id: 'retro-90s',
    name: 'Retro 90s',
    label: '90s Vibe',
    cssFilter: 'sepia(0.28) contrast(1.15) brightness(1.05) saturate(1.25)',
    previewColor: '#fed7aa',
    description: 'Warm nostalgic 90s vintage camcorder look.',
  },
  {
    id: 'pastel-glow',
    name: 'Pastel Glow',
    label: 'Pastel',
    cssFilter: 'brightness(1.12) contrast(0.96) saturate(1.15) hue-rotate(-8deg)',
    previewColor: '#fbcfe8',
    description: 'Dreamy soft contrast with delicate pastel aura.',
  },
  {
    id: 'bw-noir',
    name: 'B&W Noir',
    label: 'Noir',
    cssFilter: 'grayscale(1) contrast(1.35) brightness(0.95)',
    previewColor: '#94a3b8',
    description: 'Photogenic high-contrast black & white tones.',
  },
  {
    id: 'cyber-neon',
    name: 'Cyber Neon',
    label: 'Neon',
    cssFilter: 'contrast(1.22) saturate(1.65) hue-rotate(35deg) brightness(1.06)',
    previewColor: '#c084fc',
    description: 'Electric ultraviolet and cyber neon tones.',
  },
  {
    id: 'soft-warm',
    name: 'Soft Warm',
    label: 'Warm',
    cssFilter: 'sepia(0.35) saturate(1.3) brightness(1.04) contrast(1.05)',
    previewColor: '#fef08a',
    description: 'Enchanting golden-hour sunset radiance.',
  },
  {
    id: 'vintage-film',
    name: 'Vintage Film',
    label: '35mm Film',
    cssFilter: 'sepia(0.4) contrast(0.92) brightness(1.08) hue-rotate(-18deg)',
    previewColor: '#e2e8f0',
    description: 'Classic analog 35mm film grain and tone emulation.',
  },
];

// Persistent Frames Store
const STORAGE_KEY_FRAMES = 'popatpic_frames_db';
const STORAGE_KEY_AUDIT = 'popatpic_audit_logs';
const STORAGE_KEY_PHOTOS = 'popatpic_guest_photos_db';

export function getAllFrames(): FrameTemplate[] {
  if (typeof window === 'undefined') {
    return INITIAL_FRAMES;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY_FRAMES);
    if (raw) {
      const parsed: FrameTemplate[] = JSON.parse(raw);
      // Map initial tags fallback if missing from cached items
      const initialMap = new Map<string, string[]>();
      INITIAL_FRAMES.forEach((initF) => {
        if (initF.tags) initialMap.set(initF.id, initF.tags);
      });

      return parsed.map((f) => {
        if (!f.tags || f.tags.length === 0) {
          const fallback = initialMap.get(f.id) || [f.category, 'Aesthetic'];
          return { ...f, tags: fallback };
        }
        return f;
      });
    }
  } catch (e) {
    console.error('Failed reading frames store', e);
  }
  return INITIAL_FRAMES;
}

export function saveAllFrames(frames: FrameTemplate[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY_FRAMES, JSON.stringify(frames));
}

// Guest: Get only approved and active frames (BR-03, F-G02)
export function getApprovedActiveFrames(): FrameTemplate[] {
  return getAllFrames().filter((f) => f.status === 'approved' && f.is_active);
}

// Creator: Get frames created by creator_id (BR-06, F-C04, F-C11)
export function getFramesByCreator(creatorId: string): FrameTemplate[] {
  return getAllFrames().filter((f) => f.creator_id === creatorId);
}

// Creator: Submit new frame for review (F-C05, F-C09, F-C10)
export function submitFrameForReview(
  data: {
    name: string;
    desc: string;
    count: number;
    category: FrameStyle;
    tags?: string[];
    image: string;
    slots?: FrameSlot[];
  },
  creatorId: string,
  creatorName: string
): FrameTemplate {
  const all = getAllFrames();
  const slots = data.slots && data.slots.length > 0 ? data.slots : getStandardSlots(data.count);

  const tags = data.tags && data.tags.length > 0 ? data.tags : [data.category, 'Aesthetic'];

  const newFrame: FrameTemplate = {
    id: `frm_${Date.now()}`,
    name: data.name,
    desc: data.desc,
    count: data.count,
    image: data.image,
    figmaWidth: 4000,
    slots,
    category: data.category,
    tags,
    author: creatorName,
    creator_id: creatorId,
    status: 'pending_review',
    is_active: false,
    created_at: new Date().toISOString(),
  };

  const updated = [newFrame, ...all];
  saveAllFrames(updated);
  return newFrame;
}

// Creator: Update draft or rejected frame (F-C12, BR-06)
export function updateCreatorFrame(
  frameId: string,
  creatorId: string,
  updates: Partial<FrameTemplate>
): boolean {
  const all = getAllFrames();
  const index = all.findIndex((f) => f.id === frameId && f.creator_id === creatorId);
  if (index === -1) return false;

  const target = all[index];
  if (target.status !== 'draft' && target.status !== 'rejected') {
    return false;
  }

  all[index] = {
    ...target,
    ...updates,
    status: 'pending_review', // Re-submit for review
    rejection_reason: undefined,
    updated_at: new Date().toISOString(),
  };

  saveAllFrames(all);
  return true;
}

// Creator: Archive own frame (F-C13, BR-06)
export function archiveCreatorFrame(frameId: string, creatorId: string): boolean {
  const all = getAllFrames();
  const index = all.findIndex((f) => f.id === frameId && f.creator_id === creatorId);
  if (index === -1) return false;

  all[index] = {
    ...all[index],
    status: 'archived',
    is_active: false,
    updated_at: new Date().toISOString(),
  };

  saveAllFrames(all);
  return true;
}

// Admin: Moderate Frame (F-A08, F-A09, BR-05, BR-07, BR-012)
export function adminModerateFrame(
  frameId: string,
  decision: 'approve' | 'reject' | 'archive' | 'toggle_active',
  adminId: string,
  adminName: string,
  reason?: string
): boolean {
  const all = getAllFrames();
  const index = all.findIndex((f) => f.id === frameId);
  if (index === -1) return false;

  const frame = all[index];
  let actionName: AuditLog['action'] = 'APPROVE_FRAME';
  let details = '';

  if (decision === 'approve') {
    frame.status = 'approved';
    frame.is_active = true;
    frame.rejection_reason = undefined;
    actionName = 'APPROVE_FRAME';
    details = `Approved frame "${frame.name}" for public listing.`;
  } else if (decision === 'reject') {
    frame.status = 'rejected';
    frame.is_active = false;
    frame.rejection_reason = reason || 'Does not comply with layout guidelines or design standards.';
    actionName = 'REJECT_FRAME';
    details = `Rejected frame "${frame.name}". Reason: ${frame.rejection_reason}`;
  } else if (decision === 'archive') {
    frame.status = 'archived';
    frame.is_active = false;
    actionName = 'ARCHIVE_FRAME';
    details = `Archived frame "${frame.name}".`;
  } else if (decision === 'toggle_active') {
    frame.is_active = !frame.is_active;
    actionName = 'TOGGLE_FRAME_STATUS';
    details = `Updated public visibility for frame "${frame.name}" to ${frame.is_active ? 'Active' : 'Inactive'}.`;
  }

  frame.updated_at = new Date().toISOString();
  saveAllFrames(all);

  // Write to Audit Log (BR-012, F-A12)
  addAuditLog({
    id: `log_${Date.now()}`,
    adminId,
    adminName,
    action: actionName,
    targetType: 'frame',
    targetId: frame.id,
    details,
    timestamp: new Date().toISOString(),
  });

  return true;
}

// Audit Logs Store (F-A12, BR-012)
export function getAuditLogs(): AuditLog[] {
  if (typeof window === 'undefined') {
    return [
      {
        id: 'log_seed_1',
        adminId: 'usr_admin_1',
        adminName: 'Pop@Pic! Admin',
        action: 'APPROVE_FRAME',
        targetType: 'frame',
        targetId: 'frm_pixel_arcade',
        details: 'Approved frame "Pixel Arcade" created by Karima Ulya.',
        timestamp: '2026-03-01T10:05:00Z',
      },
      {
        id: 'log_seed_2',
        adminId: 'usr_admin_1',
        adminName: 'Pop@Pic! Admin',
        action: 'ACTIVATE_CREATOR',
        targetType: 'creator',
        targetId: 'usr_creator_1',
        details: 'Activated Creator status for Karima Ulya.',
        timestamp: '2026-02-15T11:00:00Z',
      },
    ];
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY_AUDIT);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed reading audit logs', e);
  }
  return [
    {
      id: 'log_seed_1',
      adminId: 'usr_admin_1',
      adminName: 'Pop@Pic! Admin',
      action: 'APPROVE_FRAME',
      targetType: 'frame',
      targetId: 'frm_pixel_arcade',
      details: 'Approved frame "Pixel Arcade" created by Karima Ulya.',
      timestamp: '2026-03-01T10:05:00Z',
    },
    {
      id: 'log_seed_2',
      adminId: 'usr_admin_1',
      adminName: 'Pop@Pic! Admin',
      action: 'ACTIVATE_CREATOR',
      targetType: 'creator',
      targetId: 'usr_creator_1',
      details: 'Activated Creator status for Karima Ulya.',
      timestamp: '2026-02-15T11:00:00Z',
    },
  ];
}

export function addAuditLog(log: AuditLog): void {
  if (typeof window === 'undefined') return;
  const existing = getAuditLogs();
  const updated = [log, ...existing];
  localStorage.setItem(STORAGE_KEY_AUDIT, JSON.stringify(updated));
}

// Guest Photos Records (F-G016, F-A11)
export function getGuestPhotos(): GuestPhotoRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PHOTOS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed reading photos records', e);
  }
  return [];
}

export function recordGuestPhoto(record: GuestPhotoRecord): void {
  if (typeof window === 'undefined') return;
  const existing = getGuestPhotos();
  const updated = [record, ...existing.slice(0, 49)];
  localStorage.setItem(STORAGE_KEY_PHOTOS, JSON.stringify(updated));
}
