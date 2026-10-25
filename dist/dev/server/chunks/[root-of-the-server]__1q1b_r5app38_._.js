module.exports = [
(()=>{"use strict";return[
"[project]/src/app/api/auth/login/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$server$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/server/validation.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$server$2f$shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/auth/server/shared.ts [app-route] (ecmascript)");
;
;
;
;
;
async function POST(request) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$server$2f$shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCrossOrigin"])(request)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$server$2f$shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])(403, 'Permintaan ditolak.');
    }
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$server$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateLoginInput"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$server$2f$shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readJson"])(request));
    if (!parsed.ok) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$server$2f$shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])(400, parsed.error);
    }
    let admin;
    try {
        admin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])();
    } catch (err) {
        console.error('[auth/login] Supabase admin client init failed:', err.message);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$server$2f$shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])(500, 'Layanan autentikasi sedang tidak tersedia.');
    }
    let emailToAuth;
    const genericAuthError = 'Username/email atau kata sandi salah.';
    if (parsed.data.kind === 'username') {
        // Cari email berdasarkan username dari public.users
        const { data: userRow, error: lookupErr } = await admin.from('users').select('email, account_status').eq('username', parsed.data.username).maybeSingle();
        if (lookupErr) {
            console.error('[auth/login] username lookup failed:', lookupErr.code, lookupErr.message);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$server$2f$shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])(500, 'Terjadi kesalahan pada server. Silakan coba lagi.');
        }
        if (!userRow) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$server$2f$shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])(401, genericAuthError);
        }
        emailToAuth = userRow.email;
    } else {
        emailToAuth = parsed.data.email;
    }
    // Verifikasi kredensial lewat Supabase Auth (membuat cookie sesi via createClient)
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: authData, error: signInErr } = await supabase.auth.signInWithPassword({
        email: emailToAuth,
        password: parsed.data.password
    });
    if (signInErr || !authData?.user) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$server$2f$shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])(401, genericAuthError);
    }
    const userId = authData.user.id;
    // Ambil profil lengkap dari public.users
    const { data: profile, error: profileErr } = await admin.from('users').select(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$server$2f$shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PROFILE_COLUMNS"]).eq('id', userId).single();
    if (profileErr || !profile) {
        console.error('[auth/login] profile fetch failed:', profileErr?.code, profileErr?.message);
        await supabase.auth.signOut();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$server$2f$shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])(500, 'Gagal memuat profil akun. Silakan coba lagi.');
    }
    // Cek apakah akun suspended
    if (profile.account_status === 'suspended') {
        await supabase.auth.signOut();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$server$2f$shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])(403, 'Your Creator account has been suspended by an Administrator due to a policy violation.');
    }
    const role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$server$2f$shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapRole"])(profile.role);
    if (!role) {
        console.error('[auth/login] unknown role for user:', profile.role);
        await supabase.auth.signOut();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$server$2f$shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])(403, 'Role akun Anda tidak memiliki akses.');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        role,
        user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$server$2f$shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toPublicUser"])(profile, role)
    });
}
}),
"[project]/src/features/auth/server/shared.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROFILE_COLUMNS",
    ()=>PROFILE_COLUMNS,
    "isCrossOrigin",
    ()=>isCrossOrigin,
    "jsonError",
    ()=>jsonError,
    "mapRole",
    ()=>mapRole,
    "readJson",
    ()=>readJson,
    "toPublicUser",
    ()=>toPublicUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const PROFILE_COLUMNS = 'id, email, full_name, username, role, account_status, created_at';
function mapRole(dbRole) {
    switch((dbRole || '').toLowerCase()){
        case 'admin':
            return 'Admin';
        case 'creator':
            return 'Creator';
        default:
            return null;
    }
}
function toPublicUser(row, role) {
    return {
        id: row.id,
        username: row.username ?? undefined,
        email: row.email,
        name: row.full_name || row.username || row.email.split('@')[0],
        role,
        creatorStatus: role === 'Creator' ? row.account_status === 'active' ? 'active' : 'suspended' : undefined,
        createdAt: row.created_at
    };
}
function jsonError(status, error) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: false,
        error
    }, {
        status
    });
}
function isCrossOrigin(request) {
    const origin = request.headers.get('origin');
    if (!origin) return false;
    try {
        const originHost = new URL(origin).host;
        const requestHost = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
        return !requestHost || originHost !== requestHost;
    } catch  {
        return true;
    }
}
async function readJson(request) {
    try {
        return await request.json();
    } catch  {
        return undefined;
    }
}
}),
"[project]/src/features/auth/server/validation.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Validasi input autentikasi di sisi server.
 * Tidak bergantung pada library tambahan; semua input diperlakukan sebagai `unknown`.
 */ __turbopack_context__.s([
    "PASSWORD_MAX_LENGTH",
    ()=>PASSWORD_MAX_LENGTH,
    "PASSWORD_MIN_LENGTH",
    ()=>PASSWORD_MIN_LENGTH,
    "isValidEmail",
    ()=>isValidEmail,
    "isValidUsername",
    ()=>isValidUsername,
    "normalizeEmail",
    ()=>normalizeEmail,
    "normalizeUsername",
    ()=>normalizeUsername,
    "validateLoginInput",
    ()=>validateLoginInput,
    "validateRegisterInput",
    ()=>validateRegisterInput
]);
const PASSWORD_MIN_LENGTH = 6; // sesuai placeholder form Sign Up ("Minimum 6 characters")
const PASSWORD_MAX_LENGTH = 72; // batas bcrypt yang dipakai Supabase Auth
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const USERNAME_REGEX = /^[a-z0-9_.]{3,30}$/;
const isPlainObject = (v)=>typeof v === 'object' && v !== null && !Array.isArray(v);
function normalizeEmail(raw) {
    return raw.trim().toLowerCase();
}
function normalizeUsername(raw) {
    return raw.trim().toLowerCase();
}
function isValidEmail(email) {
    return email.length <= 254 && EMAIL_REGEX.test(email);
}
function isValidUsername(username) {
    return USERNAME_REGEX.test(username);
}
function validatePassword(password) {
    if (typeof password !== 'string' || password.length === 0) {
        return 'Kata sandi wajib diisi.';
    }
    if (password.trim().length === 0) {
        return 'Kata sandi tidak boleh hanya berisi spasi.';
    }
    if (password.length < PASSWORD_MIN_LENGTH) {
        return `Kata sandi minimal ${PASSWORD_MIN_LENGTH} karakter.`;
    }
    if (new TextEncoder().encode(password).length > PASSWORD_MAX_LENGTH) {
        return `Kata sandi maksimal ${PASSWORD_MAX_LENGTH} byte.`;
    }
    return null;
}
function validateRegisterInput(body) {
    if (!isPlainObject(body)) {
        return {
            ok: false,
            error: 'Format data tidak valid.'
        };
    }
    const { name, username, email, password } = body;
    if (typeof name !== 'string' || name.trim().length === 0) {
        return {
            ok: false,
            error: 'Nama wajib diisi.'
        };
    }
    const cleanName = name.trim();
    if (cleanName.length > 100) {
        return {
            ok: false,
            error: 'Nama maksimal 100 karakter.'
        };
    }
    if (typeof username !== 'string' || username.trim().length === 0) {
        return {
            ok: false,
            error: 'Username wajib diisi.'
        };
    }
    const cleanUsername = normalizeUsername(username);
    if (!isValidUsername(cleanUsername)) {
        return {
            ok: false,
            error: 'Username harus 3-30 karakter dan hanya berisi huruf, angka, titik, atau underscore.'
        };
    }
    if (typeof email !== 'string' || email.trim().length === 0) {
        return {
            ok: false,
            error: 'Email wajib diisi.'
        };
    }
    const cleanEmail = normalizeEmail(email);
    if (!isValidEmail(cleanEmail)) {
        return {
            ok: false,
            error: 'Format email tidak valid.'
        };
    }
    const passwordError = validatePassword(password);
    if (passwordError) {
        return {
            ok: false,
            error: passwordError
        };
    }
    return {
        ok: true,
        data: {
            name: cleanName,
            username: cleanUsername,
            email: cleanEmail,
            password: password
        }
    };
}
function validateLoginInput(body) {
    if (!isPlainObject(body)) {
        return {
            ok: false,
            error: 'Format data tidak valid.'
        };
    }
    const { identifier, password } = body;
    if (typeof identifier !== 'string' || identifier.trim().length === 0) {
        return {
            ok: false,
            error: 'Username atau email wajib diisi.'
        };
    }
    if (typeof password !== 'string' || password.length === 0) {
        return {
            ok: false,
            error: 'Kata sandi wajib diisi.'
        };
    }
    if (new TextEncoder().encode(password).length > PASSWORD_MAX_LENGTH) {
        return {
            ok: false,
            error: 'Username/email atau kata sandi salah.'
        };
    }
    const cleanId = identifier.trim().toLowerCase();
    if (cleanId.includes('@')) {
        if (!isValidEmail(cleanId)) {
            return {
                ok: false,
                error: 'Format email tidak valid.'
            };
        }
        return {
            ok: true,
            data: {
                kind: 'email',
                email: cleanId,
                password
            }
        };
    }
    if (!isValidUsername(cleanId)) {
        return {
            ok: false,
            error: 'Format username tidak valid.'
        };
    }
    return {
        ok: true,
        data: {
            kind: 'username',
            username: cleanId,
            password
        }
    };
}
}),
"[project]/src/utils/supabase/admin.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAdminClient",
    ()=>createAdminClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
function createAdminClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
}
}),
"[project]/src/utils/supabase/server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // Error ini diabaikan jika fungsi dipanggil dari Server Component.
                // Pembaruan sesi cookies akan ditangani oleh Middleware di bawah.
                }
            }
        }
    });
}
}),
]})(),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1q1b_r5app38_._.js.map