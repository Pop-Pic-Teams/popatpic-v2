import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Upload,
  Download,
  Plus,
  ArrowLeft,
  Clock,
  CheckCircle2,
  XCircle,
  Archive,
  AlertTriangle,
  Sparkles,
  Eye,
  Edit3,
  TrendingUp,
  BarChart3,
  Layers,
  Search,
  Grid,
  List,
  Info,
  BookOpen,
  Image as ImageIcon,
  Home,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import {
  getFramesByCreator,
  submitFrameForReview,
  updateCreatorFrame,
  archiveCreatorFrame,
  getLayoutGuideDownload,
  getStandardSlots,
} from '../data/frames';
import type { FrameTemplate, FrameStyle } from '../types/photobooth';
import { CreatorSidebar, type CreatorView } from './CreatorSidebar';
import { HashtagInput } from '../components/HashtagInput';

export const CreatorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  // Guard: Must be logged in Creator with active status
  const isCreator = currentUser?.role === 'Creator';
  const isActive = currentUser?.creatorStatus === 'active';

  // Navigation and sidebar state
  const [currentView, setCurrentView] = useState<CreatorView>('overview');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Data states
  const [frames, setFrames] = useState<FrameTemplate[]>(() =>
    currentUser ? getFramesByCreator(currentUser.id) : []
  );

  // Frame detail inspection view (preserving sidebar)
  const [selectedDetailFrame, setSelectedDetailFrame] = useState<FrameTemplate | null>(null);
  const [showSlotOverlays, setShowSlotOverlays] = useState(true);
  const [showMockupPhotos, setShowMockupPhotos] = useState(false);

  // Filter & Search in frames view
  const [statusFilter, setStatusFilter] = useState<'all' | 'approved' | 'pending_review' | 'rejected' | 'archived'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayMode, setDisplayMode] = useState<'table' | 'grid'>('table');

  // Modal states for upload / revision
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [editingFrame, setEditingFrame] = useState<FrameTemplate | null>(null);

  // Form states
  const [frameName, setFrameName] = useState('');
  const [frameDesc, setFrameDesc] = useState('');
  const [poseCount, setPoseCount] = useState<number>(4);
  const [styleCategory, setStyleCategory] = useState<FrameStyle>('Cute');
  const [frameTags, setFrameTags] = useState<string[]>(['wisuda', 'lucu', 'aesthetic']);
  const [frameImageBase64, setFrameImageBase64] = useState<string | null>(null);

  // Analytics chart state
  const [activeChartPoint, setActiveChartPoint] = useState<number | null>(null);

  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const refreshFrames = () => {
    if (currentUser) {
      const updated = getFramesByCreator(currentUser.id);
      setFrames(updated);
      if (selectedDetailFrame) {
        const refreshedTarget = updated.find((f) => f.id === selectedDetailFrame.id);
        setSelectedDetailFrame(refreshedTarget || null);
      }
    }
  };

  if (!currentUser || !isCreator) {
    return (
      <div className="min-h-screen bg-[#FDFFEB] flex flex-col items-center justify-center p-6 text-center font-sans">
        <div className="h-16 w-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
          <AlertTriangle className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-serif text-[#4B2E1F] mb-2">Restricted Access: Creator Studio Only</h2>
        <p className="text-xs text-[#4B2E1F]/70 max-w-sm mb-6">
          Please sign in with a registered creator account to access the creator studio.
        </p>
        <button
          onClick={() => navigate('/login')}
          className="rounded-lg bg-[#4B2E1F] px-6 py-2.5 text-xs font-semibold text-[#FDFFEB] shadow-xs hover:bg-[#3D2418] cursor-pointer transition-colors"
        >
          Go to Creator Sign In
        </button>
      </div>
    );
  }

  if (!isActive) {
    return (
      <div className="min-h-screen bg-[#FDFFEB] flex flex-col items-center justify-center p-6 text-center font-sans">
        <div className="h-16 w-16 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center mb-4">
          <AlertTriangle className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-serif text-[#4B2E1F] mb-2">Creator Account Suspended</h2>
        <p className="text-xs text-[#4B2E1F]/70 max-w-md mb-6 leading-relaxed">
          Your creator account has been suspended by an Administrator due to a policy violation. You cannot publish or update frames at this time.
        </p>
        <button
          onClick={() => navigate('/')}
          className="rounded-lg bg-[#4B2E1F] px-6 py-2.5 text-xs font-semibold text-[#FDFFEB] shadow-xs hover:bg-[#3D2418] cursor-pointer"
        >
          Return to Home
        </button>
      </div>
    );
  }

  // Handle Download Layout Guidelines Asset
  const handleDownloadTemplateGuide = (poses: number) => {
    const svgData = getLayoutGuideDownload(poses);
    const link = document.createElement('a');
    link.href = svgData;
    link.download = `PopAtPic_Layout_Guide_${poses}_Poses.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setNotification({
      type: 'success',
      message: `${poses}-Pose SVG template guide downloaded. Use this as a reference canvas in Photoshop, Illustrator, or Figma.`,
    });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.includes('png')) {
      alert('Frame asset must be a transparent PNG with cleared photo cutout areas.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFrameImageBase64(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmitFrame = (e: React.FormEvent) => {
    e.preventDefault();
    if (!frameName || !frameImageBase64) {
      alert('Frame name and transparent PNG asset are required.');
      return;
    }

    if (editingFrame) {
      // Update existing rejected or draft frame
      updateCreatorFrame(editingFrame.id, currentUser.id, {
        name: frameName,
        desc: frameDesc,
        count: poseCount,
        category: styleCategory,
        tags: frameTags,
        image: frameImageBase64,
        slots: getStandardSlots(poseCount),
      });
      setNotification({
        type: 'success',
        message: `Frame "${frameName}" updated and resubmitted for Administrator review.`,
      });
    } else {
      // Submit new frame for review (Payload Supabase: tags is text[])
      submitFrameForReview(
        {
          name: frameName,
          desc: frameDesc || 'Custom creative frame designed by Pop@Pic! creator.',
          count: poseCount,
          category: styleCategory,
          tags: frameTags,
          image: frameImageBase64,
          slots: getStandardSlots(poseCount),
        },
        currentUser.id,
        currentUser.name
      );
      setNotification({
        type: 'success',
        message: `Frame "${frameName}" submitted successfully! Current status: Pending Review.`,
      });
    }

    setEditingFrame(null);
    setFrameName('');
    setFrameDesc('');
    setFrameTags(['wisuda', 'lucu', 'aesthetic']);
    setFrameImageBase64(null);
    setShowUploadModal(false);
    refreshFrames();
    setTimeout(() => setNotification(null), 4000);
  };

  const handleEditRejected = (frame: FrameTemplate) => {
    setEditingFrame(frame);
    setFrameName(frame.name);
    setFrameDesc(frame.desc);
    setPoseCount(frame.count);
    setStyleCategory(frame.category);
    setFrameTags(frame.tags && frame.tags.length > 0 ? frame.tags : [frame.category.toLowerCase()]);
    setFrameImageBase64(frame.image);
    setShowUploadModal(true);
  };

  const handleArchive = (frame: FrameTemplate) => {
    if (confirm(`Are you sure you want to archive "${frame.name}"? It will no longer be visible in public guest sessions.`)) {
      archiveCreatorFrame(frame.id, currentUser.id);
      refreshFrames();
      setNotification({
        type: 'success',
        message: `Frame "${frame.name}" archived.`,
      });
      setTimeout(() => setNotification(null), 3000);
    }
  };

  // Stats Counters
  const totalUploaded = frames.length;
  const approvedFrames = frames.filter((f) => f.status === 'approved');
  const pendingFrames = frames.filter((f) => f.status === 'pending_review');
  const rejectedFrames = frames.filter((f) => f.status === 'rejected');
  const archivedFrames = frames.filter((f) => f.status === 'archived');
  const totalCapturesEstimate = approvedFrames.length * 280;

  // Filtered frames list
  const filteredFrames = frames.filter((frame) => {
    const matchesStatus = statusFilter === 'all' || frame.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || frame.category === categoryFilter;
    const cleanQ = searchQuery.trim().toLowerCase().replace(/^#+/, '');
    const matchesSearch =
      cleanQ === '' ||
      frame.name.toLowerCase().includes(cleanQ) ||
      frame.desc.toLowerCase().includes(cleanQ) ||
      (frame.tags && frame.tags.some((t) => t.toLowerCase().replace(/^#+/, '').includes(cleanQ)));
    return matchesStatus && matchesCategory && matchesSearch;
  });

  // Creator Usage Trend Data (Demo)
  const creatorTrendData = [
    { label: 'Mon', uses: 45 },
    { label: 'Tue', uses: 72 },
    { label: 'Wed', uses: 88 },
    { label: 'Thu', uses: 110 },
    { label: 'Fri', uses: 165 },
    { label: 'Sat', uses: 220 },
    { label: 'Sun', uses: 195 },
  ];
  const maxUses = Math.max(...creatorTrendData.map((d) => d.uses));

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
      {/* CREATOR SIDEBAR - Responsive Drawer on Mobile, Collapsible on Desktop */}
      <CreatorSidebar
        currentView={currentView}
        onSelectView={(view) => {
          setSelectedDetailFrame(null);
          setCurrentView(view);
        }}
        framesCount={frames.length}
        pendingCount={pendingFrames.length}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* MAIN CREATOR CONTENT AREA */}
      <main className="w-full flex-1 min-w-0 min-h-screen md:h-screen md:overflow-y-auto p-4 sm:p-6 md:p-8 lg:p-10 pt-18 md:pt-8 pb-24 md:pb-12">
        {notification && (
          <div
            className={`mb-6 flex items-center gap-2 rounded-xl p-4 text-xs font-semibold border shadow-xs animate-in fade-in ${
              notification.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : 'bg-red-50 text-red-800 border-red-200'
            }`}
          >
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            <span>{notification.message}</span>
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW: FRAME DETAIL INSPECTION (Preserving Sidebar)       */}
        {/* ========================================================= */}
        {selectedDetailFrame ? (
          <div className="space-y-6">
            {/* Top Navigation & Actions Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DEE6BD] pb-5">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedDetailFrame(null)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#DEE6BD] bg-white text-[#4B2E1F] transition-colors hover:bg-[#DEE6BD]/30 cursor-pointer shadow-xs"
                  title="Back to Frame Collection"
                  aria-label="Back to Frame Collection"
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
                    ID: <code className="text-[#4B2E1F] font-mono text-[11px] bg-[#DEE6BD]/30 px-1 py-0.5 rounded">{selectedDetailFrame.id}</code> • {selectedDetailFrame.count} Poses • {selectedDetailFrame.category}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                {selectedDetailFrame.status === 'rejected' && (
                  <button
                    onClick={() => handleEditRejected(selectedDetailFrame)}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 px-4 py-2 text-xs font-semibold text-white transition-colors shadow-xs cursor-pointer"
                  >
                    <Edit3 className="h-4 w-4" />
                    <span>Revise & Resubmit</span>
                  </button>
                )}

                {selectedDetailFrame.status !== 'archived' && (
                  <button
                    onClick={() => handleArchive(selectedDetailFrame)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#DEE6BD] bg-white px-3.5 py-2 text-xs font-semibold text-[#4B2E1F] hover:bg-[#DEE6BD]/30 transition-colors cursor-pointer shadow-xs"
                  >
                    <Archive className="h-4 w-4" />
                    <span>Archive Frame</span>
                  </button>
                )}
              </div>
            </div>

            {/* Inspection Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Visual Canvas & Mockup Viewfinder */}
              <div className="lg:col-span-7 flex flex-col rounded-xl border border-[#DEE6BD] bg-white p-5 shadow-xs">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DEE6BD]">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="h-4 w-4 text-[#4B2E1F]" />
                    <span className="text-xs font-semibold text-[#4B2E1F]">
                      Cutout Holes & Visual Quality Check
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
                      {showSlotOverlays ? 'Hide Slots' : 'Show Slots'}
                    </button>

                    <button
                      onClick={() => setShowMockupPhotos(!showMockupPhotos)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border transition-colors cursor-pointer ${
                        showMockupPhotos
                          ? 'bg-[#F4B8A5] text-[#4B2E1F] border-[#DE9784]'
                          : 'bg-[#FDFFEB] text-[#4B2E1F] border-[#DEE6BD]'
                      }`}
                    >
                      {showMockupPhotos ? 'Hide Model Photos' : 'Test Model Photos'}
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
                            className="border-2 border-dashed border-orange-500 bg-orange-500/10 rounded-md flex flex-col items-center justify-center text-center p-1"
                          >
                            <span className="rounded bg-black/75 px-1.5 py-0.5 text-[9px] font-mono font-bold text-white">
                              Slot #{idx + 1}
                            </span>
                            <span className="text-[8px] font-mono text-orange-200 mt-0.5">
                              {s.w} × {s.h}px
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="mt-3 text-center text-[11px] text-stone-500">
                  Canvas Resolution: 4000 × 5900 px (300 DPI Export Standard)
                </div>
              </div>

              {/* Right Column: Specifications & Curation Notes */}
              <div className="lg:col-span-5 space-y-5">
                {/* Specifications Card */}
                <div className="rounded-xl border border-[#DEE6BD] bg-white p-5 shadow-xs">
                  <h3 className="text-base font-serif font-normal text-[#4B2E1F] mb-3">
                    Frame Specifications
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
                      <span className="text-[#4B2E1F]/70">Transparent Cutout Slots</span>
                      <span className="font-semibold text-emerald-700">
                        {selectedDetailFrame.slots?.length || selectedDetailFrame.count} Cutouts
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

                {/* Description & Review Notes */}
                <div className="rounded-xl border border-[#DEE6BD] bg-white p-5 shadow-xs">
                  <h3 className="text-base font-serif font-normal text-[#4B2E1F] mb-2">
                    Description & Concept
                  </h3>
                  <p className="text-xs text-[#4B2E1F]/80 leading-relaxed bg-[#FDFFEB] p-3 rounded-lg border border-[#DEE6BD]">
                    {selectedDetailFrame.desc || 'No description provided.'}
                  </p>

                  {selectedDetailFrame.rejection_reason && (
                    <div className="mt-4 rounded-lg bg-red-50 p-4 border border-red-200 text-xs text-red-800">
                      <div className="flex items-center gap-1.5 font-bold mb-1 text-red-900">
                        <XCircle className="h-4 w-4" />
                        <span>Administrator Feedback Note:</span>
                      </div>
                      <p className="leading-relaxed">{selectedDetailFrame.rejection_reason}</p>
                      <button
                        onClick={() => handleEditRejected(selectedDetailFrame)}
                        className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-red-700 text-white px-3 py-1.5 text-xs font-semibold hover:bg-red-800 transition-colors cursor-pointer"
                      >
                        <Edit3 className="h-3.5 w-3.5" />
                        <span>Open Revision Form</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* ========================================================= */}
        {/* VIEW 1: CREATOR OVERVIEW & STATS                         */}
        {/* ========================================================= */}
        {currentView === 'overview' && !selectedDetailFrame && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-serif font-normal text-[#4B2E1F]">
                  Studio Overview & <span className="italic text-[#4B2E1F]">Analytics</span>
                </h1>
                <p className="text-xs text-[#4B2E1F]/70 mt-1">
                  Welcome back, <strong>{currentUser.name}</strong>. Track your frame submissions, approval rates, and guest engagement.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setEditingFrame(null);
                    setFrameName('');
                    setFrameDesc('');
                    setFrameImageBase64(null);
                    setShowUploadModal(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#4B2E1F] hover:bg-[#3D2418] px-4 py-2 text-xs font-semibold text-[#FDFFEB] shadow-xs transition-colors cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                  <span>Upload Frame</span>
                </button>
              </div>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              <div className="rounded-xl border border-[#DEE6BD] bg-white p-4 shadow-xs">
                <div className="flex items-center justify-between text-[#4B2E1F]/50 mb-1.5">
                  <span className="text-[11px] font-semibold uppercase text-[#4B2E1F]/70">Total Frames</span>
                  <ImageIcon className="h-4 w-4 text-[#4B2E1F]" />
                </div>
                <div className="text-2xl font-serif font-normal text-[#4B2E1F]">{totalUploaded}</div>
                <div className="text-[10px] text-[#4B2E1F]/60 mt-0.5">Designs created</div>
              </div>

              <div className="rounded-xl border border-[#DEE6BD] bg-white p-4 shadow-xs">
                <div className="flex items-center justify-between text-[#4B2E1F]/50 mb-1.5">
                  <span className="text-[11px] font-semibold uppercase text-[#4B2E1F]/70">Live on Booth</span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
                <div className="text-2xl font-serif font-normal text-emerald-700">{approvedFrames.length}</div>
                <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">Approved & active</div>
              </div>

              <div className="rounded-xl border border-[#DEE6BD] bg-white p-4 shadow-xs">
                <div className="flex items-center justify-between text-[#4B2E1F]/50 mb-1.5">
                  <span className="text-[11px] font-semibold uppercase text-[#4B2E1F]/70">In Review</span>
                  <Clock className="h-4 w-4 text-amber-600" />
                </div>
                <div className="text-2xl font-serif font-normal text-amber-700">{pendingFrames.length}</div>
                <div className="text-[10px] text-amber-700 font-semibold mt-0.5">Under curation</div>
              </div>

              <div className="rounded-xl border border-[#DEE6BD] bg-white p-4 shadow-xs">
                <div className="flex items-center justify-between text-[#4B2E1F]/50 mb-1.5">
                  <span className="text-[11px] font-semibold uppercase text-[#4B2E1F]/70">Needs Revision</span>
                  <XCircle className="h-4 w-4 text-red-600" />
                </div>
                <div className="text-2xl font-serif font-normal text-red-700">{rejectedFrames.length}</div>
                <div className="text-[10px] text-red-700 font-semibold mt-0.5">Feedback available</div>
              </div>

              <div className="rounded-xl border border-[#DEE6BD] bg-white p-4 shadow-xs">
                <div className="flex items-center justify-between text-[#4B2E1F]/50 mb-1.5">
                  <span className="text-[11px] font-semibold uppercase text-[#4B2E1F]/70">Photo Strips</span>
                  <Sparkles className="h-4 w-4 text-[#F4B8A5]" />
                </div>
                <div className="text-2xl font-serif font-normal text-[#4B2E1F]">{totalCapturesEstimate}</div>
                <div className="text-[10px] text-emerald-700 font-semibold mt-0.5 flex items-center gap-0.5">
                  <TrendingUp className="h-3 w-3" /> +18% usage
                </div>
              </div>
            </div>

            {/* Performance SVG Chart */}
            <div className="rounded-xl border border-[#DEE6BD] bg-white p-5 md:p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-[#4B2E1F]" />
                      <h2 className="text-base font-serif font-normal text-[#4B2E1F]">
                        Weekly Guest Usages of Your Frames
                      </h2>
                    </div>
                    <span className="text-[11px] text-[#4B2E1F]/70">
                      Total: <strong className="text-[#4B2E1F]">895 captures</strong>
                    </span>
                  </div>
                  <p className="text-xs text-[#4B2E1F]/70 mb-6">
                    Number of guest photobooth strips generated using your approved templates.
                  </p>
                </div>

                {/* SVG Visual Area Chart */}
                <div className="relative w-full h-52 pt-2">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 500 160" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="creatorGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4B2E1F" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#F4B8A5" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="creatorLine" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#4B2E1F" />
                        <stop offset="100%" stopColor="#F4B8A5" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Gridlines */}
                    {[0, 40, 80, 120].map((y) => (
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

                    {(() => {
                      const points = creatorTrendData.map((d, i) => {
                        const x = (i / (creatorTrendData.length - 1)) * 500;
                        const y = 140 - (d.uses / maxUses) * 115;
                        return `${x},${y}`;
                      });
                      const dArea = `M 0,140 L ${points.join(' L ')} L 500,140 Z`;
                      const dLine = `M ${points.join(' L ')}`;

                      return (
                        <>
                          <path d={dArea} fill="url(#creatorGrad)" />
                          <path
                            d={dLine}
                            fill="none"
                            stroke="url(#creatorLine)"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </>
                      );
                    })()}

                    {/* Points */}
                    {creatorTrendData.map((d, i) => {
                      const x = (i / (creatorTrendData.length - 1)) * 500;
                      const y = 140 - (d.uses / maxUses) * 115;
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
                                x={Math.min(Math.max(x - 40, 10), 420)}
                                y={y - 34}
                                width="80"
                                height="26"
                                rx="5"
                                fill="#4B2E1F"
                              />
                              <text
                                x={Math.min(Math.max(x - 40, 10), 420) + 40}
                                y={y - 18}
                                textAnchor="middle"
                                fill="#FDFFEB"
                                fontSize="11"
                                fontWeight="bold"
                                fontFamily="sans-serif"
                              >
                                {d.uses} Strips
                              </text>
                            </g>
                          )}
                        </g>
                      );
                    })}
                  </svg>

                  <div className="flex justify-between text-[11px] text-stone-400 mt-2 px-1">
                    {creatorTrendData.map((d, i) => (
                      <span key={i} className="font-medium">
                        {d.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        {/* ========================================================= */}
        {/* VIEW 2: MY FRAMES COLLECTION (Table & Grid)               */}
        {/* ========================================================= */}
        {currentView === 'frames' && !selectedDetailFrame && (
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-serif font-normal text-[#4B2E1F]">
                  My Frame <span className="italic text-[#4B2E1F]">Collection</span>
                </h1>
                <p className="text-xs text-[#4B2E1F]/70 mt-0.5">
                  Manage your contributed templates, inspect cutout slots, and track admin review statuses.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setEditingFrame(null);
                    setFrameName('');
                    setFrameDesc('');
                    setFrameImageBase64(null);
                    setShowUploadModal(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#4B2E1F] hover:bg-[#3D2418] px-4 py-2 text-xs font-semibold text-[#FDFFEB] shadow-xs transition-colors cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                  <span>Upload Frame</span>
                </button>
              </div>
            </div>

            {/* Filter Bar & View Toggle */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 rounded-xl border border-[#DEE6BD] bg-white p-3 shadow-xs">
              {/* Status Tabs */}
              <div className="flex flex-wrap items-center gap-1">
                {(
                  [
                    { id: 'all', label: 'All Frames' },
                    { id: 'approved', label: 'Approved' },
                    { id: 'pending_review', label: 'Under Review' },
                    { id: 'rejected', label: 'Rejected' },
                    { id: 'archived', label: 'Archived' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setStatusFilter(tab.id)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                      statusFilter === tab.id
                        ? 'bg-[#4B2E1F] text-[#FDFFEB] font-bold'
                        : 'text-[#4B2E1F]/80 hover:bg-[#DEE6BD]/30'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search & Style Filter */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="h-3.5 w-3.5 text-[#4B2E1F]/50 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search frames..."
                    className="pl-8 pr-3 py-1.5 rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] text-xs text-[#4B2E1F] focus:border-[#4B2E1F] focus:outline-none w-40 sm:w-48 placeholder:text-[#4B2E1F]/50"
                  />
                </div>

                {/* Display Mode switcher */}
                <div className="flex rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] p-0.5">
                  <button
                    onClick={() => setDisplayMode('table')}
                    className={`p-1.5 rounded-md transition-colors ${
                      displayMode === 'table' ? 'bg-[#4B2E1F] text-[#FDFFEB] shadow-2xs' : 'text-[#4B2E1F]/60'
                    }`}
                    title="Table View"
                  >
                    <List className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => setDisplayMode('grid')}
                    className={`p-1.5 rounded-md transition-colors ${
                      displayMode === 'grid' ? 'bg-[#4B2E1F] text-[#FDFFEB] shadow-2xs' : 'text-[#4B2E1F]/60'
                    }`}
                    title="Grid View"
                  >
                    <Grid className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Empty State */}
            {filteredFrames.length === 0 ? (
              <div className="py-16 text-center border border-dashed border-[#DEE6BD] rounded-xl bg-white">
                <Sparkles className="h-8 w-8 text-[#4B2E1F]/40 mx-auto mb-2" />
                <h3 className="text-sm font-semibold text-[#4B2E1F]">No frames found</h3>
                <p className="text-xs text-[#4B2E1F]/70 mt-1 max-w-sm mx-auto">
                  {frames.length === 0
                    ? 'Start by uploading your first custom frame using our standard SVG guidelines.'
                    : 'Try adjusting your search query or status filter.'}
                </p>
                {frames.length === 0 && (
                  <button
                    onClick={() => setShowUploadModal(true)}
                    className="mt-4 rounded-lg bg-[#4B2E1F] px-5 py-2 text-xs font-semibold text-[#FDFFEB] shadow-xs hover:bg-[#3D2418] transition-colors cursor-pointer"
                  >
                    Upload Frame Now
                  </button>
                )}
              </div>
            ) : displayMode === 'table' ? (
              /* TABLE VIEW with Sticky Right Action Column */
              <div className="rounded-xl border border-[#DEE6BD] bg-white shadow-xs overflow-hidden">
                <div className="overflow-x-auto relative">
                  <table className="w-full text-left text-xs border-collapse min-w-[650px]">
                    <thead className="bg-[#FDFFEB] text-[#4B2E1F]/70 uppercase tracking-wider border-b border-[#DEE6BD]">
                      <tr>
                        <th className="py-3.5 px-4">Preview</th>
                        <th className="py-3.5 px-4">Frame Name</th>
                        <th className="py-3.5 px-4">Pose Layout</th>
                        <th className="py-3.5 px-4">Category</th>
                        <th className="py-3.5 px-4">Status</th>
                        <th className="py-3.5 px-4">Uploaded</th>
                        {/* Sticky Action Column Header */}
                        <th className="py-3.5 px-4 text-center sticky right-0 bg-[#FDFFEB] z-10 border-l border-[#DEE6BD] shadow-[-6px_0_12px_rgba(44,33,27,0.03)]">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DEE6BD]">
                      {filteredFrames.map((frame) => (
                        <tr key={frame.id} className="hover:bg-[#DEE6BD]/20 transition-colors group">
                          <td className="py-3 px-4">
                            <button
                              onClick={() => setSelectedDetailFrame(frame)}
                              className="h-14 w-10 shrink-0 object-contain rounded-lg border border-[#DEE6BD] bg-white p-0.5 shadow-2xs hover:ring-2 hover:ring-[#4B2E1F] hover:scale-105 transition-all cursor-pointer block"
                              title="Inspect frame details"
                            >
                              <img
                                src={frame.image}
                                alt={frame.name}
                                className="h-full w-full object-contain"
                              />
                            </button>
                          </td>

                          <td className="py-3 px-4">
                            <button
                              onClick={() => setSelectedDetailFrame(frame)}
                              className="font-semibold text-[#4B2E1F] hover:underline transition-colors text-left cursor-pointer"
                            >
                              {frame.name}
                            </button>
                            <div className="text-[10px] text-[#4B2E1F]/60 line-clamp-1 max-w-[220px]">
                              {frame.desc}
                            </div>
                            {frame.tags && frame.tags.length > 0 && (
                              <div className="mt-1 flex flex-wrap gap-1">
                                {frame.tags.slice(0, 3).map((t) => (
                                  <span
                                    key={t}
                                    className="text-[9px] font-semibold text-[#4B2E1F] bg-[#FDFFEB] px-1.5 py-0.5 rounded border border-[#DEE6BD]"
                                  >
                                    #{t.replace(/^#/, '')}
                                  </span>
                                ))}
                                {frame.tags.length > 3 && (
                                  <span className="text-[9px] text-[#4B2E1F]/60 font-medium">
                                    +{frame.tags.length - 3}
                                  </span>
                                )}
                              </div>
                            )}
                          </td>

                          <td className="py-3 px-4 font-semibold text-[#4B2E1F]">
                            {frame.count} {frame.count === 1 ? 'Pose' : 'Poses'}
                          </td>

                          <td className="py-3 px-4">
                            <span className="font-semibold text-[#4B2E1F] bg-[#FDFFEB] px-2 py-0.5 rounded text-[10px] border border-[#DEE6BD]">
                              {frame.category}
                            </span>
                          </td>

                          <td className="py-3 px-4">
                            {frame.status === 'approved' && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase px-2.5 py-0.5">
                                Approved
                              </span>
                            )}
                            {frame.status === 'pending_review' && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase px-2.5 py-0.5">
                                Under Review
                              </span>
                            )}
                            {frame.status === 'rejected' && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-red-100 text-red-800 text-[10px] font-bold uppercase px-2.5 py-0.5">
                                Rejected
                              </span>
                            )}
                            {frame.status === 'archived' && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-[#DEE6BD]/50 text-[#4B2E1F] text-[10px] font-bold uppercase px-2.5 py-0.5">
                                Archived
                              </span>
                            )}
                          </td>

                          <td className="py-3 px-4 text-[#4B2E1F]/70 font-mono text-[11px]">
                            {new Date(frame.created_at).toLocaleDateString()}
                          </td>

                          {/* Sticky Right Action Column */}
                          <td className="py-3 px-4 text-center sticky right-0 bg-white group-hover:bg-[#FDFFEB] z-10 border-l border-[#DEE6BD] shadow-[-6px_0_12px_rgba(44,33,27,0.03)] transition-colors">
                            <div className="flex items-center justify-center gap-1.5">
                              {/* Inspect Details */}
                              <button
                                onClick={() => setSelectedDetailFrame(frame)}
                                className="h-7 w-7 rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] text-[#4B2E1F] hover:bg-[#DEE6BD]/50 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                                title="Inspect Frame Details"
                                aria-label="Inspect Frame"
                              >
                                <Eye className="h-3.5 w-3.5" />
                              </button>

                              {/* Edit / Revise if rejected */}
                              {frame.status === 'rejected' && (
                                <button
                                  onClick={() => handleEditRejected(frame)}
                                  className="h-7 w-7 rounded-lg bg-amber-600 text-white hover:bg-amber-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                                  title="Revise Rejected Frame"
                                  aria-label="Revise Frame"
                                >
                                  <Edit3 className="h-3.5 w-3.5" />
                                </button>
                              )}

                              {/* Archive if approved */}
                              {frame.status === 'approved' && (
                                <button
                                  onClick={() => handleArchive(frame)}
                                  className="h-7 w-7 rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] text-[#4B2E1F] hover:bg-[#DEE6BD]/50 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                                  title="Archive Frame"
                                  aria-label="Archive Frame"
                                >
                                  <Archive className="h-3.5 w-3.5" />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              /* GRID VIEW */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredFrames.map((frame) => (
                  <div
                    key={frame.id}
                    className="flex flex-col justify-between rounded-xl border border-[#DEE6BD] bg-white p-4 transition-all hover:border-[#4B2E1F] hover:shadow-md"
                  >
                    <div>
                      {/* Frame image preview */}
                      <button
                        onClick={() => setSelectedDetailFrame(frame)}
                        className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#FDFFEB] border border-[#DEE6BD] p-2 flex items-center justify-center mb-3 cursor-pointer group/img block"
                      >
                        <img
                          src={frame.image}
                          alt={frame.name}
                          className="h-full w-full object-contain group-hover/img:scale-105 transition-transform"
                        />
                        <span className="absolute top-2 right-2 rounded bg-white/95 px-2 py-0.5 text-[10px] font-semibold text-[#4B2E1F] border border-[#DEE6BD]">
                          {frame.count} Poses
                        </span>
                      </button>

                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-[#4B2E1F] truncate">{frame.name}</h3>
                        <span className="text-[10px] font-medium text-[#4B2E1F] bg-[#FDFFEB] px-2 py-0.5 rounded border border-[#DEE6BD]">
                          {frame.category}
                        </span>
                      </div>
                      <p className="text-xs text-[#4B2E1F]/70 line-clamp-2 leading-relaxed">{frame.desc}</p>

                      {frame.rejection_reason && (
                        <div className="mt-2.5 rounded-lg bg-red-50 p-2.5 border border-red-200 text-[11px] text-red-800">
                          <strong>Critique:</strong> {frame.rejection_reason}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#DEE6BD] flex items-center justify-between">
                      <span className="text-[10px] text-[#4B2E1F]/60">
                        {new Date(frame.created_at).toLocaleDateString()}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setSelectedDetailFrame(frame)}
                          className="h-7 w-7 rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] text-[#4B2E1F] hover:bg-[#DEE6BD]/50 flex items-center justify-center transition-colors cursor-pointer"
                          title="Inspect Frame"
                        >
                          <Eye className="h-3.5 w-3.5" />
                        </button>
                        {frame.status === 'rejected' && (
                          <button
                            onClick={() => handleEditRejected(frame)}
                            className="h-7 w-7 rounded-lg bg-amber-600 text-white hover:bg-amber-700 flex items-center justify-center transition-colors cursor-pointer"
                            title="Revise Frame"
                          >
                            <Edit3 className="h-3.5 w-3.5" />
                          </button>
                        )}
                        {frame.status === 'approved' && (
                          <button
                            onClick={() => handleArchive(frame)}
                            className="h-7 w-7 rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] text-[#4B2E1F] hover:bg-[#DEE6BD]/50 flex items-center justify-center transition-colors cursor-pointer"
                            title="Archive Frame"
                          >
                            <Archive className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW 3: DEDICATED UPLOAD VIEW                            */}
        {/* ========================================================= */}
        {currentView === 'upload' && !selectedDetailFrame && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-normal text-[#4B2E1F]">
                Upload <span className="italic text-[#4B2E1F]">New Frame</span>
              </h1>
              <p className="text-xs text-[#4B2E1F]/70 mt-1">
                Contribute custom designs. All submissions are verified for 4000 × 5900 px resolution and transparent cutouts.
              </p>
            </div>

            <div className="rounded-xl border border-[#DEE6BD] bg-white p-6 shadow-xs">
              <form onSubmit={handleSubmitFrame} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4B2E1F] mb-1">
                    Frame Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={frameName}
                    onChange={(e) => setFrameName(e.target.value)}
                    placeholder="e.g. Retro Cyber Wave 2026"
                    className="w-full rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] px-3.5 py-2.5 text-xs text-[#4B2E1F] focus:border-[#4B2E1F] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4B2E1F] mb-1">
                    Description & Theme Concept
                  </label>
                  <textarea
                    rows={2}
                    value={frameDesc}
                    onChange={(e) => setFrameDesc(e.target.value)}
                    placeholder="Describe color palette, aesthetic theme, or celebration context..."
                    className="w-full rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] p-3 text-xs text-[#4B2E1F] focus:border-[#4B2E1F] focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#4B2E1F] mb-1">
                      Pose Format *
                    </label>
                    <select
                      value={poseCount}
                      onChange={(e) => setPoseCount(Number(e.target.value))}
                      className="w-full rounded-lg border border-[#DEE6BD] px-3 py-2 text-xs text-[#4B2E1F] focus:border-[#4B2E1F] focus:outline-none bg-[#FDFFEB] transition-colors"
                    >
                      <option value={1}>1 Pose (Solo Cut)</option>
                      <option value={2}>2 Poses (Duo Strip)</option>
                      <option value={4}>4 Poses (Classic Strip)</option>
                      <option value={6}>6 Poses (Montage Grid)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4B2E1F] mb-1">
                      Style / Category *
                    </label>
                    <select
                      value={styleCategory}
                      onChange={(e) => setStyleCategory(e.target.value as FrameStyle)}
                      className="w-full rounded-lg border border-[#DEE6BD] px-3 py-2 text-xs text-[#4B2E1F] focus:border-[#4B2E1F] focus:outline-none bg-[#FDFFEB] transition-colors"
                    >
                      <option value="Cute">Cute</option>
                      <option value="Vintage">Vintage</option>
                      <option value="Retro">Retro</option>
                      <option value="Minimalist">Minimalist</option>
                      <option value="Formal">Formal</option>
                    </select>
                  </div>
                </div>

                {/* Hashtag Input Component - Tepat di Bawah Dropdown Style */}
                <div>
                  <HashtagInput
                    tags={frameTags}
                    onChange={setFrameTags}
                    label="Hashtags / Kata Kunci Bebas"
                    placeholder="Ketik hashtag lalu tekan koma, spasi, atau Enter (cth: wisuda, lucu, vintage)..."
                    helperText="Creator bebas menginput banyak hashtag. Teks otomatis diubah menjadi visual chip (kotak kecil) dan dikirim ke payload Supabase sebagai array text[]."
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4B2E1F] mb-1">
                    Frame PNG File (Transparent Alpha Channel) *
                  </label>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-[#DEE6BD] p-5 hover:border-[#4B2E1F] transition-colors bg-[#FDFFEB]">
                    {frameImageBase64 ? (
                      <div className="relative aspect-[3/4] w-32 overflow-hidden rounded-md border border-[#DEE6BD] bg-white p-1">
                        <img
                          src={frameImageBase64}
                          alt="Preview Frame"
                          className="h-full w-full object-contain"
                        />
                        <button
                          type="button"
                          onClick={() => setFrameImageBase64(null)}
                          className="absolute top-1 right-1 rounded-full bg-[#4B2E1F] p-1 text-white text-[10px] cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center cursor-pointer">
                        <Upload className="h-7 w-7 text-[#4B2E1F] mb-1.5" />
                        <span className="text-xs font-semibold text-[#4B2E1F]">
                          Select Transparent PNG File
                        </span>
                        <span className="text-[10px] text-[#4B2E1F]/60 mt-0.5">
                          Standard resolution: 4000 × 5900 px
                        </span>
                        <input
                          type="file"
                          accept="image/png"
                          required
                          onChange={handleImageFileChange}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#4B2E1F] hover:bg-[#3D2418] py-3 text-xs font-semibold text-[#FDFFEB] shadow-xs transition-colors cursor-pointer"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Submit Frame for Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW 4: DESIGN GUIDELINES & SPECIFICATIONS               */}
        {/* ========================================================= */}
        {currentView === 'guidelines' && !selectedDetailFrame && (
          <div className="max-w-4xl space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-normal text-[#4B2E1F]">
                Creator Design <span className="italic text-[#4B2E1F]">Guidelines</span>
              </h1>
              <p className="text-xs text-[#4B2E1F]/70 mt-1">
                Quality standards, layout kits, and format criteria to ensure speedy approval by the curation team.
              </p>
            </div>

            {/* Standard Layout Kits Card */}
            <div className="rounded-xl border border-[#DEE6BD] bg-white p-5 md:p-6 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  <h2 className="text-base font-serif font-normal text-[#4B2E1F] mb-1">
                    Standard Layout Kits
                  </h2>
                  <p className="text-xs text-[#4B2E1F]/70">
                    Official 4000 × 5900 px vector SVG templates with precision cutouts. Use these starter canvas templates in Figma, Photoshop, or Illustrator.
                  </p>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FDFFEB] text-[#4B2E1F] border border-[#DEE6BD] w-fit shrink-0">
                  BR-014 Standard
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { poses: 1, name: 'Solo Portrait', desc: 'Single centered full frame' },
                  { poses: 2, name: 'Duo Cut Strip', desc: 'Dual vertical couple layout' },
                  { poses: 4, name: 'Classic Strip', desc: 'Standard 4-cut photobooth strip' },
                  { poses: 6, name: 'Montage Grid', desc: 'Dynamic 6-cut party grid' },
                ].map((item) => (
                  <div
                    key={item.poses}
                    className="flex flex-col justify-between rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] p-3 hover:border-[#4B2E1F] transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[#4B2E1F] bg-white px-2 py-0.5 rounded border border-[#DEE6BD]">
                          {item.poses} Pose
                        </span>
                        <span className="text-[10px] text-[#4B2E1F]/60 font-mono">300 DPI</span>
                      </div>
                      <p className="text-xs font-semibold text-[#4B2E1F]">{item.name}</p>
                      <p className="text-[11px] text-[#4B2E1F]/70 mt-0.5">{item.desc}</p>
                    </div>

                    <button
                      onClick={() => handleDownloadTemplateGuide(item.poses)}
                      className="mt-3 w-full flex items-center justify-center gap-1.5 rounded-lg border border-[#DEE6BD] bg-white py-2 text-xs font-semibold text-[#4B2E1F] hover:bg-[#DEE6BD]/30 transition-colors cursor-pointer shadow-2xs"
                    >
                      <Download className="h-3.5 w-3.5 text-[#4B2E1F]" />
                      <span>Download SVG</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-[#DEE6BD] bg-white p-5 shadow-xs">
                <div className="flex items-center gap-2 font-semibold text-sm text-[#4B2E1F] mb-2">
                  <Layers className="h-4 w-4 text-[#4B2E1F]" />
                  <span>1. Resolution & File Format</span>
                </div>
                <p className="text-xs text-[#4B2E1F]/80 leading-relaxed">
                  All frames must be uploaded as <strong>PNG files with transparent alpha cutouts</strong> at exact canvas dimensions of <strong>4000 × 5900 pixels</strong> (300 DPI high-resolution strip export). JPEG or non-transparent files cannot be approved.
                </p>
              </div>

              <div className="rounded-xl border border-[#DEE6BD] bg-white p-5 shadow-xs">
                <div className="flex items-center gap-2 font-semibold text-sm text-[#4B2E1F] mb-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>2. Cutout Holes & Alignment</span>
                </div>
                <p className="text-xs text-[#4B2E1F]/80 leading-relaxed">
                  Photo slots must be 100% transparent. Do not leave solid white rectangles where guest photos appear. Use our downloadable SVG template guides as reference layers in Figma or Photoshop.
                </p>
              </div>

              <div className="rounded-xl border border-[#DEE6BD] bg-white p-5 shadow-xs">
                <div className="flex items-center gap-2 font-semibold text-sm text-[#4B2E1F] mb-2">
                  <Info className="h-4 w-4 text-[#4B2E1F]" />
                  <span>3. Community & Curation Standards</span>
                </div>
                <p className="text-xs text-[#4B2E1F]/80 leading-relaxed">
                  Artwork must be original or appropriately licensed. Avoid heavy watermarks over photo areas. Appropriate categories include Cute, Vintage, Retro, Minimalist, and Formal.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* QUICK UPLOAD / REVISION MODAL */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 font-sans">
          <div className="relative w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-xl border border-[#DEE6BD] max-h-[92vh] flex flex-col">
            <div className="flex items-center justify-between border-b border-[#DEE6BD] px-6 py-4 bg-[#FDFFEB]">
              <div>
                <h3 className="text-xl font-serif font-normal text-[#4B2E1F]">
                  {editingFrame ? 'Revise Frame' : 'Upload New Frame'}
                </h3>
                <p className="text-[11px] text-[#4B2E1F]/70">
                  Frames will be reviewed by the Admin team before appearing in public guest sessions
                </p>
              </div>
              <button
                onClick={() => setShowUploadModal(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#4B2E1F]/60 hover:bg-[#DEE6BD]/40 hover:text-[#4B2E1F] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitFrame} className="flex-1 overflow-y-auto p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#4B2E1F] mb-1">
                  Frame Name *
                </label>
                <input
                  type="text"
                  required
                  value={frameName}
                  onChange={(e) => setFrameName(e.target.value)}
                  placeholder="e.g. Retro 90s Nostalgia"
                  className="w-full rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] px-3.5 py-2.5 text-xs text-[#4B2E1F] focus:border-[#4B2E1F] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4B2E1F] mb-1">
                  Short Description
                </label>
                <textarea
                  rows={2}
                  value={frameDesc}
                  onChange={(e) => setFrameDesc(e.target.value)}
                  placeholder="Describe aesthetic vibe or celebratory theme..."
                  className="w-full rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] p-3 text-xs text-[#4B2E1F] focus:border-[#4B2E1F] focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#4B2E1F] mb-1">
                    Pose Count *
                  </label>
                  <select
                    value={poseCount}
                    onChange={(e) => setPoseCount(Number(e.target.value))}
                    className="w-full rounded-lg border border-[#DEE6BD] px-3 py-2 text-xs text-[#4B2E1F] focus:border-[#4B2E1F] focus:outline-none bg-[#FDFFEB] transition-colors"
                  >
                    <option value={1}>1 Pose (Solo)</option>
                    <option value={2}>2 Poses (Duo)</option>
                    <option value={4}>4 Poses (Strip)</option>
                    <option value={6}>6 Poses (Grid)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4B2E1F] mb-1">
                    Style / Category *
                  </label>
                  <select
                    value={styleCategory}
                    onChange={(e) => setStyleCategory(e.target.value as FrameStyle)}
                    className="w-full rounded-lg border border-[#DEE6BD] px-3 py-2 text-xs text-[#4B2E1F] focus:border-[#4B2E1F] focus:outline-none bg-[#FDFFEB] transition-colors"
                  >
                    <option value="Cute">Cute</option>
                    <option value="Vintage">Vintage</option>
                    <option value="Minimalist">Minimalist</option>
                    <option value="Formal">Formal</option>
                    <option value="Retro">Retro</option>
                  </select>
                </div>
              </div>

              {/* Hashtag Input Component - Tepat di Bawah Dropdown Style */}
              <div>
                <HashtagInput
                  tags={frameTags}
                  onChange={setFrameTags}
                  label="Hashtags / Kata Kunci Bebas"
                  placeholder="Ketik hashtag lalu tekan koma atau spasi (cth: wisuda, lucu, pastel)..."
                  helperText="Teks otomatis diubah menjadi kotak kecil (visual chips) dan dimasukkan ke array tags."
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4B2E1F] mb-1">
                  Frame PNG File (Transparent Alpha Channel) *
                </label>
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-[#DEE6BD] p-4 hover:border-[#4B2E1F] transition-colors bg-[#FDFFEB]">
                  {frameImageBase64 ? (
                    <div className="relative aspect-[3/4] w-28 overflow-hidden rounded-md border border-[#DEE6BD] bg-white">
                      <img
                        src={frameImageBase64}
                        alt="Preview Frame"
                        className="h-full w-full object-contain"
                      />
                      <button
                        type="button"
                        onClick={() => setFrameImageBase64(null)}
                        className="absolute top-1 right-1 rounded-full bg-[#4B2E1F] p-1 text-white text-[10px] cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center cursor-pointer">
                      <Upload className="h-6 w-6 text-[#4B2E1F] mb-1" />
                      <span className="text-xs font-semibold text-[#4B2E1F]">
                        Select Transparent PNG File
                      </span>
                      <span className="text-[10px] text-[#4B2E1F]/60 mt-0.5">
                        Standard dimensions: 4000 × 5900 px
                      </span>
                      <input
                        type="file"
                        accept="image/png"
                        required={!editingFrame}
                        onChange={handleImageFileChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#4B2E1F] hover:bg-[#3D2418] py-2.5 text-xs font-semibold text-[#FDFFEB] shadow-xs transition-colors cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                  <span>
                    {editingFrame ? 'Update Frame' : 'Submit for Admin Review'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating Button to Guest Home (Melayang di Kanan Bawah) */}
      <button
        onClick={() => navigate('/')}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#4B2E1F] hover:bg-[#3D2418] text-[#FDFFEB] px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-bold shadow-xl border-2 border-[#DEE6BD] hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        title="Kembali ke Halaman Utama Guest"
      >
        <Home className="h-4 w-4 text-[#F4B8A5] group-hover:rotate-12 transition-transform" />
        <span>Halaman Utama Guest</span>
      </button>
    </div>
  );
};
