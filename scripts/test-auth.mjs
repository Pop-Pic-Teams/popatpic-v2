/**
 * Script Pengujian Backend Autentikasi Pop@Pic!
 * Cara menjalankan:
 * 1. Pastikan server dev berjalan: npm run dev
 * 2. Di terminal lain: node scripts/test-auth.mjs
 */

const BASE_URL = process.env.TEST_APP_URL || 'http://localhost:3000';

const timestamp = Date.now().toString().slice(-6);
const TEST_USER = {
  name: 'Tester Autentikasi',
  username: `testuser_${timestamp}`,
  email: `testuser_${timestamp}@popatpic.test`,
  password: 'Password123!',
};

let passedCount = 0;
let failedCount = 0;

function logResult(name, pass, detail) {
  if (pass) {
    passedCount++;
    console.log(`[PASS] ${name}`);
  } else {
    failedCount++;
    console.log(`[FAIL] ${name} -> ${detail}`);
  }
}

async function runTests() {
  console.log(`=== Memulai Pengujian Backend Autentikasi di ${BASE_URL} ===\n`);

  // 1. Validasi Input Register: Field kosong
  try {
    const res = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: '', username: '', email: '', password: '' }),
    });
    const data = await res.json();
    logResult('1. Register field kosong ditolak (400)', res.status === 400 && data.success === false, JSON.stringify(data));
  } catch (err) {
    logResult('1. Register field kosong ditolak (400)', false, err.message);
  }

  // 2. Validasi Input Register: Format email salah
  try {
    const res = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...TEST_USER, email: 'bukan-email' }),
    });
    const data = await res.json();
    logResult('2. Register format email salah ditolak (400)', res.status === 400 && data.success === false, JSON.stringify(data));
  } catch (err) {
    logResult('2. Register format email salah ditolak (400)', false, err.message);
  }

  // 3. Validasi Input Register: Password kurang dari 6 karakter
  try {
    const res = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...TEST_USER, password: '123' }),
    });
    const data = await res.json();
    logResult('3. Register password pendek ditolak (400)', res.status === 400 && data.success === false, JSON.stringify(data));
  } catch (err) {
    logResult('3. Register password pendek ditolak (400)', false, err.message);
  }

  // 4. Registrasi Data Valid
  let authCookie = '';
  try {
    const res = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(TEST_USER),
    });
    const data = await res.json();
    const setCookie = res.headers.get('set-cookie');
    if (setCookie) authCookie = setCookie;

    const ok = res.status === 201 && data.success === true;
    logResult('4. Register data valid berhasil (201)', ok, JSON.stringify(data));
  } catch (err) {
    logResult('4. Register data valid berhasil (201)', false, err.message);
  }

  // 5. Registrasi Duplikat Email
  try {
    const res = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...TEST_USER,
        username: `diff_${timestamp}`,
      }),
    });
    const data = await res.json();
    logResult('5. Register email duplikat ditolak (409)', res.status === 409 && data.success === false, JSON.stringify(data));
  } catch (err) {
    logResult('5. Register email duplikat ditolak (409)', false, err.message);
  }

  // 6. Registrasi Duplikat Username
  try {
    const res = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...TEST_USER,
        email: `diff_${timestamp}@popatpic.test`,
      }),
    });
    const data = await res.json();
    logResult('6. Register username duplikat ditolak (409)', res.status === 409 && data.success === false, JSON.stringify(data));
  } catch (err) {
    logResult('6. Register username duplikat ditolak (409)', false, err.message);
  }

  // 7. Login dengan Email & Password Benar
  try {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: TEST_USER.email, password: TEST_USER.password }),
    });
    const data = await res.json();
    const setCookie = res.headers.get('set-cookie');
    if (setCookie) authCookie = setCookie;

    const ok = res.status === 200 && data.success === true && data.role === 'Creator';
    logResult('7. Login dengan email benar berhasil (200)', ok, JSON.stringify(data));
  } catch (err) {
    logResult('7. Login dengan email benar berhasil (200)', false, err.message);
  }

  // 8. Login dengan Username & Password Benar
  try {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: TEST_USER.username, password: TEST_USER.password }),
    });
    const data = await res.json();
    const ok = res.status === 200 && data.success === true && data.role === 'Creator';
    logResult('8. Login dengan username benar berhasil (200)', ok, JSON.stringify(data));
  } catch (err) {
    logResult('8. Login dengan username benar berhasil (200)', false, err.message);
  }

  // 9. Login dengan Password Salah
  try {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: TEST_USER.email, password: 'WrongPassword999' }),
    });
    const data = await res.json();
    logResult('9. Login password salah ditolak (401)', res.status === 401 && data.success === false, JSON.stringify(data));
  } catch (err) {
    logResult('9. Login password salah ditolak (401)', false, err.message);
  }

  // 10. Login dengan Akun Tidak Terdaftar
  try {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: 'nonexistent_user_999@test.com', password: 'Password123!' }),
    });
    const data = await res.json();
    logResult('10. Login akun tidak terdaftar ditolak (401)', res.status === 401 && data.success === false, JSON.stringify(data));
  } catch (err) {
    logResult('10. Login akun tidak terdaftar ditolak (401)', false, err.message);
  }

  // 11. Sesi Login Aktif (GET /api/auth/me dengan Cookie)
  try {
    const headers = {};
    if (authCookie) headers.cookie = authCookie;
    const res = await fetch(`${BASE_URL}/api/auth/me`, { headers });
    const data = await res.json();
    logResult('11. Cek sesi aktif (/api/auth/me)', res.status === 200, JSON.stringify(data));
  } catch (err) {
    logResult('11. Cek sesi aktif (/api/auth/me)', false, err.message);
  }

  // 12. Logout (POST /api/auth/logout)
  try {
    const headers = {};
    if (authCookie) headers.cookie = authCookie;
    const res = await fetch(`${BASE_URL}/api/auth/logout`, { method: 'POST', headers });
    const data = await res.json();
    logResult('12. Logout berhasil (200)', res.status === 200 && data.success === true, JSON.stringify(data));
  } catch (err) {
    logResult('12. Logout berhasil (200)', false, err.message);
  }

  console.log(`\n=== Hasil Pengujian: ${passedCount} PASS, ${failedCount} FAIL ===`);
}

runTests();
