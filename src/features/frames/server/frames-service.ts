import { createAdminClient } from '../../../utils/supabase/admin';
import type {
  FrameTemplate,
  FrameSlot,
  FrameStyle,
  FrameStatus,
  AuditLog,
} from '../../../types/photobooth';
import { getStandardSlots } from '../../../data/frames';
import { generateSafeFileName } from './validation';

const BUCKET_NAME = process.env.NEXT_PUBLIC_BUCKET_FRAMES || 'frames';

export interface DbFrameRow {
  id: string;
  creator_id: string;
  category_id: string;
  template_id?: string | null;
  name: string;
  description?: string | null;
  pose_count: number;
  slot_config: any;
  tags: string[];
  asset_url: string;
  thumbnail_url?: string | null;
  copyright_attribution?: string | null;
  status: FrameStatus;
  is_active: boolean;
  review_notes?: string | null;
  reviewed_by?: string | null;
  created_at: string;
  updated_at: string;
  // Joined fields if present
  categories?: { id: string; name: string; slug: string } | null;
  users?: { id: string; full_name: string | null; username: string | null; email: string } | null;
}

/**
 * Mengonversi row database tabel public.frames menjadi tipe FrameTemplate frontend
 */
export function mapDbFrameToTemplate(row: DbFrameRow): FrameTemplate {
  const categoryName = (row.categories?.name || 'Cute') as FrameStyle;
  const authorName =
    row.users?.full_name ||
    row.users?.username ||
    (row.users?.email ? row.users.email.split('@')[0] : 'Creator Pop@Pic!');

  let slots: FrameSlot[] = [];
  if (Array.isArray(row.slot_config) && row.slot_config.length > 0) {
    slots = row.slot_config;
  } else {
    slots = getStandardSlots(row.pose_count || 4);
  }

  return {
    id: row.id,
    name: row.name,
    desc: row.description || '',
    count: row.pose_count,
    image: row.asset_url,
    figmaWidth: 4000,
    slots,
    category: categoryName,
    tags: Array.isArray(row.tags) ? row.tags : [],
    author: authorName,
    creator_id: row.creator_id,
    status: row.status,
    is_active: Boolean(row.is_active),
    rejection_reason: row.review_notes || undefined,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

/**
 * Mencari atau mencocokkan category_id berdasarkan nama/slug style
 */
export async function resolveCategoryId(categoryName: string): Promise<string> {
  const admin = createAdminClient();
  const clean = categoryName.trim().toLowerCase();

  const { data, error } = await admin.from('categories').select('id, name, slug');
  if (error || !data || data.length === 0) {
    throw new Error('Gagal mengambil daftar kategori dari database.');
  }

  const found = data.find(
    (c) => c.name.toLowerCase() === clean || c.slug.toLowerCase() === clean
  );

  if (found) return found.id;
  // Fallback ke baris pertama jika tidak ada yang cocok
  return data[0].id;
}

/**
 * Mengunggah file PNG frame ke Supabase Storage bucket 'frames'
 * Mengembalikan public URL permanen file tersebut.
 */
export async function uploadFramePngToStorage(
  buffer: Buffer,
  creatorId: string
): Promise<string> {
  const admin = createAdminClient();
  const fileName = generateSafeFileName(`c_${creatorId.slice(0, 8)}`);

  const { data, error } = await admin.storage.from(BUCKET_NAME).upload(fileName, buffer, {
    contentType: 'image/png',
    upsert: false,
  });

  if (error || !data) {
    throw new Error(`Gagal mengunggah file frame ke penyimpanan: ${error?.message || 'Storage error'}`);
  }

  const { data: pubData } = admin.storage.from(BUCKET_NAME).getPublicUrl(data.path);
  if (!pubData || !pubData.publicUrl) {
    throw new Error('Gagal mendapatkan public URL untuk asset frame yang diunggah.');
  }

  return pubData.publicUrl;
}

/**
 * Mengambil daftar frame publik yang disetujui (approved) dan aktif (is_active)
 * untuk digunakan pengguna umum pada photobooth / katalog.
 */
export async function getPublicApprovedFrames(): Promise<FrameTemplate[]> {
  const admin = createAdminClient();
  const { data, error } = await admin
    .from('frames')
    .select(`
      id,
      creator_id,
      category_id,
      template_id,
      name,
      description,
      pose_count,
      slot_config,
      tags,
      asset_url,
      thumbnail_url,
      status,
      is_active,
      review_notes,
      reviewed_by,
      created_at,
      updated_at,
      categories:category_id ( id, name, slug ),
      users:creator_id ( id, full_name, username, email )
    `)
    .eq('status', 'approved')
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[getPublicApprovedFrames] DB error:', error);
    return [];
  }

  return (data as unknown as DbFrameRow[]).map(mapDbFrameToTemplate);
}

/**
 * Mengambil daftar seluruh frame milik kreator tertentu berdasarkan creatorId
 */
export async function getCreatorFrames(creatorId: string): Promise<FrameTemplate[]> {
  const admin = createAdminClient();
  const { data, error } = await admin
    .from('frames')
    .select(`
      id,
      creator_id,
      category_id,
      template_id,
      name,
      description,
      pose_count,
      slot_config,
      tags,
      asset_url,
      thumbnail_url,
      status,
      is_active,
      review_notes,
      reviewed_by,
      created_at,
      updated_at,
      categories:category_id ( id, name, slug ),
      users:creator_id ( id, full_name, username, email )
    `)
    .eq('creator_id', creatorId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[getCreatorFrames] DB error:', error);
    return [];
  }

  return (data as unknown as DbFrameRow[]).map(mapDbFrameToTemplate);
}

/**
 * Mengambil seluruh frame dalam sistem untuk Admin Console (termasuk yang pending, rejected, approved)
 */
export async function getAllFramesForAdmin(): Promise<FrameTemplate[]> {
  const admin = createAdminClient();
  const { data, error } = await admin
    .from('frames')
    .select(`
      id,
      creator_id,
      category_id,
      template_id,
      name,
      description,
      pose_count,
      slot_config,
      tags,
      asset_url,
      thumbnail_url,
      status,
      is_active,
      review_notes,
      reviewed_by,
      created_at,
      updated_at,
      categories:category_id ( id, name, slug ),
      users:creator_id ( id, full_name, username, email )
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[getAllFramesForAdmin] DB error:', error);
    return [];
  }

  return (data as unknown as DbFrameRow[]).map(mapDbFrameToTemplate);
}

/**
 * Membuat dan menyimpan frame baru oleh kreator terautentikasi.
 * Status awal SELALU 'pending_review' dan is_active = false.
 */
export async function createFrameByCreator(params: {
  creatorId: string;
  creatorName: string;
  name: string;
  description: string;
  poseCount: number;
  category: FrameStyle;
  tags: string[];
  imageBuffer: Buffer;
}): Promise<FrameTemplate> {
  const admin = createAdminClient();

  // 1. Upload asset ke storage
  const assetUrl = await uploadFramePngToStorage(params.imageBuffer, params.creatorId);

  // 2. Resolve category_id
  const categoryId = await resolveCategoryId(params.category);

  // 3. Hitung slot coordinates standar
  const slots = getStandardSlots(params.poseCount);

  // 4. Insert row ke public.frames
  const insertPayload = {
    creator_id: params.creatorId,
    category_id: categoryId,
    name: params.name,
    description: params.description,
    pose_count: params.poseCount,
    slot_config: slots,
    tags: params.tags,
    asset_url: assetUrl,
    status: 'pending_review' as FrameStatus, // Wajib pending_review
    is_active: false, // Belum aktif sebelum diapprove
    review_notes: null,
    reviewed_by: null,
  };

  const { data, error } = await admin
    .from('frames')
    .insert(insertPayload)
    .select(`
      id,
      creator_id,
      category_id,
      template_id,
      name,
      description,
      pose_count,
      slot_config,
      tags,
      asset_url,
      thumbnail_url,
      status,
      is_active,
      review_notes,
      reviewed_by,
      created_at,
      updated_at,
      categories:category_id ( id, name, slug ),
      users:creator_id ( id, full_name, username, email )
    `)
    .single<DbFrameRow>();

  if (error || !data) {
    throw new Error(`Gagal menyimpan data frame ke database: ${error?.message || 'Database error'}`);
  }

  return mapDbFrameToTemplate(data);
}

/**
 * Mengubah atau mengajukan ulang (resubmit) frame yang ditolak / draft oleh kreator pemiliknya
 */
export async function updateFrameByCreator(
  frameId: string,
  creatorId: string,
  updates: {
    name?: string;
    description?: string;
    poseCount?: number;
    category?: FrameStyle;
    tags?: string[];
    imageBuffer?: Buffer;
    status?: FrameStatus;
  }
): Promise<FrameTemplate> {
  const admin = createAdminClient();

  // Pastikan frame ini milik creator bersangkutan
  const { data: existing, error: findErr } = await admin
    .from('frames')
    .select('id, creator_id, status, asset_url')
    .eq('id', frameId)
    .single();

  if (findErr || !existing) {
    throw new Error('Frame tidak ditemukan.');
  }

  if (existing.creator_id !== creatorId) {
    throw new Error('Akses ditolak. Anda hanya dapat mengubah frame milik Anda sendiri.');
  }

  const updatePayload: Record<string, any> = {
    updated_at: new Date().toISOString(),
  };

  if (updates.name) updatePayload.name = updates.name;
  if (updates.description !== undefined) updatePayload.description = updates.description;
  if (updates.poseCount) {
    updatePayload.pose_count = updates.poseCount;
    updatePayload.slot_config = getStandardSlots(updates.poseCount);
  }
  if (updates.category) {
    updatePayload.category_id = await resolveCategoryId(updates.category);
  }
  if (updates.tags) updatePayload.tags = updates.tags;

  if (updates.imageBuffer) {
    updatePayload.asset_url = await uploadFramePngToStorage(updates.imageBuffer, creatorId);
  }

  // Jika sedang mengajukan revisi atau update dari rejected/draft:
  if (updates.status === 'archived') {
    updatePayload.status = 'archived';
    updatePayload.is_active = false;
  } else {
    // Pengajuan ulang untuk review admin
    updatePayload.status = 'pending_review';
    updatePayload.is_active = false;
    updatePayload.review_notes = null;
  }

  const { data, error } = await admin
    .from('frames')
    .update(updatePayload)
    .eq('id', frameId)
    .select(`
      id,
      creator_id,
      category_id,
      template_id,
      name,
      description,
      pose_count,
      slot_config,
      tags,
      asset_url,
      thumbnail_url,
      status,
      is_active,
      review_notes,
      reviewed_by,
      created_at,
      updated_at,
      categories:category_id ( id, name, slug ),
      users:creator_id ( id, full_name, username, email )
    `)
    .single<DbFrameRow>();

  if (error || !data) {
    throw new Error(`Gagal memperbarui frame: ${error?.message || 'Database error'}`);
  }

  return mapDbFrameToTemplate(data);
}

/**
 * Mengarsipkan frame milik kreator sendiri
 */
export async function archiveFrameByCreator(frameId: string, creatorId: string): Promise<boolean> {
  const admin = createAdminClient();

  const { data: existing, error: findErr } = await admin
    .from('frames')
    .select('id, creator_id')
    .eq('id', frameId)
    .single();

  if (findErr || !existing) {
    throw new Error('Frame tidak ditemukan.');
  }

  if (existing.creator_id !== creatorId) {
    throw new Error('Akses ditolak. Anda hanya dapat mengarsipkan frame milik Anda sendiri.');
  }

  const { error } = await admin
    .from('frames')
    .update({
      status: 'archived',
      is_active: false,
      updated_at: new Date().toISOString(),
    })
    .eq('id', frameId);

  if (error) {
    throw new Error(`Gagal mengarsipkan frame: ${error.message}`);
  }

  return true;
}

/**
 * Keputusan moderasi oleh Administrator (Approve, Reject, Archive, Toggle Active)
 */
export async function moderateFrameByAdmin(params: {
  frameId: string;
  decision: 'approve' | 'reject' | 'archive' | 'toggle_active';
  adminId: string;
  adminName: string;
  reason?: string;
}): Promise<FrameTemplate> {
  const admin = createAdminClient();

  // Ambil frame saat ini
  const { data: currentFrame, error: findErr } = await admin
    .from('frames')
    .select('id, name, status, is_active')
    .eq('id', params.frameId)
    .single();

  if (findErr || !currentFrame) {
    throw new Error('Frame tidak ditemukan di database.');
  }

  let updatePayload: Record<string, any> = {
    updated_at: new Date().toISOString(),
    reviewed_by: params.adminId,
  };
  let actionName: AuditLog['action'] = 'APPROVE_FRAME';
  let details = '';

  if (params.decision === 'approve') {
    updatePayload.status = 'approved';
    updatePayload.is_active = true;
    updatePayload.review_notes = null;
    actionName = 'APPROVE_FRAME';
    details = `Disetujui frame "${currentFrame.name}" untuk katalog publik photobooth.`;
  } else if (params.decision === 'reject') {
    const reasonText = (params.reason || '').trim() || 'Frame tidak memenuhi standar desain atau panduan layout Pop@Pic!.';
    updatePayload.status = 'rejected';
    updatePayload.is_active = false;
    updatePayload.review_notes = reasonText;
    actionName = 'REJECT_FRAME';
    details = `Ditolak frame "${currentFrame.name}". Alasan: ${reasonText}`;
  } else if (params.decision === 'archive') {
    updatePayload.status = 'archived';
    updatePayload.is_active = false;
    actionName = 'ARCHIVE_FRAME';
    details = `Diarsipkan frame "${currentFrame.name}".`;
  } else if (params.decision === 'toggle_active') {
    const newActive = !currentFrame.is_active;
    updatePayload.is_active = newActive;
    actionName = 'TOGGLE_FRAME_STATUS';
    details = `Mengubah visibilitas publik frame "${currentFrame.name}" menjadi ${newActive ? 'Aktif' : 'Non-aktif'}.`;
  } else {
    throw new Error('Keputusan moderasi tidak valid.');
  }

  const { data, error } = await admin
    .from('frames')
    .update(updatePayload)
    .eq('id', params.frameId)
    .select(`
      id,
      creator_id,
      category_id,
      template_id,
      name,
      description,
      pose_count,
      slot_config,
      tags,
      asset_url,
      thumbnail_url,
      status,
      is_active,
      review_notes,
      reviewed_by,
      created_at,
      updated_at,
      categories:category_id ( id, name, slug ),
      users:creator_id ( id, full_name, username, email )
    `)
    .single<DbFrameRow>();

  if (error || !data) {
    throw new Error(`Gagal menyimpan moderasi frame: ${error?.message || 'Database error'}`);
  }

  // Rekam ke tabel public.audit_logs
  await admin.from('audit_logs').insert({
    admin_id: params.adminId,
    action: actionName,
    target_type: 'frame',
    target_id: params.frameId,
    details,
  });

  return mapDbFrameToTemplate(data);
}

/**
 * Menghapus frame secara permanen oleh Admin
 */
export async function deleteFrameByAdmin(
  frameId: string,
  adminId: string,
  adminName: string
): Promise<boolean> {
  const admin = createAdminClient();

  const { data: existing } = await admin.from('frames').select('id, name').eq('id', frameId).single();
  const frameName = existing?.name || frameId;

  const { error } = await admin.from('frames').delete().eq('id', frameId);
  if (error) {
    throw new Error(`Gagal menghapus frame: ${error.message}`);
  }

  // Rekam ke tabel audit_logs
  await admin.from('audit_logs').insert({
    admin_id: adminId,
    action: 'ARCHIVE_FRAME',
    target_type: 'frame',
    target_id: frameId,
    details: `Admin ${adminName} menghapus frame "${frameName}".`,
  });

  return true;
}

/**
 * Mengambil daftar audit logs untuk Admin Dashboard
 */
export async function getAuditLogsForAdmin(): Promise<AuditLog[]> {
  const admin = createAdminClient();
  const { data, error } = await admin
    .from('audit_logs')
    .select(`
      id,
      admin_id,
      action,
      target_type,
      target_id,
      details,
      created_at,
      users:admin_id ( id, full_name, username, email )
    `)
    .order('created_at', { ascending: false })
    .limit(100);

  if (error || !data) {
    console.error('[getAuditLogsForAdmin] DB error:', error);
    return [];
  }

  return data.map((item: any) => ({
    id: item.id,
    adminId: item.admin_id,
    adminName: item.users?.full_name || item.users?.username || 'Administrator',
    action: item.action as AuditLog['action'],
    targetType: item.target_type as AuditLog['targetType'],
    targetId: item.target_id,
    details: item.details || '',
    timestamp: item.created_at,
  }));
}

