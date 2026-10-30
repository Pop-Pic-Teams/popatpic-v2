import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  const content = fs.readFileSync(envPath, 'utf-8');
  const env = {};
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    let val = trimmed.slice(eqIdx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    env[key] = val;
  }
  return env;
}

const env = loadEnv();
const client = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

function getStandardSlots(poseCount) {
  if (poseCount === 1) {
    return [{ x: 203, y: 210, w: 3601, h: 4904 }];
  }
  if (poseCount === 2) {
    return [
      { x: 203, y: 210, w: 3601, h: 2365 },
      { x: 200, y: 2749, w: 3601, h: 2365 },
    ];
  }
  if (poseCount === 6) {
    return [
      { x: 201, y: 210, w: 1715, h: 1558 },
      { x: 2086, y: 210, w: 1715, h: 1558 },
      { x: 201, y: 1883, w: 1715, h: 1558 },
      { x: 2086, y: 1883, w: 1715, h: 1558 },
      { x: 200, y: 3556, w: 1715, h: 1558 },
      { x: 2085, y: 3556, w: 1715, h: 1558 },
    ];
  }
  if (poseCount === 8) {
    return [
      { x: 201, y: 210, w: 1715, h: 1162 },
      { x: 2086, y: 210, w: 1715, h: 1162 },
      { x: 201, y: 1457, w: 1715, h: 1162 },
      { x: 2086, y: 1457, w: 1715, h: 1162 },
      { x: 201, y: 2704, w: 1715, h: 1162 },
      { x: 2086, y: 2704, w: 1715, h: 1162 },
      { x: 200, y: 3952, w: 1715, h: 1162 },
      { x: 2085, y: 3952, w: 1715, h: 1162 },
    ];
  }
  return [
    { x: 201, y: 210, w: 1715, h: 2365 },
    { x: 2086, y: 210, w: 1715, h: 2365 },
    { x: 200, y: 2749, w: 1715, h: 2365 },
    { x: 2085, y: 2749, w: 1715, h: 2365 },
  ];
}

async function uploadAsset(fileName, localPath) {
  const fileBuf = fs.readFileSync(localPath);
  const { data, error } = await client.storage.from('frames').upload(fileName, fileBuf, {
    contentType: 'image/png',
    upsert: true,
  });
  if (error) {
    console.warn(`Upload warning for ${fileName}:`, error.message);
  }
  const { data: pubData } = client.storage.from('frames').getPublicUrl(fileName);
  return pubData.publicUrl;
}

async function seedFrames() {
  console.log('Seeding initial persistent frames to Supabase...');

  // 1. Get creator user
  const { data: creator } = await client
    .from('users')
    .select('id, full_name, username')
    .eq('role', 'creator')
    .order('created_at', { ascending: true })
    .limit(1)
    .single();

  if (!creator) {
    console.error('No creator account found in users table.');
    return;
  }

  // 2. Get categories
  const { data: cats } = await client.from('categories').select('id, name, slug');
  const catMap = new Map();
  cats.forEach((c) => {
    catMap.set(c.slug.toLowerCase(), c.id);
    catMap.set(c.name.toLowerCase(), c.id);
  });

  const framesToSeed = [
    {
      name: 'Pixel Arcade',
      assetFile: 'pixel-frame.png',
      count: 4,
      desc: 'Retro 8-bit arcade aesthetic with energetic vibrant neon accents.',
      category: 'retro',
      tags: ['Retro', 'Arcade', '8Bit', 'Y2K', 'Gamer'],
    },
    {
      name: 'Cute Pastel',
      assetFile: 'cute-frame.png',
      count: 1,
      desc: 'Sweet strawberry pastel tones with charming aesthetic stickers.',
      category: 'cute',
      tags: ['Cute', 'Pastel', 'Aesthetic', 'Pink', 'Kawaii'],
    },
    {
      name: 'Circus Carnival',
      assetFile: 'circus-frame.png',
      count: 6,
      desc: 'Joyful festival theme decorated with vintage circus ornaments.',
      category: 'vintage',
      tags: ['Vintage', 'Carnival', 'Festive', 'Retro', 'Classic'],
    },
    {
      name: 'Monochrome Noir',
      assetFile: 'monochrome-frame.png',
      count: 8,
      desc: 'Clean black-and-white minimalist design with modern editorial flair.',
      category: 'minimalist',
      tags: ['Minimalist', 'Monochrome', 'Noir', 'Clean', 'Modern'],
    },
    {
      name: 'Tape Scrapbook',
      assetFile: 'tape-frame.png',
      count: 2,
      desc: 'Vintage scrapbook journal style with aesthetic washi tape cutouts.',
      category: 'vintage',
      tags: ['Vintage', 'Scrapbook', 'Aesthetic', 'WashiTape', 'Journal'],
    },
  ];

  for (const item of framesToSeed) {
    const localPath = path.resolve(process.cwd(), 'src/assets/frames', item.assetFile);
    if (!fs.existsSync(localPath)) {
      console.warn(`File not found: ${localPath}`);
      continue;
    }

    const publicUrl = await uploadAsset(`seed_${item.assetFile}`, localPath);
    const categoryId = catMap.get(item.category) || cats[0].id;

    // Cek apakah sudah ada frame dengan nama sama
    const { data: existing } = await client
      .from('frames')
      .select('id')
      .eq('name', item.name)
      .limit(1);

    if (existing && existing.length > 0) {
      console.log(`[SKIP] Frame "${item.name}" sudah ada di database.`);
      continue;
    }

    const { error: insErr } = await client.from('frames').insert({
      creator_id: creator.id,
      category_id: categoryId,
      name: item.name,
      description: item.desc,
      pose_count: item.count,
      slot_config: getStandardSlots(item.count),
      tags: item.tags,
      asset_url: publicUrl,
      status: 'approved',
      is_active: true,
    });

    if (insErr) {
      console.error(`Gagal insert frame ${item.name}:`, insErr.message);
    } else {
      console.log(`[OK] Frame "${item.name}" berhasil disimpan ke database.`);
    }
  }

  console.log('Selesai seeding frames!');
}

seedFrames();

