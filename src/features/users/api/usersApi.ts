import type { User, CreatorAccountStatus } from '../../../types/photobooth';

export async function fetchAdminUsers(): Promise<User[]> {
  try {
    const res = await fetch('/api/admin/users', { method: 'GET', cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return data.success && Array.isArray(data.users) ? data.users : [];
  } catch (err) {
    console.error('[usersApi] fetchAdminUsers error:', err);
    return [];
  }
}

export async function updateAdminUserStatus(
  userId: string,
  status: CreatorAccountStatus
): Promise<{ success: boolean; user?: User; error?: string }> {
  try {
    const res = await fetch(`/api/admin/users/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      return { success: false, error: data.error || 'Gagal mengubah status pengguna.' };
    }
    return { success: true, user: data.user };
  } catch (err: any) {
    console.error('[usersApi] updateAdminUserStatus error:', err);
    return { success: false, error: err?.message || 'Terjadi kesalahan saat mengubah status.' };
  }
}

export async function deleteAdminUser(
  userId: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch(`/api/admin/users/${userId}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      return { success: false, error: data.error || 'Gagal menghapus akun pengguna.' };
    }
    return { success: true };
  } catch (err: any) {
    console.error('[usersApi] deleteAdminUser error:', err);
    return { success: false, error: err?.message || 'Terjadi kesalahan saat menghapus akun.' };
  }
}

