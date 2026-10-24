import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Baca file .env manual tanpa dependency tambahan
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) return {};
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
const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  console.error('[ERROR] NEXT_PUBLIC_SUPABASE_URL atau SUPABASE_SERVICE_ROLE_KEY tidak ditemukan di .env');
  process.exit(1);
}

const admin = createClient(supabaseUrl, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const DEFAULT_ACCOUNTS = [
  {
    email: 'creator@popatpic.com',
    username: 'creator',
    password: 'creator123',
    name: 'Karima Ulya (Creator)',
    role: 'creator',
  },
  {
    email: 'admin@popatpic.com',
    username: 'admin',
    password: 'admin123',
    name: 'Administrator',
    role: 'admin',
  },
];

async function seed() {
  console.log('=== Menyinkronkan Akun Demo ke Supabase Auth & Database ===\n');

  for (const acc of DEFAULT_ACCOUNTS) {
    console.log(`Memeriksa akun: ${acc.email} (@${acc.username})...`);

    // 1. Cek apakah user sudah ada di auth.users via admin.listUsers()
    const { data: listData, error: listErr } = await admin.auth.admin.listUsers();
    if (listErr) {
      console.error(`Gagal mengambil daftar user: ${listErr.message}`);
      continue;
    }

    let existingUser = listData.users.find((u) => u.email?.toLowerCase() === acc.email.toLowerCase());

    if (!existingUser) {
      // Buat akun baru di Supabase Auth
      const { data: created, error: createErr } = await admin.auth.admin.createUser({
        email: acc.email,
        password: acc.password,
        email_confirm: true,
        user_metadata: { full_name: acc.name, username: acc.username },
      });

      if (createErr || !created.user) {
        console.error(`Gagal membuat akun ${acc.email}: ${createErr?.message}`);
        continue;
      }
      existingUser = created.user;
      console.log(`[OK] Akun ${acc.email} berhasil dibuat di Supabase Auth.`);
    } else {
      // Update password agar sesuai dengan kredensial demo
      const { error: updateErr } = await admin.auth.admin.updateUserById(existingUser.id, {
        password: acc.password,
        email_confirm: true,
      });
      if (updateErr) {
        console.error(`Gagal update password ${acc.email}: ${updateErr.message}`);
      } else {
        console.log(`[OK] Password akun ${acc.email} diperbarui menjadi: ${acc.password}`);
      }
    }

    // 2. Simpan atau perbarui data di tabel public.users
    const { error: profileErr } = await admin.from('users').upsert(
      {
        id: existingUser.id,
        email: acc.email,
        full_name: acc.name,
        username: acc.username,
        role: acc.role,
        account_status: 'active',
      },
      { onConflict: 'id' }
    );

    if (profileErr) {
      console.error(`Peringatan: Gagal upsert ke public.users: ${profileErr.message}`);
      console.error('Pastikan kolom "username" sudah ditambahkan via file migrasi SQL di Supabase.');
    } else {
      console.log(`[OK] Profil public.users untuk @${acc.username} (${acc.role}) tersimpan.\n`);
    }
  }

  console.log('=== Selesai! Sekarang Anda dapat login dengan akun: ===');
  console.log('1. Creator -> Username: "creator" atau "creator@popatpic.com" | Password: "creator123"');
  console.log('2. Admin   -> Username: "admin"   atau "admin@popatpic.com"   | Password: "admin123"');
}

seed();
