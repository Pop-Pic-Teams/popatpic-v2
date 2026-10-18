export interface FrameSlot {
  x: number;
  y: number;
  w: number;
  h: number;
}

export type FrameStyle = 'Cute' | 'Vintage' | 'Minimalist' | 'Formal' | 'Retro';

export type FrameStatus = 'draft' | 'pending_review' | 'approved' | 'rejected' | 'archived';

export interface FrameTemplate {
  id: string;
  name: string;
  count: number;
  image: string;
  desc: string;
  figmaWidth: number;
  slots: FrameSlot[];
  category: FrameStyle;
  tags?: string[];
  author: string;
  creator_id: string;
  status: FrameStatus;
  is_active: boolean;
  rejection_reason?: string;
  created_at: string;
  updated_at?: string;
}

export interface PhotoFilter {
  id: string;
  name: string;
  label: string;
  cssFilter: string;
  previewColor: string;
  description: string;
}

export interface CapturedPhoto {
  id: string;
  dataUrl: string;
  timestamp: number;
}

export interface PhotoboothSession {
  id: string;
  frameCount: number;
  frameImage: string;
  photos: string[];
  slots: FrameSlot[];
  figmaWidth: number;
  filterId?: string;
}

export type UserRole = 'Guest' | 'Creator' | 'Admin';

export type CreatorAccountStatus = 'active' | 'suspended';

export interface User {
  id: string;
  username?: string;
  email: string;
  name: string;
  role: UserRole;
  password?: string;
  creatorStatus?: CreatorAccountStatus;
  createdAt: string;
}

export interface AuditLog {
  id: string;
  adminId: string;
  adminName: string;
  action:
    | 'APPROVE_FRAME'
    | 'REJECT_FRAME'
    | 'ARCHIVE_FRAME'
    | 'TOGGLE_FRAME_STATUS'
    | 'SUSPEND_CREATOR'
    | 'ACTIVATE_CREATOR'
    | 'DELETE_CREATOR';
  targetType: 'frame' | 'creator' | 'user';
  targetId: string;
  details: string;
  timestamp: string;
}

export interface GuestPhotoRecord {
  id: string;
  frame_id: string;
  frame_name: string;
  image_url: string;
  pose_count: number;
  filter_applied: string;
  created_at: string;
}
