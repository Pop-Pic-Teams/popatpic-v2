import type { FrameTemplate, AuditLog, FrameStyle } from '../../../types/photobooth';

export async function fetchPublicFrames(): Promise<FrameTemplate[]> {
  try {
    const res = await fetch('/api/frames', { method: 'GET', cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return data.success && Array.isArray(data.frames) ? data.frames : [];
  } catch (err) {
    console.error('[framesApi] fetchPublicFrames error:', err);
    return [];
  }
}

export async function fetchCreatorFrames(): Promise<FrameTemplate[]> {
  try {
    const res = await fetch('/api/creator/frames', { method: 'GET', cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return data.success && Array.isArray(data.frames) ? data.frames : [];
  } catch (err) {
    console.error('[framesApi] fetchCreatorFrames error:', err);
    return [];
  }
}

export async function uploadCreatorFrame(payload: {
  name: string;
  description: string;
  poseCount: number;
  category: FrameStyle;
  tags: string[];
  image: string; // base64 data url
}): Promise<{ success: boolean; frame?: FrameTemplate; error?: string }> {
  try {
    const res = await fetch('/api/creator/frames', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      return { success: false, error: data.error || 'Failed to upload frame.' };
    }
    return { success: true, frame: data.frame };
  } catch (err: any) {
    console.error('[framesApi] uploadCreatorFrame error:', err);
    return { success: false, error: err?.message || 'An error occurred while uploading the frame.' };
  }
}

export async function updateCreatorFrameApi(
  frameId: string,
  payload: {
    name?: string;
    description?: string;
    poseCount?: number;
    category?: FrameStyle;
    tags?: string[];
    image?: string;
    status?: string;
  }
): Promise<{ success: boolean; frame?: FrameTemplate; error?: string }> {
  try {
    const res = await fetch(`/api/creator/frames/${frameId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      return { success: false, error: data.error || 'Failed to update the frame.' };
    }
    return { success: true, frame: data.frame };
  } catch (err: any) {
    console.error('[framesApi] updateCreatorFrameApi error:', err);
    return { success: false, error: err?.message || 'An error occurred while updating the frame.' };
  }
}

export async function archiveCreatorFrameApi(
  frameId: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch(`/api/creator/frames/${frameId}/archive`, {
      method: 'POST',
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      return { success: false, error: data.error || 'Failed to archive the frame.' };
    }
    return { success: true };
  } catch (err: any) {
    console.error('[framesApi] archiveCreatorFrameApi error:', err);
    return { success: false, error: err?.message || 'An error occurred while archiving the frame.' };
  }
}

export async function fetchAdminFrames(): Promise<FrameTemplate[]> {
  try {
    const res = await fetch('/api/admin/frames', { method: 'GET', cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return data.success && Array.isArray(data.frames) ? data.frames : [];
  } catch (err) {
    console.error('[framesApi] fetchAdminFrames error:', err);
    return [];
  }
}

export async function adminReviewFrameApi(
  frameId: string,
  decision: 'approve' | 'reject' | 'archive' | 'toggle_active',
  reason?: string
): Promise<{ success: boolean; frame?: FrameTemplate; error?: string }> {
  try {
    const res = await fetch(`/api/admin/frames/${frameId}/review`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ decision, reason }),
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      return { success: false, error: data.error || ' Failed to process frame moderation.' };
    }
    return { success: true, frame: data.frame };
  } catch (err: any) {
    console.error('[framesApi] adminReviewFrameApi error:', err);
    return { success: false, error: err?.message || '• An error occurred during frame moderation.' };
  }
}

export async function adminDeleteFrameApi(
  frameId: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch(`/api/admin/frames/${frameId}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      return { success: false, error: data.error || 'Failed to delete the frame.' };
    }
    return { success: true };
  } catch (err: any) {
    console.error('[framesApi] adminDeleteFrameApi error:', err);
    return { success: false, error: err?.message || 'An error occurred while deleting the frame.' };
  }
}

export async function fetchAdminAuditLogs(): Promise<AuditLog[]> {
  try {
    const res = await fetch('/api/admin/audit-logs', { method: 'GET', cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return data.success && Array.isArray(data.logs) ? data.logs : [];
  } catch (err) {
    console.error('[framesApi] fetchAdminAuditLogs error:', err);
    return [];
  }
}

