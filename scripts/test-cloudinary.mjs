/**
 * Uji endpoint lokal /api/photos/upload (dan koneksi Cloudinary).
 * Pastikan `npm run dev` sedang berjalan, lalu jalankan: node scripts/test-cloudinary.mjs
 */
import dns from 'dns';

dns.setDefaultResultOrder('ipv4first');

const validJpeg = Buffer.from(
  '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAABAAEBAREA/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAD8AVN//2Q==',
  'base64'
);

const f = new FormData();
f.append('file', new Blob([validJpeg], { type: 'image/jpeg' }), 'popatpic.jpg');

const res = await fetch('http://localhost:3000/api/photos/upload', { method: 'POST', body: f });
const data = await res.json().catch(() => null);
if (!res.ok || !data?.downloadUrl) {
  console.error('[FAIL] /api/photos/upload:', res.status, data);
  process.exit(1);
}
console.log('[PASS] Upload via /api/photos/upload berhasil:', data.downloadUrl);
