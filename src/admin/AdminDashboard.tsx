'use client';

import React, { useState } from 'react';
import { useNavigate } from '../utils/navigation';
import {
  Users,
  Image as ImageIcon,
  CheckCircle2,
  Clock,
  Eye,
  AlertTriangle,
  UserX,
  UserCheck,
  Trash2,
  ShieldAlert,
  Check,
  X,
  Power,
  Archive,
  TrendingUp,
  BarChart3,
  PieChart,
  Calendar,
  ArrowLeft,
  Filter,
  Sparkles,
  Download,
  Layers,
  Info,
  ChevronRight,
  RefreshCw,
  Hash,
  Home,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import {
  getAllFrames,
  adminModerateFrame,
  getAuditLogs,
  getGuestPhotos,
  addAuditLog,
  adminDeleteFrame,
} from '../data/frames';
import type { FrameTemplate, AuditLog, GuestPhotoRecord, User } from '../types/photobooth';
import { AdminSidebar, type AdminView } from './AdminSidebar';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const {
    currentUser,
    users,
    updateUserStatus,
    deleteCreator,
  } = useAuth();

  // Guard: Must be logged in Admin
  const isAdmin = currentUser?.role === 'Admin';

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [currentView, setCurrentView] = useState<AdminView>('overview');
  const [frames, setFrames] = useState<FrameTemplate[]>(getAllFrames);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(getAuditLogs);
  const [guestPhotos] = useState<GuestPhotoRecord[]>(getGuestPhotos);

  // Frame Detail Inspection View State (Requirement 5: preserves admin sidebar)
  const [selectedDetailFrame, setSelectedDetailFrame] = useState<FrameTemplate | null>(null);
  const [showSlotOverlays, setShowSlotOverlays] = useState(true);
  const [showMockupPhotos, setShowMockupPhotos] = useState(false);

  // Moderation action modal for rejection note
  const [rejectModalData, setRejectModalData] = useState<{
    id: string;
    title: string;
  } | null>(null);
  const [rejectionNote, setRejectionNote] = useState('');

  // Delete creator confirmation modal
  const [deleteConfirmCreator, setDeleteConfirmCreator] = useState<User | null>(null);

  // Analytics Timeframe
  const [analyticsRange, setAnalyticsRange] = useState<'7d' | '30d' | '90d'>('7d');
  const [activeChartPoint, setActiveChartPoint] = useState<number | null>(null);

  const [notification, setNotification] = useState<string | null>(null);

  if (!currentUser || !isAdmin) {
    return (
      <div className="min-h-screen bg-[#FDFFEB] flex flex-col items-center justify-center p-6 text-center font-sans">
        <div className="h-16 w-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
          <AlertTriangle className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-serif text-[#4B2E1F] mb-2">Restricted Access: Administrators Only</h2>
        <p className="text-xs text-[#4B2E1F]/70 max-w-sm mb-6">
          Administrator credentials are required to view this console. Please sign in with an authorized account.
        </p>
        <button
          onClick={() => navigate('/login')}
          className="rounded-lg bg-[#4B2E1F] px-6 py-2.5 text-xs font-semibold text-[#FDFFEB] shadow-xs hover:bg-[#3D2418] cursor-pointer transition-colors"
        >
          Go to Sign In
        </button>
      </div>
    );
  }

  const refreshData = () => {
    const updated = getAllFrames();
    setFrames(updated);
    setAuditLogs(getAuditLogs());

    if (selectedDetailFrame) {
      const refreshedTarget = updated.find((f) => f.id === selectedDetailFrame.id);
      setSelectedDetailFrame(refreshedTarget || null);
    }
  };

  const handleApproveFrame = (frame: FrameTemplate) => {
    adminModerateFrame(frame.id, 'approve', currentUser.id, currentUser.name);
    refreshData();
    setNotification(`Frame "${frame.name}" approved and is now active for guest photobooth sessions.`);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleOpenRejectFrame = (frame: FrameTemplate) => {
    setRejectModalData({
      id: frame.id,
      title: `Reject Frame: ${frame.name}`,
    });
    setRejectionNote('');
  };

  const handleConfirmRejection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rejectModalData) return;
    if (!rejectionNote.trim()) {
      alert('A rejection reason note is required.');
      return;
    }

    adminModerateFrame(
      rejectModalData.id,
      'reject',
      currentUser.id,
      currentUser.name,
      rejectionNote
    );
    setNotification(`Frame rejected with reason note sent to creator.`);

    refreshData();
    setRejectModalData(null);
    setRejectionNote('');
    setTimeout(() => setNotification(null), 3500);
  };

  const handleToggleFrameActive = (frame: FrameTemplate) => {
    adminModerateFrame(frame.id, 'toggle_active', currentUser.id, currentUser.name);
    refreshData();
    setNotification(`Visibility for "${frame.name}" updated.`);
    setTimeout(() => setNotification(null), 2500);
  };

  const handleArchiveFrame = (frame: FrameTemplate) => {
    adminModerateFrame(frame.id, 'archive', currentUser.id, currentUser.name);
    refreshData();
    setNotification(`Frame "${frame.name}" archived.`);
    setTimeout(() => setNotification(null), 2500);
  };

  const handleDeleteFrame = (frame: FrameTemplate) => {
    if (confirm(`Apakah Anda yakin ingin menghapus frame "${frame.name}" secara permanen?`)) {
      adminDeleteFrame(frame.id);
      if (selectedDetailFrame?.id === frame.id) {
        setSelectedDetailFrame(null);
      }
      refreshData();
      setNotification(`Frame "${frame.name}" berhasil dihapus secara permanen.`);
      setTimeout(() => setNotification(null), 3000);
    }
  };

  // Creator Account Management Actions
  const handleToggleCreatorStatus = (creator: User) => {
    const isSuspended = creator.creatorStatus === 'suspended';
    const newStatus = isSuspended ? 'active' : 'suspended';

    updateUserStatus(creator.id, newStatus);

    addAuditLog({
      id: `log_${Date.now()}`,
      adminId: currentUser.id,
      adminName: currentUser.name,
      action: isSuspended ? 'ACTIVATE_CREATOR' : 'SUSPEND_CREATOR',
      targetType: 'creator',
      targetId: creator.id,
      details: `${isSuspended ? 'Reactivated' : 'Suspended'} Creator account ${creator.name} (${creator.email}).`,
      timestamp: new Date().toISOString(),
    });

    refreshData();
    setNotification(
      `Creator "${creator.name}" account status updated to ${
        isSuspended ? 'Active' : 'Suspended'
      }.`
    );
    setTimeout(() => setNotification(null), 3000);
  };

  const handleConfirmDeleteCreator = () => {
    if (!deleteConfirmCreator) return;

    const targetCreator = deleteConfirmCreator;
    deleteCreator(targetCreator.id);

    addAuditLog({
      id: `log_${Date.now()}`,
      adminId: currentUser.id,
      adminName: currentUser.name,
      action: 'DELETE_CREATOR',
      targetType: 'creator',
      targetId: targetCreator.id,
      details: `Deleted Creator account ${targetCreator.name} (${targetCreator.email}) due to policy violations.`,
      timestamp: new Date().toISOString(),
    });

    refreshData();
    setDeleteConfirmCreator(null);
    setNotification(`Creator account "${targetCreator.name}" permanently deleted.`);
    setTimeout(() => setNotification(null), 3000);
  };

  // Stats Counters
  const totalUsers = users.length;
  const creatorUsers = users.filter((u) => u.role === 'Creator');
  const totalCreators = creatorUsers.length;
  const totalFrames = frames.length;
  const pendingFrames = frames.filter((f) => f.status === 'pending_review');
  const pendingFramesCount = pendingFrames.length;
  const totalPhotos = guestPhotos.length;

  // Analytics Sample Data
  const trendData7d = [
    { label: 'Mon', sessions: 142, photos: 568 },
    { label: 'Tue', sessions: 185, photos: 740 },
    { label: 'Wed', sessions: 220, photos: 880 },
    { label: 'Thu', sessions: 265, photos: 1060 },
    { label: 'Fri', sessions: 390, photos: 1560 },
    { label: 'Sat', sessions: 480, photos: 1920 },
    { label: 'Sun', sessions: 430, photos: 1720 },
  ];

  const trendData30d = [
    { label: 'W1', sessions: 980, photos: 3920 },
    { label: 'W2', sessions: 1240, photos: 4960 },
    { label: 'W3', sessions: 1510, photos: 6040 },
    { label: 'W4', sessions: 1890, photos: 7560 },
  ];

  const activeTrendData = analyticsRange === '7d' ? trendData7d : trendData30d;
  const maxSessions = Math.max(...activeTrendData.map((d) => d.sessions));

  // Category breakdown data
  const categoryCounts: Record<string, number> = {
    Cute: frames.filter((f) => f.category === 'Cute').length,
    Vintage: frames.filter((f) => f.category === 'Vintage').length,
    Retro: frames.filter((f) => f.category === 'Retro').length,
    Minimalist: frames.filter((f) => f.category === 'Minimalist').length,
    Formal: frames.filter((f) => f.category === 'Formal').length,
  };
  const categoryTotal = Object.values(categoryCounts).reduce((a, b) => a + b, 0) || 1;

  // Sample portrait dummy photos for cutout inspection
  const samplePortraits = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  ];

  return (
    <div className="min-h-screen bg-[#FDFFEB] flex font-sans text-[#4B2E1F] relative">
      {/* SIDEBAR NAVIGATION - Collapsible on Desktop & Drawer on Mobile */}
      <AdminSidebar
        currentView={currentView}
        onSelectView={(view) => {
          setSelectedDetailFrame(null); // Return to list if inspecting
          setCurrentView(view);
        }}
        pendingFramesCount={pendingFramesCount}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* MAIN ADMIN CONTENT AREA */}
      <main className="w-full flex-1 min-w-0 min-h-screen md:h-screen md:overflow-y-auto p-4 sm:p-6 md:p-8 lg:p-10 pt-18 md:pt-8 pb-24 md:pb-12">
        {notification && (
          <div className="mb-6 flex items-center gap-2 rounded-xl bg-emerald-50 p-4 text-xs font-semibold text-emerald-800 border border-emerald-300 shadow-xs animate-in fade-in">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
            <span>{notification}</span>
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW: FRAME DETAIL INSPECTION (Requirement 5)            */}
        {/* ========================================================= */}
        {currentView === 'frames' && selectedDetailFrame ? (
          <div className="space-y-6">
            {/* Top Navigation & Actions Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DEE6BD] pb-5">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedDetailFrame(null)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#DEE6BD] bg-white text-[#4B2E1F] transition-colors hover:bg-[#DEE6BD]/30 cursor-pointer shadow-xs"
                  title="Back to Frame Moderation"
                  aria-label="Back to Frame Moderation"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <div>
                  <div className="flex items-center gap-2.5">
                    <h1 className="text-2xl md:text-3xl font-serif font-normal text-[#4B2E1F]">
                      {selectedDetailFrame.name}
                    </h1>
                    <span
                      className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${
                        selectedDetailFrame.status === 'approved'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : selectedDetailFrame.status === 'pending_review'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : selectedDetailFrame.status === 'rejected'
                          ? 'bg-red-100 text-red-800 border border-red-300'
                          : 'bg-[#DEE6BD]/50 text-[#4B2E1F] border border-[#DEE6BD]'
                      }`}
                    >
                      {selectedDetailFrame.status.replace('_', ' ')}
                    </span>
                  </div>
                  <p className="text-xs text-[#4B2E1F]/70 mt-0.5">
                    ID: <code className="text-[#4B2E1F] font-mono text-[11px] bg-[#DEE6BD]/30 px-1 py-0.5 rounded">{selectedDetailFrame.id}</code> • Submitted by {selectedDetailFrame.author}
                  </p>
                </div>
              </div>

              {/* Moderation Action Buttons Header */}
              <div className="flex items-center gap-2">
                {selectedDetailFrame.status === 'pending_review' && (
                  <>
                    <button
                      onClick={() => handleApproveFrame(selectedDetailFrame)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-800 transition-colors shadow-xs cursor-pointer"
                    >
                      <Check className="h-4 w-4" />
                      <span>Approve Frame</span>
                    </button>
                    <button
                      onClick={() => handleOpenRejectFrame(selectedDetailFrame)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-red-700 px-4 py-2 text-xs font-semibold text-white hover:bg-red-800 transition-colors shadow-xs cursor-pointer"
                    >
                      <X className="h-4 w-4" />
                      <span>Reject with Note</span>
                    </button>
                  </>
                )}

                {selectedDetailFrame.status === 'approved' && (
                  <>
                    <button
                      onClick={() => handleToggleFrameActive(selectedDetailFrame)}
                      className={`inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer shadow-xs ${
                        selectedDetailFrame.is_active
                          ? 'border-emerald-300 bg-emerald-100 text-emerald-900 hover:bg-emerald-200'
                          : 'border-[#DEE6BD] bg-[#FDFFEB] text-[#4B2E1F]/70 hover:bg-[#DEE6BD]/40'
                      }`}
                    >
                      <Power className="h-4 w-4" />
                      <span>{selectedDetailFrame.is_active ? 'Active on Guest' : 'Hidden from Guest'}</span>
                    </button>

                    <button
                      onClick={() => handleArchiveFrame(selectedDetailFrame)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[#DEE6BD] bg-white px-3.5 py-2 text-xs font-semibold text-[#4B2E1F] hover:bg-[#DEE6BD]/30 transition-colors cursor-pointer shadow-xs"
                    >
                      <Archive className="h-4 w-4" />
                      <span>Archive</span>
                    </button>

                    <button
                      onClick={() => handleDeleteFrame(selectedDetailFrame)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2 text-xs font-semibold text-red-700 hover:bg-red-100 transition-colors cursor-pointer shadow-xs"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span>Delete Frame</span>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Inspection Stage: Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Visual Canvas & Mockup Viewfinder */}
              <div className="lg:col-span-7 flex flex-col rounded-xl border border-[#DEE6BD] bg-white p-5 shadow-xs">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DEE6BD]">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="h-4 w-4 text-[#4B2E1F]" />
                    <span className="text-xs font-semibold text-[#4B2E1F]">
                      Visual Layout & Cutouts Inspector
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowSlotOverlays(!showSlotOverlays)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border transition-colors cursor-pointer ${
                        showSlotOverlays
                          ? 'bg-[#4B2E1F] text-[#FDFFEB] border-[#3D2418]'
                          : 'bg-[#FDFFEB] text-[#4B2E1F] border-[#DEE6BD]'
                      }`}
                    >
                      {showSlotOverlays ? 'Hide Slot Coordinates' : 'Show Slot Coordinates'}
                    </button>

                    <button
                      onClick={() => setShowMockupPhotos(!showMockupPhotos)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border transition-colors cursor-pointer ${
                        showMockupPhotos
                          ? 'bg-[#F4B8A5] text-[#4B2E1F] border-[#DE9784]'
                          : 'bg-[#FDFFEB] text-[#4B2E1F] border-[#DEE6BD]'
                      }`}
                    >
                      {showMockupPhotos ? 'Hide Mock Photos' : 'Test With Mock Photos'}
                    </button>
                  </div>
                </div>

                {/* Stage Preview Container */}
                <div className="relative aspect-[4000/5900] w-full max-w-md mx-auto overflow-hidden rounded-xl bg-stone-900 border border-[#DEE6BD] p-2 flex items-center justify-center shadow-inner">
                  {/* Mockup Underlay (Portraits behind frame cutouts) */}
                  {showMockupPhotos && selectedDetailFrame.slots && (
                    <div className="absolute inset-2 z-0">
                      {selectedDetailFrame.slots.map((s, idx) => {
                        const scaleW = 100 / 4000;
                        const scaleH = 100 / 5900;
                        return (
                          <div
                            key={idx}
                            style={{
                              position: 'absolute',
                              left: `${s.x * scaleW}%`,
                              top: `${s.y * scaleH}%`,
                              width: `${s.w * scaleW}%`,
                              height: `${s.h * scaleH}%`,
                            }}
                            className="overflow-hidden rounded-lg bg-stone-800 shadow-inner"
                          >
                            <img
                              src={samplePortraits[idx % samplePortraits.length]}
                              alt={`Test Model #${idx + 1}`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Frame PNG/SVG Image Layer */}
                  <img
                    src={selectedDetailFrame.image}
                    alt={selectedDetailFrame.name}
                    className="relative z-10 h-full w-full object-contain pointer-events-none"
                  />

                  {/* Slot Measurement Overlays */}
                  {showSlotOverlays && selectedDetailFrame.slots && (
                    <div className="absolute inset-2 z-20 pointer-events-none">
                      {selectedDetailFrame.slots.map((s, idx) => {
                        const scaleW = 100 / 4000;
                        const scaleH = 100 / 5900;
                        return (
                          <div
                            key={idx}
                            style={{
                              position: 'absolute',
                              left: `${s.x * scaleW}%`,
                              top: `${s.y * scaleH}%`,
                              width: `${s.w * scaleW}%`,
                              height: `${s.h * scaleH}%`,
                            }}
                            className="border-2 border-dashed border-[#4B2E1F] bg-[#4B2E1F]/15 rounded-md flex flex-col items-center justify-center text-center p-1"
                          >
                            <span className="rounded bg-[#4B2E1F] px-1.5 py-0.5 text-[9px] font-mono font-bold text-[#FDFFEB]">
                              Slot #{idx + 1}
                            </span>
                            <span className="text-[8px] font-mono text-[#FDFFEB] bg-[#4B2E1F]/80 px-1 rounded mt-0.5">
                              {s.w} × {s.h}px
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Subtitle helper */}
                <div className="mt-3 text-center text-[11px] text-[#4B2E1F]/70">
                  Standard Photobooth Canvas: 4000 × 5900 px (300 DPI Export Ready)
                </div>
              </div>

              {/* Right Column: Metadata, Slots breakdown, Creator Profile */}
              <div className="lg:col-span-5 space-y-5">
                {/* Specifications Card */}
                <div className="rounded-xl border border-[#DEE6BD] bg-white p-5 shadow-xs">
                  <h3 className="text-base font-serif font-normal text-[#4B2E1F] mb-3">
                    Technical Specifications
                  </h3>

                  <div className="divide-y divide-[#DEE6BD] text-xs">
                    <div className="py-2.5 flex justify-between">
                      <span className="text-[#4B2E1F]/70">Pose Layout</span>
                      <span className="font-semibold text-[#4B2E1F]">{selectedDetailFrame.count} Poses</span>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <span className="text-[#4B2E1F]/70">Category / Style</span>
                      <span className="font-semibold text-[#4B2E1F] bg-[#FDFFEB] px-2 py-0.5 rounded border border-[#DEE6BD]">
                        {selectedDetailFrame.category}
                      </span>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <span className="text-[#4B2E1F]/70">Canvas Dimensions</span>
                      <span className="font-mono font-semibold text-[#4B2E1F]">4000 × 5900 px</span>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <span className="text-[#4B2E1F]/70">Aspect Ratio</span>
                      <span className="font-mono text-[#4B2E1F]">4:5.9 (High-Res Strip)</span>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <span className="text-[#4B2E1F]/70">Transparent Cutout Slots</span>
                      <span className="font-semibold text-emerald-700">
                        {selectedDetailFrame.slots?.length || selectedDetailFrame.count} Verified Slots
                      </span>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <span className="text-[#4B2E1F]/70">Submitted At</span>
                      <span className="text-[#4B2E1F]">
                        {new Date(selectedDetailFrame.created_at).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description & Notes */}
                <div className="rounded-xl border border-[#DEE6BD] bg-white p-5 shadow-xs">
                  <h3 className="text-base font-serif font-normal text-[#4B2E1F] mb-2">
                    Creator Description
                  </h3>
                  <p className="text-xs text-[#4B2E1F]/80 leading-relaxed bg-[#FDFFEB] p-3 rounded-lg border border-[#DEE6BD]">
                    {selectedDetailFrame.desc || 'No description provided by the creator.'}
                  </p>

                  {selectedDetailFrame.rejection_reason && (
                    <div className="mt-3 rounded-lg bg-red-50 p-3 border border-red-200 text-xs text-red-800">
                      <strong className="block mb-0.5 font-semibold">Previous Rejection Note:</strong>
                      {selectedDetailFrame.rejection_reason}
                    </div>
                  )}
                </div>

                {/* Hashtags & Curation Tags Card (Kurasi Admin) */}
                <div className="rounded-xl border border-[#DEE6BD] bg-white p-5 shadow-xs">
                  <div className="flex items-center justify-between mb-2.5">
                    <h3 className="text-base font-serif font-normal text-[#4B2E1F] flex items-center gap-1.5">
                      <Hash className="h-4 w-4 text-[#4B2E1F]" />
                      <span>Hashtags & Curation Tags</span>
                    </h3>
                    <span className="text-[10px] text-[#4B2E1F]/60">
                      {(selectedDetailFrame.tags?.length || 0)} tags
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDetailFrame.tags && selectedDetailFrame.tags.length > 0 ? (
                      selectedDetailFrame.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#FDFFEB] border border-[#DEE6BD] text-[#4B2E1F]"
                        >
                          <span className="text-[#4B2E1F]/70 font-bold">#</span>
                          <span>{t.replace(/^#/, '')}</span>
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-[#4B2E1F]/60 italic">
                        Tidak ada hashtag khusus (default kategori: #{selectedDetailFrame.category.toLowerCase()})
                      </span>
                    )}
                  </div>
                </div>

                {/* Creator Attribution */}
                <div className="rounded-xl border border-[#DEE6BD] bg-white p-5 shadow-xs">
                  <h3 className="text-base font-serif font-normal text-[#4B2E1F] mb-3">
                    Creator Information
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#FDFFEB] text-[#4B2E1F] border border-[#DEE6BD] flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                      {selectedDetailFrame.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#4B2E1F]">{selectedDetailFrame.author}</div>
                      <div className="text-[11px] text-[#4B2E1F]/60">Creator ID: {selectedDetailFrame.creator_id}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* ========================================================= */}
        {/* VIEW 1: OVERVIEW & ANALYTICS WITH RICH CHARTS (Req 4)     */}
        {/* ========================================================= */}
        {currentView === 'overview' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-serif font-normal text-[#4B2E1F]">
                  Admin Overview & <span className="italic text-[#4B2E1F]">Analytics</span>
                </h1>
                <p className="text-xs text-[#4B2E1F]/70 mt-1">
                  Comprehensive performance metrics, photo trends, and creator moderation health.
                </p>
              </div>

              {/* Time Range Filter Selector */}
              <div className="flex items-center gap-1.5 rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] p-1 shadow-2xs">
                {(['7d', '30d'] as const).map((range) => (
                  <button
                    key={range}
                    onClick={() => setAnalyticsRange(range)}
                    className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                      analyticsRange === range
                        ? 'bg-[#4B2E1F] text-[#FDFFEB] shadow-xs'
                        : 'text-[#4B2E1F]/70 hover:text-[#4B2E1F]'
                    }`}
                  >
                    {range === '7d' ? 'Last 7 Days' : 'Last 30 Days'}
                  </button>
                ))}
              </div>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              <div className="rounded-xl border border-[#DEE6BD] bg-white p-4 shadow-xs">
                <div className="flex items-center justify-between text-[#4B2E1F]/50 mb-1.5">
                  <span className="text-[11px] font-semibold uppercase text-[#4B2E1F]/70">Total Users</span>
                  <Users className="h-4 w-4 text-[#4B2E1F]" />
                </div>
                <div className="text-2xl font-serif font-normal text-[#4B2E1F]">{totalUsers}</div>
                <div className="text-[10px] text-emerald-700 font-semibold mt-0.5 flex items-center gap-0.5">
                  <TrendingUp className="h-3 w-3" /> +12% this month
                </div>
              </div>

              <div className="rounded-xl border border-[#DEE6BD] bg-white p-4 shadow-xs">
                <div className="flex items-center justify-between text-[#4B2E1F]/50 mb-1.5">
                  <span className="text-[11px] font-semibold uppercase text-[#4B2E1F]/70">Creators</span>
                  <Users className="h-4 w-4 text-[#F4B8A5]" />
                </div>
                <div className="text-2xl font-serif font-normal text-[#4B2E1F]">{totalCreators}</div>
                <div className="text-[10px] text-[#4B2E1F]/60 mt-0.5">Active design studios</div>
              </div>

              <div className="rounded-xl border border-[#DEE6BD] bg-white p-4 shadow-xs">
                <div className="flex items-center justify-between text-[#4B2E1F]/50 mb-1.5">
                  <span className="text-[11px] font-semibold uppercase text-[#4B2E1F]/70">Frames Catalog</span>
                  <ImageIcon className="h-4 w-4 text-[#4B2E1F]" />
                </div>
                <div className="text-2xl font-serif font-normal text-[#4B2E1F]">{totalFrames}</div>
                <div className="text-[10px] text-[#4B2E1F]/60 mt-0.5">Published templates</div>
              </div>

              <div className="rounded-xl border border-[#DEE6BD] bg-white p-4 shadow-xs">
                <div className="flex items-center justify-between text-[#4B2E1F]/50 mb-1.5">
                  <span className="text-[11px] font-semibold uppercase text-[#4B2E1F]/70">Review Queue</span>
                  <Clock className="h-4 w-4 text-amber-600" />
                </div>
                <div className="text-2xl font-serif font-normal text-amber-700">{pendingFramesCount}</div>
                <div className="text-[10px] text-amber-700 font-semibold mt-0.5">
                  {pendingFramesCount > 0 ? 'Action required' : 'Queue cleared'}
                </div>
              </div>

              <div className="rounded-xl border border-[#DEE6BD] bg-white p-4 shadow-xs">
                <div className="flex items-center justify-between text-[#4B2E1F]/50 mb-1.5">
                  <span className="text-[11px] font-semibold uppercase text-[#4B2E1F]/70">Photo Sessions</span>
                  <Sparkles className="h-4 w-4 text-[#F4B8A5]" />
                </div>
                <div className="text-2xl font-serif font-normal text-[#4B2E1F]">{totalPhotos + 1480}</div>
                <div className="text-[10px] text-emerald-700 font-semibold mt-0.5 flex items-center gap-0.5">
                  <TrendingUp className="h-3 w-3" /> +24% activity
                </div>
              </div>
            </div>

            {/* CHARTS ROW (Requirement 4) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Chart 1: Interactive Sessions & Captures SVG Chart (8 Cols) */}
              <div className="lg:col-span-8 rounded-xl border border-[#DEE6BD] bg-white p-5 md:p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-[#4B2E1F]" />
                      <h2 className="text-base font-serif font-normal text-[#4B2E1F]">
                        Photobooth Sessions & Photo Strip Velocity
                      </h2>
                    </div>
                    <span className="text-[11px] text-[#4B2E1F]/70">
                      Average: <strong className="text-[#4B2E1F]">340 sessions/day</strong>
                    </span>
                  </div>
                  <p className="text-xs text-[#4B2E1F]/70 mb-6">
                    Real-time guest traffic trends across live webcam captures and high-res downloads.
                  </p>
                </div>

                {/* SVG Visual Area Chart */}
                <div className="relative w-full h-56 pt-2">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 500 180" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4B2E1F" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#F4B8A5" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#4B2E1F" />
                        <stop offset="100%" stopColor="#F4B8A5" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Gridlines */}
                    {[0, 45, 90, 135].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="500"
                        y2={y}
                        stroke="#DEE6BD"
                        strokeDasharray="4 4"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Gradient Area Fill */}
                    {(() => {
                      const points = activeTrendData.map((d, i) => {
                        const x = (i / (activeTrendData.length - 1)) * 500;
                        const y = 160 - (d.sessions / maxSessions) * 130;
                        return `${x},${y}`;
                      });
                      const dArea = `M 0,160 L ${points.join(' L ')} L 500,160 Z`;
                      const dLine = `M ${points.join(' L ')}`;

                      return (
                        <>
                          <path d={dArea} fill="url(#areaGradient)" />
                          <path
                            d={dLine}
                            fill="none"
                            stroke="url(#lineGradient)"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                          />
                        </>
                      );
                    })()}

                    {/* Interactive Points */}
                    {activeTrendData.map((d, i) => {
                      const x = (i / (activeTrendData.length - 1)) * 500;
                      const y = 160 - (d.sessions / maxSessions) * 130;
                      const isHovered = activeChartPoint === i;

                      return (
                        <g key={i}>
                          <circle
                            cx={x}
                            cy={y}
                            r={isHovered ? 6 : 4}
                            fill="#FDFFEB"
                            stroke="#4B2E1F"
                            strokeWidth={isHovered ? 3.5 : 2.5}
                            className="cursor-pointer transition-all"
                            onMouseEnter={() => setActiveChartPoint(i)}
                            onMouseLeave={() => setActiveChartPoint(null)}
                          />
                          {isHovered && (
                            <g>
                              <rect
                                x={Math.min(Math.max(x - 45, 10), 410)}
                                y={y - 38}
                                width="90"
                                height="28"
                                rx="6"
                                fill="#4B2E1F"
                              />
                              <text
                                x={Math.min(Math.max(x - 45, 10), 410) + 45}
                                y={y - 20}
                                textAnchor="middle"
                                fill="#FDFFEB"
                                fontSize="11"
                                fontWeight="bold"
                                fontFamily="sans-serif"
                              >
                                {d.sessions} Sessions
                              </text>
                            </g>
                          )}
                        </g>
                      );
                    })}
                  </svg>

                  {/* X-axis labels */}
                  <div className="flex justify-between text-[11px] text-[#4B2E1F]/60 mt-2 px-1">
                    {activeTrendData.map((d, i) => (
                      <span key={i} className="font-medium">
                        {d.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Chart 2: Category Distribution Breakdown (4 Cols) */}
              <div className="lg:col-span-4 rounded-xl border border-[#DEE6BD] bg-white p-5 md:p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <PieChart className="h-4 w-4 text-[#F4B8A5]" />
                    <h2 className="text-base font-serif font-normal text-[#4B2E1F]">
                      Frame Category Popularity
                    </h2>
                  </div>
                  <p className="text-xs text-[#4B2E1F]/70 mb-5">
                    Distribution of frames across community design styles.
                  </p>
                </div>

                {/* Progress bars representing categories */}
                <div className="space-y-3.5 my-auto">
                  {Object.entries(categoryCounts).map(([cat, count]) => {
                    const percentage = Math.round((count / categoryTotal) * 100);
                    return (
                      <div key={cat}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-semibold text-[#4B2E1F]">{cat}</span>
                          <span className="text-[#4B2E1F]/70 font-mono text-[11px]">
                            {count} frames ({percentage}%)
                          </span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-[#FDFFEB] overflow-hidden border border-[#DEE6BD]">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${
                              cat === 'Cute'
                                ? 'bg-[#F4B8A5]'
                                : cat === 'Vintage'
                                ? 'bg-amber-600'
                                : cat === 'Retro'
                                ? 'bg-[#4B2E1F]/80'
                                : cat === 'Minimalist'
                                ? 'bg-[#4B2E1F]'
                                : 'bg-[#4B2E1F]/60'
                            }`}
                            style={{ width: `${Math.max(percentage, 8)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 pt-3 border-t border-[#DEE6BD] flex items-center justify-between text-[11px] text-[#4B2E1F]/70">
                  <span>Total Designs</span>
                  <span className="font-semibold text-[#4B2E1F]">{totalFrames} frames</span>
                </div>
              </div>
            </div>

            {/* Quick action section: pending frames preview */}
            {pendingFramesCount > 0 && (
              <div className="rounded-xl border border-amber-300 bg-amber-50/50 p-5 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <h2 className="text-sm font-semibold text-amber-950">
                      Pending Moderation Queue ({pendingFramesCount})
                    </h2>
                  </div>
                  <button
                    onClick={() => setCurrentView('frames')}
                    className="text-xs font-semibold text-amber-900 hover:underline cursor-pointer"
                  >
                    Open Full Moderation Table →
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {pendingFrames.map((frame) => (
                    <div
                      key={frame.id}
                      className="bg-white rounded-lg p-3 border border-amber-300 shadow-xs flex items-center gap-3"
                    >
                      <button
                        onClick={() => {
                          setSelectedDetailFrame(frame);
                          setCurrentView('frames');
                        }}
                        className="h-14 w-10 shrink-0 object-contain rounded border border-[#DEE6BD] bg-[#FDFFEB] p-0.5 hover:ring-2 hover:ring-[#4B2E1F] transition-all cursor-pointer"
                        title="Inspect Frame"
                      >
                        <img
                          src={frame.image}
                          alt={frame.name}
                          className="h-full w-full object-contain"
                        />
                      </button>

                      <div className="flex-1 overflow-hidden">
                        <div className="text-xs font-bold text-[#4B2E1F] truncate">
                          {frame.name}
                        </div>
                        <div className="text-[10px] text-[#4B2E1F]/70">
                          By {frame.author} • {frame.count} Poses
                        </div>
                        {frame.tags && frame.tags.length > 0 && (
                          <div className="mt-1 flex flex-wrap gap-1">
                            {frame.tags.slice(0, 2).map((t) => (
                              <span
                                key={t}
                                className="text-[9px] font-semibold text-[#4B2E1F] bg-[#FDFFEB] px-1 py-0.2 rounded border border-[#DEE6BD]"
                              >
                                #{t.replace(/^#/, '')}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="mt-2 flex items-center gap-1.5">
                          <button
                            onClick={() => handleApproveFrame(frame)}
                            className="rounded bg-emerald-700 text-white px-2.5 py-1 text-[10px] font-semibold hover:bg-emerald-800 transition-colors cursor-pointer"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleOpenRejectFrame(frame)}
                            className="rounded bg-red-700 text-white px-2.5 py-1 text-[10px] font-semibold hover:bg-red-800 transition-colors cursor-pointer"
                          >
                            Reject
                          </button>
                          <button
                            onClick={() => {
                              setSelectedDetailFrame(frame);
                              setCurrentView('frames');
                            }}
                            className="rounded border border-[#DEE6BD] bg-[#FDFFEB] text-[#4B2E1F] px-2 py-1 text-[10px] font-semibold hover:bg-[#DEE6BD]/40 transition-colors cursor-pointer"
                          >
                            Inspect
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW 2: FRAME MODERATION TABLE (Req 5, 6, 7)              */}
        {/* ========================================================= */}
        {currentView === 'frames' && !selectedDetailFrame && (
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-2xl md:text-3xl font-serif font-normal text-[#4B2E1F]">
                  Frame <span className="italic text-[#4B2E1F]">Moderation</span>
                </h1>
                <p className="text-xs text-[#4B2E1F]/70 mt-0.5">
                  Click any frame preview or inspect icon to view detailed slot coordinates and layout mockups.
                </p>
              </div>

              <div className="text-xs font-medium text-[#4B2E1F]/80 bg-white border border-[#DEE6BD] px-3 py-1.5 rounded-lg shadow-2xs">
                Total: <strong className="text-[#4B2E1F]">{frames.length}</strong> | Pending:{' '}
                <strong className="text-amber-700">{pendingFramesCount}</strong>
              </div>
            </div>

            {/* Table Container */}
            <div className="rounded-xl border border-[#DEE6BD] bg-white shadow-xs overflow-hidden">
              <div className="overflow-x-auto relative">
                <table className="w-full text-left text-xs border-collapse min-w-[700px]">
                  <thead className="bg-[#FDFFEB] text-[#4B2E1F]/70 uppercase tracking-wider border-b border-[#DEE6BD]">
                    <tr>
                      <th className="py-3.5 px-4">Preview</th>
                      <th className="py-3.5 px-4">Frame Name</th>
                      <th className="py-3.5 px-4">Creator</th>
                      <th className="py-3.5 px-4">Style & Poses</th>
                      <th className="py-3.5 px-4">Curation Status</th>
                      <th className="py-3.5 px-4">Visibility</th>
                      {/* Sticky Right Action Column Header (Requirement 6) */}
                      <th className="py-3.5 px-4 text-center sticky right-0 bg-[#FDFFEB] z-10 border-l border-[#DEE6BD] shadow-[-6px_0_12px_rgba(44,33,27,0.03)]">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DEE6BD]">
                    {frames.map((f) => (
                      <tr key={f.id} className="hover:bg-[#DEE6BD]/20 transition-colors group">
                        {/* Frame Preview: Click opens Detail View (Requirement 5) */}
                        <td className="py-3 px-4">
                          <button
                            onClick={() => setSelectedDetailFrame(f)}
                            className="h-14 w-10 shrink-0 object-contain rounded-lg border border-[#DEE6BD] bg-white p-0.5 shadow-2xs hover:ring-2 hover:ring-[#4B2E1F] hover:scale-105 transition-all cursor-pointer block"
                            title="Click to inspect frame details"
                          >
                            <img
                              src={f.image}
                              alt={f.name}
                              className="h-full w-full object-contain"
                            />
                          </button>
                        </td>

                        <td className="py-3 px-4">
                          <button
                            onClick={() => setSelectedDetailFrame(f)}
                            className="font-semibold text-[#4B2E1F] hover:underline transition-colors text-left cursor-pointer"
                          >
                            {f.name}
                          </button>
                          <div className="text-[10px] text-[#4B2E1F]/60 line-clamp-1 max-w-[200px]">{f.desc}</div>
                          {f.tags && f.tags.length > 0 && (
                            <div className="mt-1 flex flex-wrap gap-1">
                              {f.tags.slice(0, 3).map((t) => (
                                <span
                                  key={t}
                                  className="text-[9px] font-semibold text-[#4B2E1F] bg-[#FDFFEB] px-1.5 py-0.2 rounded border border-[#DEE6BD]"
                                >
                                  #{t.replace(/^#/, '')}
                                </span>
                              ))}
                              {f.tags.length > 3 && (
                                <span className="text-[9px] text-[#4B2E1F]/60 font-medium">
                                  +{f.tags.length - 3}
                                </span>
                              )}
                            </div>
                          )}
                        </td>

                        <td className="py-3 px-4 text-[#4B2E1F] font-medium">{f.author}</td>

                        <td className="py-3 px-4">
                          <span className="font-semibold text-[#4B2E1F] bg-[#FDFFEB] px-2 py-0.5 rounded text-[10px] mr-1.5 border border-[#DEE6BD]">
                            {f.category}
                          </span>
                          <span className="text-[#4B2E1F]/70 text-[11px]">{f.count} Poses</span>
                        </td>

                        <td className="py-3 px-4">
                          {f.status === 'approved' && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase px-2.5 py-0.5">
                              Approved
                            </span>
                          )}
                          {f.status === 'pending_review' && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase px-2.5 py-0.5">
                              Pending Review
                            </span>
                          )}
                          {f.status === 'rejected' && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-red-100 text-red-800 text-[10px] font-bold uppercase px-2.5 py-0.5">
                              Rejected
                            </span>
                          )}
                          {f.status === 'archived' && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-[#DEE6BD]/50 text-[#4B2E1F] text-[10px] font-bold uppercase px-2.5 py-0.5">
                              Archived
                            </span>
                          )}
                        </td>

                        <td className="py-3 px-4">
                          <button
                            onClick={() => handleToggleFrameActive(f)}
                            disabled={f.status !== 'approved'}
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase transition-colors ${
                              f.is_active
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                : 'bg-[#FDFFEB] text-[#4B2E1F]/60 border border-[#DEE6BD]'
                            } ${f.status !== 'approved' ? 'opacity-40 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'}`}
                          >
                            {f.is_active ? 'Active' : 'Hidden'}
                          </button>
                        </td>

                        {/* Sticky Right Action Column with Icon-Only Buttons (Requirements 6 & 7) */}
                        <td className="py-3 px-4 text-center sticky right-0 bg-white group-hover:bg-[#FDFFEB] z-10 border-l border-[#DEE6BD] shadow-[-6px_0_12px_rgba(44,33,27,0.03)] transition-colors">
                          <div className="flex items-center justify-center gap-1.5">
                            {/* Inspect Details Icon Button */}
                            <button
                              onClick={() => setSelectedDetailFrame(f)}
                              className="h-7 w-7 rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] text-[#4B2E1F] hover:bg-[#DEE6BD]/50 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                              title="Inspect Frame Details"
                              aria-label="Inspect Frame Details"
                            >
                              <Eye className="h-3.5 w-3.5" />
                            </button>

                            {f.status === 'pending_review' && (
                              <>
                                <button
                                  onClick={() => handleApproveFrame(f)}
                                  className="h-7 w-7 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                                  title="Approve Frame"
                                  aria-label="Approve Frame"
                                >
                                  <Check className="h-3.5 w-3.5" />
                                </button>
                                <button
                                  onClick={() => handleOpenRejectFrame(f)}
                                  className="h-7 w-7 rounded-lg bg-red-700 text-white hover:bg-red-800 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                                  title="Reject Frame"
                                  aria-label="Reject Frame"
                                >
                                  <X className="h-3.5 w-3.5" />
                                </button>
                              </>
                            )}

                            {f.status === 'approved' && (
                              <>
                                <button
                                  onClick={() => handleToggleFrameActive(f)}
                                  className={`h-7 w-7 rounded-lg border flex items-center justify-center transition-colors cursor-pointer shadow-2xs ${
                                    f.is_active
                                      ? 'border-emerald-300 bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                                      : 'border-[#DEE6BD] bg-[#FDFFEB] text-[#4B2E1F]/60 hover:bg-[#DEE6BD]/40'
                                  }`}
                                  title={f.is_active ? 'Hide from Guest' : 'Show on Guest'}
                                  aria-label="Toggle Public Visibility"
                                >
                                  <Power className="h-3.5 w-3.5" />
                                </button>
                                <button
                                  onClick={() => handleArchiveFrame(f)}
                                  className="h-7 w-7 rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] text-[#4B2E1F] hover:bg-[#DEE6BD]/50 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                                  title="Archive Frame"
                                  aria-label="Archive Frame"
                                >
                                  <Archive className="h-3.5 w-3.5" />
                                </button>
                              </>
                            )}

                            {f.status === 'rejected' && f.rejection_reason && (
                              <button
                                onClick={() => setSelectedDetailFrame(f)}
                                className="h-7 w-7 rounded-lg border border-red-200 bg-red-50 text-red-700 hover:bg-red-100 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                                title={`Rejected: ${f.rejection_reason}`}
                                aria-label="View Rejection Reason"
                              >
                                <Info className="h-3.5 w-3.5" />
                              </button>
                            )}

                            {/* Permanent Delete Frame Button */}
                            <button
                              onClick={() => handleDeleteFrame(f)}
                              className="h-7 w-7 rounded-lg border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                              title="Delete Frame Permanently"
                              aria-label="Delete Frame Permanently"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW 3: CREATOR MANAGEMENT TABLE (Req 6 & 7)              */}
        {/* ========================================================= */}
        {currentView === 'creators' && (
          <div className="space-y-5">
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-normal text-[#4B2E1F]">
                Creator <span className="italic text-[#4B2E1F]">Management</span>
              </h1>
              <p className="text-xs text-[#4B2E1F]/70 mt-0.5">
                Oversee independent creator studios, manage publishing permissions, and enforce community standards.
              </p>
            </div>

            <div className="rounded-xl border border-[#DEE6BD] bg-white shadow-xs overflow-hidden">
              <div className="p-4 border-b border-[#DEE6BD] flex items-center justify-between">
                <h2 className="text-sm font-semibold text-[#4B2E1F]">
                  Registered Studios ({creatorUsers.length})
                </h2>
              </div>

              {creatorUsers.length === 0 ? (
                <div className="py-12 text-center text-[#4B2E1F]/60 text-xs italic">
                  No registered creator accounts yet.
                </div>
              ) : (
                <div className="overflow-x-auto relative">
                  <table className="w-full text-left text-xs border-collapse min-w-[700px]">
                    <thead className="bg-[#FDFFEB] text-[#4B2E1F]/70 uppercase tracking-wider border-b border-[#DEE6BD]">
                      <tr>
                        <th className="py-3.5 px-4">Creator / Studio</th>
                        <th className="py-3.5 px-4">Username</th>
                        <th className="py-3.5 px-4">Email</th>
                        <th className="py-3.5 px-4">Frames Uploaded</th>
                        <th className="py-3.5 px-4">Status</th>
                        {/* Sticky Right Action Column Header (Requirement 6) */}
                        <th className="py-3.5 px-4 text-center sticky right-0 bg-[#FDFFEB] z-10 border-l border-[#DEE6BD] shadow-[-6px_0_12px_rgba(44,33,27,0.03)]">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DEE6BD]">
                      {creatorUsers.map((creator) => {
                        const isSuspended = creator.creatorStatus === 'suspended';
                        const creatorFrameCount = frames.filter((f) => f.creator_id === creator.id).length;

                        return (
                          <tr key={creator.id} className="hover:bg-[#DEE6BD]/20 transition-colors group">
                            <td className="py-3.5 px-4 font-semibold text-[#4B2E1F]">
                              <div className="flex items-center gap-2.5">
                                <div className="h-8 w-8 rounded-md bg-[#FDFFEB] text-[#4B2E1F] border border-[#DEE6BD] flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                                  {creator.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                  <div className="font-semibold text-[#4B2E1F]">{creator.name}</div>
                                  <div className="text-[10px] text-[#4B2E1F]/60">
                                    Joined: {new Date(creator.createdAt).toLocaleDateString()}
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td className="py-3.5 px-4 font-mono text-[#4B2E1F]/80">
                              @{creator.username || 'creator'}
                            </td>

                            <td className="py-3.5 px-4 text-[#4B2E1F]/70">{creator.email}</td>

                            <td className="py-3.5 px-4">
                              <span className="font-semibold text-[#4B2E1F] bg-[#FDFFEB] px-2.5 py-1 rounded-md text-[11px] border border-[#DEE6BD]">
                                {creatorFrameCount} {creatorFrameCount === 1 ? 'Frame' : 'Frames'}
                              </span>
                            </td>

                            <td className="py-3.5 px-4">
                              <span
                                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                                  isSuspended
                                    ? 'bg-red-100 text-red-700 border border-red-200'
                                    : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                                }`}
                              >
                                {isSuspended ? 'Suspended' : 'Active'}
                              </span>
                            </td>

                            {/* Sticky Right Action Column with Icon-Only Buttons (Requirements 6 & 7) */}
                            <td className="py-3.5 px-4 text-center sticky right-0 bg-white group-hover:bg-[#FDFFEB] z-10 border-l border-[#DEE6BD] shadow-[-6px_0_12px_rgba(44,33,27,0.03)] transition-colors">
                              <div className="flex items-center justify-center gap-2">
                                <button
                                  onClick={() => handleToggleCreatorStatus(creator)}
                                  className={`h-7 w-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer shadow-2xs ${
                                    isSuspended
                                      ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                                      : 'border border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100'
                                  }`}
                                  title={isSuspended ? 'Activate Creator Account' : 'Suspend Creator Account'}
                                  aria-label={isSuspended ? 'Activate Creator' : 'Suspend Creator'}
                                >
                                  {isSuspended ? (
                                    <UserCheck className="h-3.5 w-3.5" />
                                  ) : (
                                    <UserX className="h-3.5 w-3.5" />
                                  )}
                                </button>

                                <button
                                  onClick={() => setDeleteConfirmCreator(creator)}
                                  className="h-7 w-7 rounded-lg border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                                  title="Delete Creator Account"
                                  aria-label="Delete Creator Account"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW 4: SESSIONS MONITORING                               */}
        {/* ========================================================= */}
        {currentView === 'sessions' && (
          <div className="space-y-5">
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-normal text-[#4B2E1F]">
                Photo Sessions <span className="italic text-[#4B2E1F]">Monitoring</span>
              </h1>
              <p className="text-xs text-[#4B2E1F]/70 mt-0.5">
                Audit and monitor guest photobooth strips generated across all active frames.
              </p>
            </div>

            <div className="rounded-xl border border-[#DEE6BD] bg-white p-5 md:p-6 shadow-xs">
              {guestPhotos.length === 0 ? (
                <div className="py-16 text-center">
                  <ImageIcon className="h-8 w-8 text-[#4B2E1F]/40 mx-auto mb-2" />
                  <p className="text-xs text-[#4B2E1F]/60">No session strips recorded yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  {guestPhotos.map((photo) => (
                    <div
                      key={photo.id}
                      className="overflow-hidden rounded-xl border border-[#DEE6BD] bg-[#FDFFEB] p-2 text-center"
                    >
                      <img
                        src={photo.image_url}
                        alt={photo.frame_name}
                        className="aspect-[3/4] w-full object-contain rounded-lg bg-white mb-2 shadow-2xs"
                      />
                      <div className="text-[11px] font-semibold text-[#4B2E1F] truncate">
                        {photo.frame_name}
                      </div>
                      <div className="text-[9px] text-[#4B2E1F]/60">
                        {photo.filter_applied} • {new Date(photo.created_at).toLocaleTimeString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW 5: AUDIT LOG                                         */}
        {/* ========================================================= */}
        {currentView === 'audit' && (
          <div className="space-y-5">
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-normal text-[#4B2E1F]">
                System <span className="italic text-[#4B2E1F]">Audit Logs</span>
              </h1>
              <p className="text-xs text-[#4B2E1F]/70 mt-0.5">
                Immutable chronological log of all administrative actions, frame curation, and access events.
              </p>
            </div>

            <div className="rounded-xl border border-[#DEE6BD] bg-white p-5 shadow-xs">
              <div className="divide-y divide-[#DEE6BD]">
                {auditLogs.map((log) => (
                  <div key={log.id} className="py-3.5 flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-xs text-[#4B2E1F]">{log.action}</span>
                        <span className="text-[10px] bg-[#FDFFEB] text-[#4B2E1F] border border-[#DEE6BD] font-medium px-1.5 py-0.5 rounded">
                          {log.targetType}
                        </span>
                      </div>
                      <p className="text-xs text-[#4B2E1F]/80 mt-0.5">{log.details}</p>
                      <div className="text-[10px] text-[#4B2E1F]/60 mt-0.5">
                        Admin: {log.adminName}
                      </div>
                    </div>
                    <div className="text-[10px] text-[#4B2E1F]/60 shrink-0 font-mono">
                      {new Date(log.timestamp).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* MODAL REJECTION WITH NOTE FOR FRAME */}
      {rejectModalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 font-sans">
          <div className="relative w-full max-w-md rounded-xl bg-white shadow-xl border border-[#DEE6BD] p-5">
            <h3 className="text-base font-serif text-[#4B2E1F] mb-1">
              {rejectModalData.title}
            </h3>
            <p className="text-xs text-[#4B2E1F]/70 mb-3">
              Write an actionable critique note explaining why the frame does not meet layout guidelines.
            </p>

            <form onSubmit={handleConfirmRejection} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-[#4B2E1F] mb-1">
                  Rejection Reason Note *
                </label>
                <textarea
                  required
                  rows={3}
                  value={rejectionNote}
                  onChange={(e) => setRejectionNote(e.target.value)}
                  placeholder="e.g. Transparent photo cutout area is not properly cleared, or incorrect aspect ratio..."
                  className="w-full rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] p-2.5 text-xs text-[#4B2E1F] focus:border-[#4B2E1F] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setRejectModalData(null)}
                  className="flex-1 rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] py-2 text-xs font-semibold text-[#4B2E1F] hover:bg-[#DEE6BD]/30 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-red-700 py-2 text-xs font-semibold text-white hover:bg-red-800 transition-colors cursor-pointer"
                >
                  Confirm Rejection
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL CONFIRM DELETE CREATOR */}
      {deleteConfirmCreator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 font-sans">
          <div className="relative w-full max-w-md rounded-xl bg-white shadow-xl border border-[#DEE6BD] p-6 text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-red-100 text-red-600 mb-3">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <h3 className="text-base font-serif text-[#4B2E1F] mb-1.5">
              Delete Creator Account?
            </h3>
            <p className="text-xs text-[#4B2E1F]/70 mb-5 leading-relaxed">
              Are you sure you want to permanently delete creator <strong>{deleteConfirmCreator.name}</strong> (@{deleteConfirmCreator.username || deleteConfirmCreator.email})? This action cannot be undone.
            </p>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setDeleteConfirmCreator(null)}
                className="flex-1 rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] py-2 text-xs font-semibold text-[#4B2E1F] hover:bg-[#DEE6BD]/30 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDeleteCreator}
                className="flex-1 rounded-lg bg-red-700 py-2 text-xs font-semibold text-white hover:bg-red-800 transition-colors cursor-pointer"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button to Guest Home (Melayang di Kanan Bawah) */}
      <button
        onClick={() => navigate('/')}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#4B2E1F] hover:bg-[#3D2418] text-[#FDFFEB] px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-bold shadow-xl border-2 border-[#DEE6BD] hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        title="Return to Guest Home"
      >
        <Home className="h-4 w-4 text-[#F4B8A5] group-hover:rotate-12 transition-transform" />
        <span>Guest Home</span>
      </button>
    </div>
  );
};
