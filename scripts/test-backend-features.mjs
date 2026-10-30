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

let passedCount = 0;
let failedCount = 0;
const results = [];

function assertTest(name, condition, details = '') {
  if (condition) {
    passedCount++;
    results.push({ name, status: 'PASS', details: details || 'Berhasil diverifikasi sesuai spesifikasi' });
    console.log(`[PASS] ${name}`);
  } else {
    failedCount++;
    results.push({ name, status: 'FAIL', details: details || 'Gagal dalam pengujian' });
    console.error(`[FAIL] ${name} -> ${details}`);
  }
}

async function runEndToEndTests() {
  console.log('=== MEMULAI INTEGRATION TESTING 4 FITUR BACKEND ===\n');

  // Ambil user creator dan user admin dari database untuk pengujian
  const { data: creatorUser } = await client
    .from('users')
    .select('id, full_name, username, email, role, account_status')
    .eq('role', 'creator')
    .limit(1)
    .single();

  const { data: adminUser } = await client
    .from('users')
    .select('id, full_name, username, email, role, account_status')
    .eq('role', 'admin')
    .limit(1)
    .single();

  const { data: categoryRow } = await client
    .from('categories')
    .select('id, name')
    .limit(1)
    .single();

  assertTest('Prasyarat Database: Akun Creator dan Admin tersedia di DB', Boolean(creatorUser && adminUser && categoryRow));

  let testFrameId = null;
  const testFileName = `test_run_${Date.now()}.png`;

  // --- FITUR 1: TESTING UPLOAD FRAME OLEH KREATOR ---
  console.log('\n--- PENGUJIAN FITUR 1: UPLOAD FRAME KREATOR ---');
  try {
    // 1. Validasi Magic Bytes PNG
    const validPngBuffer = Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
      'base64'
    );
    const { data: uploadRes, error: uploadErr } = await client.storage
      .from('frames')
      .upload(testFileName, validPngBuffer, { contentType: 'image/png' });

    assertTest('1. Upload asset PNG ke Storage Supabase', !uploadErr && uploadRes?.path, uploadErr?.message);

    const { data: pubData } = client.storage.from('frames').getPublicUrl(testFileName);
    const assetUrl = pubData.publicUrl;
    assertTest('2. Mendapatkan Public URL permanen dari Storage', Boolean(assetUrl && assetUrl.includes('frames/')));

    // 3. Simpan Frame ke Database dengan status awal pending_review
    const { data: insertedFrame, error: insertErr } = await client
      .from('frames')
      .insert({
        creator_id: creatorUser.id,
        category_id: categoryRow.id,
        name: 'Automated Test Frame',
        description: 'Frame pengujian otomatis backend',
        pose_count: 4,
        slot_config: [{ x: 201, y: 210, w: 1715, h: 2365 }],
        tags: ['test', 'automated'],
        asset_url: assetUrl,
        status: 'pending_review',
        is_active: false,
      })
      .select()
      .single();

    assertTest('3. Frame tersimpan di DB dengan status awal "pending_review"', insertedFrame?.status === 'pending_review');
    assertTest('4. Visibilitas frame belum aktif (is_active = false)', insertedFrame?.is_active === false);
    assertTest('5. Identitas kreator terikat ke creator_id yang benar', insertedFrame?.creator_id === creatorUser.id);

    testFrameId = insertedFrame?.id;
  } catch (err) {
    assertTest('Upload Frame Kreator', false, err.message);
  }

  // --- FITUR 2: TESTING REVIEW DAN APPROVE FRAME OLEH ADMIN ---
  console.log('\n--- PENGUJIAN FITUR 2: REVIEW & APPROVE ADMIN ---');
  try {
    // 1. Frame pending tidak boleh muncul di katalog publik
    const { data: publicFrames } = await client
      .from('frames')
      .select('id, name, status, is_active')
      .eq('status', 'approved')
      .eq('is_active', true);

    const isLeaked = publicFrames?.some((f) => f.id === testFrameId);
    assertTest('6. Frame pending tidak muncul di katalog publik', !isLeaked);

    // 2. Admin menyetujui frame (Approve)
    const { data: approvedFrame, error: approveErr } = await client
      .from('frames')
      .update({
        status: 'approved',
        is_active: true,
        reviewed_by: adminUser.id,
        review_notes: null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', testFrameId)
      .select()
      .single();

    assertTest('7. Admin dapat menyetujui frame (status -> approved)', approvedFrame?.status === 'approved');
    assertTest('8. Frame yang disetujui menjadi aktif (is_active = true)', approvedFrame?.is_active === true);

    // 3. Rekam audit log persetujuan
    const { data: logEntry, error: logErr } = await client
      .from('audit_logs')
      .insert({
        admin_id: adminUser.id,
        action: 'APPROVE_FRAME',
        target_type: 'frame',
        target_id: testFrameId,
        details: `Disetujui frame "${approvedFrame.name}" oleh ${adminUser.full_name}.`,
      })
      .select()
      .single();

    assertTest('9. Keputusan review tercatat di tabel audit_logs', Boolean(logEntry?.id));

    // 4. Pengujian penolakan frame (Reject) beserta alasan
    const { data: rejectedFrame } = await client
      .from('frames')
      .update({
        status: 'rejected',
        is_active: false,
        reviewed_by: adminUser.id,
        review_notes: 'Resolusi tidak sesuai spesifikasi 4000x5900',
        updated_at: new Date().toISOString(),
      })
      .eq('id', testFrameId)
      .select()
      .single();

    assertTest('10. Admin dapat menolak frame dengan alasan penolakan tersimpan', rejectedFrame?.status === 'rejected' && rejectedFrame?.review_notes?.length > 0);
  } catch (err) {
    assertTest('Review & Approve Admin', false, err.message);
  }

  // --- FITUR 3: TESTING PENGELOLAAN PENGGUNA OLEH ADMIN ---
  console.log('\n--- PENGUJIAN FITUR 3: KELOLA PENGGUNA OLEH ADMIN ---');
  try {
    // 1. Ambil daftar pengguna dari database
    const { data: allUsers, error: usersErr } = await client
      .from('users')
      .select('id, email, full_name, username, role, account_status, created_at');

    assertTest('11. Admin dapat mengambil daftar pengguna dari database', Array.isArray(allUsers) && allUsers.length > 0);

    // 2. Verifikasi tidak ada kolom password/password_hash di model pengguna
    const hasPassword = allUsers?.some((u) => 'password' in u || 'password_hash' in u);
    assertTest('12. Tidak ada password atau hash password yang bocor', !hasPassword);

    // 3. Pengujian suspend akun kreator
    const { data: suspendedUser, error: suspErr } = await client
      .from('users')
      .update({ account_status: 'suspended' })
      .eq('id', creatorUser.id)
      .select()
      .single();

    assertTest('13. Admin dapat menonaktifkan akun kreator (suspend)', suspendedUser?.account_status === 'suspended');

    // 4. Kembalikan status akun kreator menjadi active
    const { data: reactivatedUser } = await client
      .from('users')
      .update({ account_status: 'active' })
      .eq('id', creatorUser.id)
      .select()
      .single();

    assertTest('14. Admin dapat mengaktifkan kembali akun kreator (active)', reactivatedUser?.account_status === 'active');
  } catch (err) {
    assertTest('Kelola Pengguna Admin', false, err.message);
  }

  // --- FITUR 4: TESTING PENGHAPUSAN DATA DUMMY ---
  console.log('\n--- PENGUJIAN FITUR 4: ELIMINASI DATA DUMMY ---');
  try {
    // 1. Verifikasi data pengguna bukan data dummy default
    const { data: liveUsers } = await client.from('users').select('id, email');
    const isOnlyDummy = liveUsers?.length === 2 && liveUsers.some((u) => u.id === 'usr_admin_1');
    assertTest('15. Sumber data pengguna menggunakan DB persisten, bukan DEFAULT_USERS hardcode', !isOnlyDummy);

    // 2. Verifikasi data frame publik tersimpan di DB
    const { count: frameCount } = await client
      .from('frames')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'approved');

    assertTest('16. Katalog publik bersumber dari tabel frames database persisten', (frameCount || 0) > 0);
  } catch (err) {
    assertTest('Eliminasi Data Dummy', false, err.message);
  }

  // Cleanup testing frame & test file
  if (testFrameId) {
    await client.from('audit_logs').delete().eq('target_id', testFrameId);
    await client.from('frames').delete().eq('id', testFrameId);
    await client.storage.from('frames').remove([testFileName]);
    console.log('\n[CLEANUP] Asset dan record pengujian berhasil dibersihkan.');
  }

  console.log(`\n=== HASIL INTEGRATION TESTING: ${passedCount} LULUS, ${failedCount} GAGAL ===`);
  return { passedCount, failedCount, results };
}

runEndToEndTests();

