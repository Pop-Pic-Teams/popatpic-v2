/**
 * Validasi input autentikasi di sisi server.
 * Tidak bergantung pada library tambahan; semua input diperlakukan sebagai `unknown`.
 */

export const PASSWORD_MIN_LENGTH = 6; // sesuai placeholder form Sign Up ("Minimum 6 characters")
export const PASSWORD_MAX_LENGTH = 72; // batas bcrypt yang dipakai Supabase Auth

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const USERNAME_REGEX = /^[a-z0-9_.]{3,30}$/;

export type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

export interface RegisterInput {
  name: string;
  username: string;
  email: string;
  password: string;
}

export type LoginInput =
  | { kind: 'email'; email: string; password: string }
  | { kind: 'username'; username: string; password: string };

const isPlainObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v);

export function normalizeEmail(raw: string): string {
  return raw.trim().toLowerCase();
}

export function normalizeUsername(raw: string): string {
  return raw.trim().toLowerCase();
}

export function isValidEmail(email: string): boolean {
  return email.length <= 254 && EMAIL_REGEX.test(email);
}

export function isValidUsername(username: string): boolean {
  return USERNAME_REGEX.test(username);
}

function validatePassword(password: unknown): string | null {
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

export function validateRegisterInput(body: unknown): ValidationResult<RegisterInput> {
  if (!isPlainObject(body)) {
    return { ok: false, error: 'Format data tidak valid.' };
  }

  const { name, username, email, password } = body;

  if (typeof name !== 'string' || name.trim().length === 0) {
    return { ok: false, error: 'Nama wajib diisi.' };
  }
  const cleanName = name.trim();
  if (cleanName.length > 100) {
    return { ok: false, error: 'Nama maksimal 100 karakter.' };
  }

  if (typeof username !== 'string' || username.trim().length === 0) {
    return { ok: false, error: 'Username wajib diisi.' };
  }
  const cleanUsername = normalizeUsername(username);
  if (!isValidUsername(cleanUsername)) {
    return {
      ok: false,
      error: 'Username harus 3-30 karakter dan hanya berisi huruf, angka, titik, atau underscore.',
    };
  }

  if (typeof email !== 'string' || email.trim().length === 0) {
    return { ok: false, error: 'Email wajib diisi.' };
  }
  const cleanEmail = normalizeEmail(email);
  if (!isValidEmail(cleanEmail)) {
    return { ok: false, error: 'Format email tidak valid.' };
  }

  const passwordError = validatePassword(password);
  if (passwordError) {
    return { ok: false, error: passwordError };
  }

  return {
    ok: true,
    data: {
      name: cleanName,
      username: cleanUsername,
      email: cleanEmail,
      password: password as string, // password TIDAK di-trim
    },
  };
}

export function validateLoginInput(body: unknown): ValidationResult<LoginInput> {
  if (!isPlainObject(body)) {
    return { ok: false, error: 'Format data tidak valid.' };
  }

  const { identifier, password } = body;

  if (typeof identifier !== 'string' || identifier.trim().length === 0) {
    return { ok: false, error: 'Username atau email wajib diisi.' };
  }
  if (typeof password !== 'string' || password.length === 0) {
    return { ok: false, error: 'Kata sandi wajib diisi.' };
  }
  if (new TextEncoder().encode(password).length > PASSWORD_MAX_LENGTH) {
    return { ok: false, error: 'Username/email atau kata sandi salah.' };
  }

  const cleanId = identifier.trim().toLowerCase();

  if (cleanId.includes('@')) {
    if (!isValidEmail(cleanId)) {
      return { ok: false, error: 'Format email tidak valid.' };
    }
    return { ok: true, data: { kind: 'email', email: cleanId, password } };
  }

  if (!isValidUsername(cleanId)) {
    return { ok: false, error: 'Format username tidak valid.' };
  }
  return { ok: true, data: { kind: 'username', username: cleanId, password } };
}
