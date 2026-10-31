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
    return 'Password is required.';
  }
  if (password.trim().length === 0) {
    return 'Password cannot consist of spaces only.';
  }
  if (password.length < PASSWORD_MIN_LENGTH) {
    return `Password must be at least ${PASSWORD_MIN_LENGTH} characters.`;
  }
  if (new TextEncoder().encode(password).length > PASSWORD_MAX_LENGTH) {
    return `Password cannot exceed ${PASSWORD_MAX_LENGTH} bytes.`;
  }
  return null;
}

export function validateRegisterInput(body: unknown): ValidationResult<RegisterInput> {
  if (!isPlainObject(body)) {
    return { ok: false, error: 'Invalid data format.' };
  }

  const { name, username, email, password } = body;

  if (typeof name !== 'string' || name.trim().length === 0) {
    return { ok: false, error: 'Name is required.' };
  }
  const cleanName = name.trim();
  if (cleanName.length > 100) {
    return { ok: false, error: 'Name cannot exceed 100 characters.' };
  }

  if (typeof username !== 'string' || username.trim().length === 0) {
    return { ok: false, error: 'Username is required.' };
  }
  const cleanUsername = normalizeUsername(username);
  if (!isValidUsername(cleanUsername)) {
    return {
      ok: false,
      error: 'Username must be 3-30 characters and contain only letters, numbers, periods, or underscores.',
    };
  }

  if (typeof email !== 'string' || email.trim().length === 0) {
    return { ok: false, error: 'Email is required.' };
  }
  const cleanEmail = normalizeEmail(email);
  if (!isValidEmail(cleanEmail)) {
    return { ok: false, error: 'Invalid email format.' };
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
    return { ok: false, error: 'Invalid data format.' };
  }

  const { identifier, password } = body;

  if (typeof identifier !== 'string' || identifier.trim().length === 0) {
    return { ok: false, error: 'Username or email is required.' };
  }
  if (typeof password !== 'string' || password.length === 0) {
    return { ok: false, error: 'Password is required.' };
  }
  if (new TextEncoder().encode(password).length > PASSWORD_MAX_LENGTH) {
    return { ok: false, error: 'Incorrect username/email or password.' };
  }

  const cleanId = identifier.trim().toLowerCase();

  if (cleanId.includes('@')) {
    if (!isValidEmail(cleanId)) {
      return { ok: false, error: 'Invalid email format.' };
    }
    return { ok: true, data: { kind: 'email', email: cleanId, password } };
  }

  if (!isValidUsername(cleanId)) {
    return { ok: false, error: 'Invalid username format.' };
  }
  return { ok: true, data: { kind: 'username', username: cleanId, password } };
}
