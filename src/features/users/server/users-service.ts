import { createAdminClient } from '../../../utils/supabase/admin';
import type { User, UserRole, CreatorAccountStatus } from '../../../types/photobooth';
import { mapRole, toPublicUser, type UserProfileRow } from '../../auth/server/shared';

/**
 * Mengambil seluruh daftar pengguna dari database untuk Admin Console
 * Sengaja TIDAK pernah mengekspos kata sandi atau hash kata sandi.
 */
export async function getAllUsersAdmin(): Promise<User[]> {
  const admin = createAdminClient();
  const { data, error } = await admin
    .from('users')
    .select('id, email, full_name, username, role, account_status, created_at')
    .order('created_at', { ascending: false });

  if (error || !data) {
    console.error('[getAllUsersAdmin] DB error:', error);
    return [];
  }

  return data
    .map((row: any) => {
      const role = mapRole(row.role);
      if (!role) return null;
      return toPublicUser(row as UserProfileRow, role);
    })
    .filter((u): u is User => u !== null);
}

/**
 * Mengubah status akun pengguna (active / suspended) oleh Admin
 */
export async function updateUserStatusAdmin(params: {
  targetUserId: string;
  newStatus: CreatorAccountStatus;
  adminId: string;
  adminName: string;
}): Promise<User> {
  const admin = createAdminClient();

  // 1. Ambil data target user
  const { data: targetUser, error: findErr } = await admin
    .from('users')
    .select('id, email, full_name, username, role, account_status, created_at')
    .eq('id', params.targetUserId)
    .single<UserProfileRow>();

  if (findErr || !targetUser) {
    throw new Error('User not found.');
  }

  // 2. Proteksi: Admin tidak boleh men-suspend dirinya sendiri
  if (params.targetUserId === params.adminId && params.newStatus === 'suspended') {
    throw new Error('You cannot disable your own Admin account.');
  }

  // 3. Proteksi: Jangan men-suspend admin terakhir jika hanya ada 1 admin
  if (targetUser.role.toLowerCase() === 'admin' && params.newStatus === 'suspended') {
    const { count } = await admin
      .from('users')
      .select('*', { count: 'exact', head: true })
      .eq('role', 'admin')
      .eq('account_status', 'active');

    if ((count || 0) <= 1) {
      throw new Error('Cannot disable the last active Admin account.');
    }
  }

  // 4. Update status di public.users
  const { data: updated, error: updateErr } = await admin
    .from('users')
    .update({
      account_status: params.newStatus,
      updated_at: new Date().toISOString(),
    })
    .eq('id', params.targetUserId)
    .select('id, email, full_name, username, role, account_status, created_at')
    .single<UserProfileRow>();

  if (updateErr || !updated) {
    throw new Error(`Failed to update user status: ${updateErr?.message || 'Database error'}`);
  }

  // 5. Rekam ke audit_logs
  const action = params.newStatus === 'suspended' ? 'SUSPEND_CREATOR' : 'ACTIVATE_CREATOR';
  const targetLabel = updated.full_name || updated.username || updated.email;
  await admin.from('audit_logs').insert({
    admin_id: params.adminId,
    action,
    target_type: 'creator',
    target_id: params.targetUserId,
    details: `${params.newStatus === 'suspended' ? 'Suspended' : 'Reactivated'} account ${targetLabel}.`,
  });

  const role = mapRole(updated.role) || 'Creator';
  return toPublicUser(updated, role);
}

/**
 * Menghapus akun pengguna oleh Admin secara aman
 */
export async function deleteUserAdmin(params: {
  targetUserId: string;
  adminId: string;
  adminName: string;
}): Promise<boolean> {
  const admin = createAdminClient();

  // 1. Ambil data target user
  const { data: targetUser, error: findErr } = await admin
    .from('users')
    .select('id, email, full_name, username, role, account_status')
    .eq('id', params.targetUserId)
    .single();

  if (findErr || !targetUser) {
    throw new Error('User not found.');
  }

  // 2. Proteksi: Admin tidak boleh menghapus dirinya sendiri
  if (params.targetUserId === params.adminId) {
    throw new Error('You cannot delete your own active account.');
  }

  // 3. Proteksi: Jangan menghapus admin terakhir
  if (targetUser.role.toLowerCase() === 'admin') {
    const { count } = await admin
      .from('users')
      .select('*', { count: 'exact', head: true })
      .eq('role', 'admin');

    if ((count || 0) <= 1) {
      throw new Error('Cannot delete the last Administrator in the system.');
    }
  }

  const targetLabel = targetUser.full_name || targetUser.username || targetUser.email;

  // 4. Hapus frame atau arsipkan frame terkait milik kreator agar relasi data tetap terjaga
  await admin
    .from('frames')
    .update({ status: 'archived', is_active: false })
    .eq('creator_id', params.targetUserId);

  // 5. Hapus dari public.users
  const { error: deleteProfileErr } = await admin
    .from('users')
    .delete()
    .eq('id', params.targetUserId);

  if (deleteProfileErr) {
    throw new Error(`Failed to delete user profile: ${deleteProfileErr.message}`);
  }

  // 6. Hapus dari auth.users via Supabase Auth Admin
  try {
    await admin.auth.admin.deleteUser(params.targetUserId);
  } catch (authErr: any) {
    console.warn(`[deleteUserAdmin] Warning deleting from auth.users: ${authErr?.message}`);
  }

  // 7. Rekam audit log
  await admin.from('audit_logs').insert({
    admin_id: params.adminId,
    action: 'DELETE_CREATOR',
    target_type: 'creator',
    target_id: params.targetUserId,
    details: `Admin ${params.adminName} deleted the creator/user account "${targetLabel}".`,
  });

  return true;
}

/**
 * Menambahkan pengguna baru oleh Admin
 */
export async function createUserAdmin(params: {
  email: string;
  password: string;
  name: string;
  username: string;
  role: 'admin' | 'creator';
  adminId: string;
  adminName: string;
}): Promise<User> {
  const admin = createAdminClient();

  // Validasi duplikasi username
  const { data: existingUsername } = await admin
    .from('users')
    .select('id')
    .eq('username', params.username.toLowerCase())
    .single();

  if (existingUsername) {
    throw new Error('Username is already taken.');
  }

  // Buat akun di Supabase Auth (bcrypt hashing dilakukan otomatis)
  const { data: created, error: createAuthErr } = await admin.auth.admin.createUser({
    email: params.email.toLowerCase(),
    password: params.password,
    email_confirm: true,
    user_metadata: {
      full_name: params.name,
      username: params.username.toLowerCase(),
    },
  });

  if (createAuthErr || !created.user) {
    throw new Error(`Failed to register account in auth: ${createAuthErr?.message || 'Auth error'}`);
  }

  // Simpan profil di public.users
  const { data: profile, error: profileErr } = await admin
    .from('users')
    .insert({
      id: created.user.id,
      email: params.email.toLowerCase(),
      full_name: params.name,
      username: params.username.toLowerCase(),
      role: params.role,
      account_status: 'active',
    })
    .select('id, email, full_name, username, role, account_status, created_at')
    .single<UserProfileRow>();

  if (profileErr || !profile) {
    // Rollback auth user
    await admin.auth.admin.deleteUser(created.user.id);
    throw new Error(`Failed to save user profile: ${profileErr?.message || 'Database error'}`);
  }

  // Rekam audit log
  await admin.from('audit_logs').insert({
    admin_id: params.adminId,
    action: 'ACTIVATE_CREATOR',
    target_type: 'user',
    target_id: profile.id,
    details: `Admin ${params.adminName} added a new user @${profile.username} (${params.role}).`,
  });

  const role = mapRole(profile.role) || 'Creator';
  return toPublicUser(profile, role);
}

