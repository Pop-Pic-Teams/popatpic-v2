import { NextResponse } from 'next/server';
import type { User } from '../../../types/photobooth';

/** Kolom public.users yang dibaca backend auth. Tidak ada kolom password di tabel ini. */
export const PROFILE_COLUMNS = 'id, email, full_name, username, role, account_status, created_at';

export interface UserProfileRow {
  id: string;
  email: string;
  full_name: string | null;
  username: string | null;
  role: string;
  account_status: string;
  created_at: string;
}

/** Role di database (huruf kecil) -> role yang dipakai frontend. */
export function mapRole(dbRole: string): 'Admin' | 'Creator' | null {
  switch ((dbRole || '').toLowerCase()) {
    case 'admin':
      return 'Admin';
    case 'creator':
      return 'Creator';
    default:
      return null;
  }
}

/**
 * Bentuk data user yang dikirim ke frontend (sesuai tipe `User` di types/photobooth).
 * Sengaja TIDAK menyertakan password/hash/token.
 */
export function toPublicUser(row: UserProfileRow, role: 'Admin' | 'Creator'): User {
  return {
    id: row.id,
    username: row.username ?? undefined,
    email: row.email,
    name: row.full_name || row.username || row.email.split('@')[0],
    role,
    creatorStatus:
      role === 'Creator' ? (row.account_status === 'active' ? 'active' : 'suspended') : undefined,
    createdAt: row.created_at,
  };
}

export type AuthErrorBody = { success: false; error: string };

export function jsonError(status: number, error: string) {
  return NextResponse.json<AuthErrorBody>({ success: false, error }, { status });
}

/**
 * Proteksi CSRF sederhana untuk endpoint auth berbasis cookie:
 * jika browser mengirim header Origin, host-nya harus sama dengan host request.
 * (Cookie juga diset SameSite=Lax.)
 */
export function isCrossOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return false;
  try {
    const originHost = new URL(origin).host;
    const requestHost = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
    return !requestHost || originHost !== requestHost;
  } catch {
    return true;
  }
}

/** Parse body JSON dengan aman. Mengembalikan `undefined` jika body bukan JSON valid. */
export async function readJson(request: Request): Promise<unknown> {
  try {
    return await request.json();
  } catch {
    return undefined;
  }
}
