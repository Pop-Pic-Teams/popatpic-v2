import { useState, useCallback } from 'react';
import { getFramesByCreator } from '../../../data/frames';
import type { FrameTemplate } from '../../../types/photobooth';

export const useCreatorFrames = (creatorId?: string) => {
  const [frames, setFrames] = useState<FrameTemplate[]>(() =>
    creatorId ? getFramesByCreator(creatorId) : []
  );

  const refreshFrames = useCallback(() => {
    if (creatorId) {
      setFrames(getFramesByCreator(creatorId));
    }
  }, [creatorId]);

  return {
    frames,
    refreshFrames,
    approvedCount: frames.filter((f) => f.status === 'approved').length,
    pendingCount: frames.filter((f) => f.status === 'pending_review').length,
    rejectedCount: frames.filter((f) => f.status === 'rejected').length,
    archivedCount: frames.filter((f) => f.status === 'archived').length,
  };
};
