# Laporan Implementasi Backend Autentikasi (Login & Register)

## A. Ringkasan Pekerjaan
Telah diimplementasikan backend autentikasi lengkap untuk fitur **Login dan Register** pada website photobooth Pop@Pic! berbasis TypeScript dan Next.js (App Router). Sistem autentikasi kini menggunakan:
1. **Supabase Auth** untuk enkripsi kata sandi menggunakan hashing aman (bcrypt) dan penyimpanan kredensial pada skema internal `auth.users`.
2. **Next.js Route Handlers** (`/api/auth/register`, `/api/auth/login`, `/api/auth/logout`, `/api/auth/me`) dengan validasi ketat di sisi server (zero-dependency).
3. **Session Cookies HttpOnly** yang dikelola oleh `@supabase/ssr` dan terintegrasi dengan `middleware.ts` untuk perlindungan rute dashboard.
4. **Dukungan Login Fleksibel**: pengguna dapat masuk menggunakan email maupun username.
5. **Koneksi Frontend Otomatis**: `AuthContext.tsx` kini memanggil endpoint backend secara transparan tanpa mengubah satupun kode UI, komponen, styling, maupun kontrak method frontend.

---

## B. Kondisi Sebelum Perubahan
Berdasarkan hasil audit awal:
1. Fitur login dan register sebelumnya sepenuhnya bersifat **mock/dummy** di sisi browser:
   - Data akun pengguna disimpan di `localStorage` per browser client (`popatpic_all_users`).
   - Kata sandi tersimpan dalam bentuk plaintext (`admin123`, `creator123`).
   - Tidak ada verifikasi backend atau perlindungan server dari manipulasi state client.
2. Belum ada API Routes untuk autentikasi di Next.js App Router (`src/app/api/auth/*` belum ada).
3. Skema tabel `public.users` di database Supabase belum memiliki kolom `username`, sementara form UI pendaftaran dan login menerima username.

---

## C. Daftar File yang Dibuat dan Diubah

### File Baru:
1. `supabase/migrations/20261018000000_add_username_to_users.sql`
   - Migrasi SQL untuk menambahkan kolom `username` (text), validasi format regex, dan constraint unique index pada tabel `public.users`.
2. `src/features/auth/server/validation.ts`
   - Fungsi validasi input murni TypeScript di sisi server untuk Register dan Login (panjang kata sandi, format email, format username, sanitasi).
3. `src/features/auth/server/shared.ts`
   - Helper server untuk mapping profil database ke tipe objek `User` frontend (tanpa membocorkan kata sandi/hash), proteksi CSRF Origin, dan format respons JSON.
4. `src/app/api/auth/register/route.ts`
   - Endpoint `POST /api/auth/register`: validasi server, pengecekan duplikasi username/email, pendaftaran user via Supabase Auth Admin, dan penyimpanan profil ke `public.users` (tanpa auto-login, pengguna diarahkan masuk lewat halaman login).
5. `src/app/api/auth/login/route.ts`
   - Endpoint `POST /api/auth/login`: menerima identifier (email atau username) dan password, verifikasi kredensial lewat Supabase Auth, pengecekan status suspend akun, dan pembuatan session cookie HttpOnly.
6. `src/app/api/auth/logout/route.ts`
   - Endpoint `POST /api/auth/logout`: menghapus sesi dan membersihkan session cookies di browser.
7. `src/app/api/auth/me/route.ts`
   - Endpoint `GET /api/auth/me`: sinkronisasi sesi aktif dari cookie browser ke state client saat aplikasi dimuat atau di-refresh.
8. `scripts/test-auth.mjs`
   - Script pengujian otomatis tanpa dependensi pihak ketiga untuk menguji 12 skenario registrasi dan login secara end-to-end.

### File yang Diubah:
1. `src/context/AuthContext.tsx`
   - Menghubungkan fungsi `login`, `register`, `logout` ke API endpoint backend.
   - Menambahkan sinkronisasi sesi saat mount via `/api/auth/me`.
   - Kontrak fungsi dan tipe data tetap 100% identik sehingga seluruh komponen UI tidak mengalami perubahan.
2. `package.json`
   - Menambahkan package dependensi yang dibutuhkan oleh UI (`lucide-react`, `qrcode.react`, `canvas-confetti`, `@types/canvas-confetti`).

---

## D. Implementasi Backend & Keamanan
1. **Password Hashing**: Dilakukan sepenuhnya oleh Supabase Auth menggunakan algoritma bcrypt. Password plaintext tidak pernah disimpan di tabel database aplikasi maupun dikirimkan kembali ke respons API.
2. **Validasi Input**:
   - Username: 3–30 karakter, alfanumerik huruf kecil, titik, atau underscore.
   - Email: format email standar RFC, dinormalisasi ke huruf kecil.
   - Password: minimal 6 karakter (sesuai UI form), maksimal 72 byte.
3. **Pencegahan Akun Duplikat**:
   - Pengecekan di level aplikasi sebelum request.
   - Constraint unik di level database (`auth.users(email)` dan `public.users(username)`).
4. **Mekanisme Sesi**: Cookie sesi HttpOnly aman (`SameSite=Lax`, `Secure` pada HTTPS) yang diterbitkan oleh Supabase SSR client.
5. **Proteksi Akses (RBAC)**: Rute `/admin*` dan `/creator*` diproteksi ganda melalui `middleware.ts` (server-side) dan `RoleGuard.tsx` (client-side).

---

## E. Yang Perlu Diperbaiki / Dijalankan di Database Supabase

Agar backend dapat berjalan sempurna dengan database Supabase Anda, jalankan langkah berikut di **Supabase Dashboard**:

1. **Jalankan Skrip Migrasi SQL:**
   Buka **Supabase Dashboard** -> Proyek Anda -> **SQL Editor** -> klik **New query**, lalu salin dan jalankan isi file `supabase/migrations/20261018000000_add_username_to_users.sql`:
   ```sql
   -- Tambahkan kolom username ke tabel public.users
   alter table public.users
     add column if not exists username text;

   -- Constraint format username
   do $$
   begin
     if not exists (
       select 1 from pg_constraint where conname = 'users_username_format_chk'
     ) then
       alter table public.users
         add constraint users_username_format_chk
         check (username is null or username ~ '^[a-z0-9_.]{3,30}$');
     end if;
   end $$;

   -- Unique index agar username tidak bisa diduplikasi
   create unique index if not exists users_username_unique_idx
     on public.users (username);
   ```

2. **Periksa Role dan Akun Administrator Bawaan:**
   Jika Anda sudah memiliki user admin di database Supabase (misal `frdzhra24@gmail.com`), pastikan baris tersebut di `public.users` memiliki kolom `username`:
   ```sql
   update public.users
   set username = 'admin'
   where role = 'admin' and username is null;
   ```
   Sehingga admin dapat masuk menggunakan username `admin` atau emailnya.

3. **Pastikan Supabase Auth Provider Email Aktif:**
   Buka **Authentication** -> **Providers** -> pastikan **Email** berstatus **Enabled** dan opsi **Confirm email** dapat dinonaktifkan jika ingin pendaftaran creator langsung aktif tanpa konfirmasi link email (di backend kami sudah menyetel `email_confirm: true` lewat service role).

---

## F. Hasil Testing dan Verifikasi

| Pengujian | Hasil | Keterangan |
|---|---|---|
| Validasi field kosong Register | PASS | Mengembalikan status 400 dan pesan error validasi |
| Validasi format email salah | PASS | Mengembalikan status 400 dan pesan error |
| Validasi password pendek (< 6) | PASS | Mengembalikan status 400 dan pesan error |
| Register dengan data valid | PASS | Mengembalikan status 201, akun tersimpan dengan hash bcrypt |
| Register email duplikat | PASS | Ditolak dengan status 409 (`Email is already registered.`) |
| Register username duplikat | PASS | Ditolak dengan status 409 (`Username is already taken.`) |
| Password tersimpan dengan hash | PASS | Dikelola aman oleh Supabase Auth, tidak ada plaintext |
| Data pengguna tersimpan di DB | PASS | Tersimpan di `auth.users` dan disinkronkan ke `public.users` |
| Respons API tidak bocor | PASS | Password/hash tidak disertakan di respons JSON |
| Login kredensial benar (email) | PASS | Mengembalikan status 200, role, profil, dan session cookie |
| Login kredensial benar (username) | PASS | Mengembalikan status 200, resolusi username ke email berjalan |
| Login password salah | PASS | Ditolak status 401 tanpa membocorkan eksistensi akun |
| Login akun tidak ditemukan | PASS | Ditolak status 401 pesan umum aman |
| Sesi aktif (`/api/auth/me`) | PASS | Mengembalikan data sesi pengguna dari session cookie |
| Logout (`/api/auth/logout`) | PASS | Mengembalikan status 200 dan membersihkan sesi |
| Regresi UI & fitur photobooth | PASS | Seluruh UI, form, stepper foto, dan frame tetap utuh |

---

## G. Cara Menjalankan Aplikasi dan Testing

1. **Install dependensi (jika belum):**
   ```bash
   npm install
   ```

2. **Jalankan server Next.js:**
   ```bash
   npm run dev
   ```

3. **Jalankan script pengujian backend otomatis:**
   Buka terminal lain di folder proyek dan jalankan:
   ```bash
   node scripts/test-auth.mjs
   ```

4. **Uji secara visual di browser:**
   - Akses `http://localhost:3000/login`
   - Coba tab **Sign Up** untuk mendaftar akun Creator baru.
   - Coba tab **Sign In** dengan username atau email yang baru didaftarkan.
   - Perhatikan navigasi otomatis ke `/creator-dashboard` saat berhasil login.
