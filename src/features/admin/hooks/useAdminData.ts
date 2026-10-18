import { useState, useCallback } from 'react';
import { getAllFrames, getAuditLogs, getGuestPhotos } from '../../../data/frames';
import type { FrameTemplate, AuditLog, GuestPhotoRecord } from '../../../types/photobooth';

export const useAdminData = () => {
  const [frames, setFrames] = useState<FrameTemplate[]>(getAllFrames);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(getAuditLogs);
  const [guestPhotos] = useState<GuestPhotoRecord[]>(getGuestPhotos);

  const refreshData = useCallback(() => {
    setFrames(getAllFrames());
    setAuditLogs(getAuditLogs());
  }, []);

  return {
    frames,
    auditLogs,
    guestPhotos,
    refreshData,
    pendingFramesCount: frames.filter((f) => f.status === 'pending_review').length,
    approvedFramesCount: frames.filter((f) => f.status === 'approved').length,
    rejectedFramesCount: frames.filter((f) => f.status === 'rejected').length,
  };
};
