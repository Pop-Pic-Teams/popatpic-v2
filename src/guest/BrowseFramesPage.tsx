'use client';

import React, { useState, useMemo } from 'react';
import { useNavigate } from '../utils/navigation';
import {
  Search,
  Sparkles,
  Camera,
  Layers,
  X,
  ChevronDown,
  Plus,
  Hash,
  SlidersHorizontal,
} from 'lucide-react';
import { getApprovedActiveFrames } from '../data/frames';
import type { FrameTemplate, FrameStyle } from '../types/photobooth';
import { PhotoSessionStepper } from '../components/PhotoSessionStepper';

export const BrowseFramesPage: React.FC = () => {
  const navigate = useNavigate();

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPose, setSelectedPose] = useState<number | 'All'>('All');
  // Style: Pengelompokan gaya yang ditentukan oleh Admin
  const [selectedStyle, setSelectedStyle] = useState<FrameStyle | 'All'>('All');
  // Tags: Tag / hashtag bebas yang ditambahkan oleh Kreator
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [customTagInput, setCustomTagInput] = useState('');
  const [inspectingFrame, setInspectingFrame] = useState<FrameTemplate | null>(null);

  // All approved & active frames
  const allFrames = getApprovedActiveFrames();

  // Style categories defined by Admin
  const ADMIN_STYLES: { id: FrameStyle | 'All'; label: string }[] = [
    { id: 'All', label: 'Semua Style' },
    { id: 'Cute', label: 'Cute' },
    { id: 'Vintage', label: 'Vintage' },
    { id: 'Retro', label: 'Retro' },
    { id: 'Minimalist', label: 'Minimalist' },
    { id: 'Formal', label: 'Formal' },
  ];

  // Extract all unique creator-added tags across all available frames
  const allCreatorTags = useMemo(() => {
    const tagSet = new Set<string>();
    allFrames.forEach((frame) => {
      (frame.tags || []).forEach((t) => {
        const clean = t.trim().replace(/^#/, '');
        if (clean) tagSet.add(clean);
      });
    });
    return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
  }, [allFrames]);

  // Toggle creator tag in active filter
  const toggleTag = (tag: string) => {
    const clean = tag.trim().replace(/^#/, '');
    if (!clean) return;
    setSelectedTags((prev) => {
      const exists = prev.some((t) => t.toLowerCase() === clean.toLowerCase());
      if (exists) {
        return prev.filter((t) => t.toLowerCase() !== clean.toLowerCase());
      } else {
        return [...prev, clean];
      }
    });
  };

  // Add custom tag from user input
  const handleAddCustomTag = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const clean = customTagInput.trim().replace(/^#/, '');
    if (!clean) return;
    if (!selectedTags.some((t) => t.toLowerCase() === clean.toLowerCase())) {
      setSelectedTags((prev) => [...prev, clean]);
    }
    setCustomTagInput('');
  };

  // Remove specific tag
  const removeTag = (tagToRemove: string) => {
    setSelectedTags((prev) => prev.filter((t) => t.toLowerCase() !== tagToRemove.toLowerCase()));
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedPose('All');
    setSelectedStyle('All');
    setSelectedTags([]);
    setCustomTagInput('');
  };

  // Filter frames: Combining Search Query, Pose, Admin Style, and Creator Tags
  const filteredFrames = useMemo(() => {
    return allFrames.filter((frame) => {
      const q = searchQuery.toLowerCase().trim();
      const frameTags = frame.tags || [];

      // Search matches name, author, desc, style category, or creator tags
      const matchesSearch =
        q === '' ||
        frame.name.toLowerCase().includes(q) ||
        frame.author.toLowerCase().includes(q) ||
        frame.desc.toLowerCase().includes(q) ||
        frame.category.toLowerCase().includes(q) ||
        frameTags.some((t) => t.toLowerCase().includes(q.replace(/^#/, '')));

      // Pose match
      const matchesPose = selectedPose === 'All' || frame.count === selectedPose;

      // Style match: Pengelompokan gaya yang ditentukan oleh Admin ('Cute', 'Vintage', 'Retro', 'Minimalist', 'Formal')
      const matchesStyle = selectedStyle === 'All' || frame.category === selectedStyle;

      // Tag match: Tag bebas yang ditambahkan oleh Kreator
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((selected) => {
          const selectedClean = selected.toLowerCase().replace(/^#/, '');
          return frameTags.some((ft) => ft.toLowerCase().replace(/^#/, '') === selectedClean);
        });

      return matchesSearch && matchesPose && matchesStyle && matchesTags;
    });
  }, [allFrames, searchQuery, selectedPose, selectedStyle, selectedTags]);

  // Handle direct "Pakai Frame" -> directly enters Phase 2 (Take Photos)
  const handleUseFrame = (frame: FrameTemplate) => {
    navigate('/booth', {
      state: {
        frameCount: frame.count,
        frameImage: frame.image,
        slots: frame.slots,
        figmaWidth: frame.figmaWidth,
        frameName: frame.name,
        creatorName: frame.author,
        currentPhase: 2, // Direct to Phase 2: Take Photos
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#D2DDEA] text-[#4B2E1F] font-sans pt-18 pb-20">
      {/* 4-Step Path Stepper (1. Choose Frame, 2. Take Photos, 3. Add Filters, 4. Download & Share) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-1 pb-0">
        <PhotoSessionStepper currentStep={1} />
      </div>

      {/* Top Header Banner (Dikembalikan ke ukuran semula seperti sebelumnya) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-2 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#B8C8DB] pb-6">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-serif tracking-tight text-[#4B2E1F]">
              Galeri Frame <span className="italic text-[#F4B8A5] font-serif">Kreator</span>
            </h1>
            <p className="mt-2 text-sm text-[#4B2E1F]/75 leading-relaxed">
              Jelajahi karya desain frame dengan berbagai tema tag & hashtag. Klik kartu frame untuk melihat detail lengkap, atau klik ikon kamera untuk langsung mulai sesi pemotretan!
            </p>
          </div>

          <div className="shrink-0 self-start sm:pt-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FDFFEB] border border-[#DEE6BD] text-xs sm:text-sm font-semibold text-[#4B2E1F] shadow-2xs">
              <span className="h-2.5 w-2.5 rounded-full bg-[#DEE6BD] border border-[#C5D09D]" />
              <span>{filteredFrames.length} Frames Tersedia</span>
            </span>
          </div>
        </div>

        {/* SEARCH & CREATOR TAG FILTER BAR (Ivory Canvas Box) */}
        <div className="mt-6 bg-[#FDFFEB] p-4 sm:p-5 rounded-xl border border-[#DEE6BD] shadow-xs space-y-4">
          {/* Row 1: Search Input, Pose Dropdown, Creator Tag Dropdown, & Custom Tag Input */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#4B2E1F]/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari frame, kreator, deskripsi, atau hashtag #cute..."
                className="w-full pl-10 pr-9 py-2.5 rounded-lg border border-[#DEE6BD] bg-white text-xs text-[#4B2E1F] placeholder:text-[#4B2E1F]/45 focus:outline-none focus:ring-1 focus:ring-[#4B2E1F] focus:border-[#4B2E1F] transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4B2E1F]/50 hover:text-[#4B2E1F]"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Pose Dropdown Filter */}
            <div className="relative min-w-[140px]">
              <label htmlFor="pose-dropdown" className="sr-only">Pilih Pose</label>
              <div className="relative">
                <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#4B2E1F]/60">
                  <Layers className="h-3.5 w-3.5" />
                </div>
                <select
                  id="pose-dropdown"
                  value={selectedPose}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSelectedPose(val === 'All' ? 'All' : Number(val));
                  }}
                  className="w-full appearance-none rounded-lg border border-[#DEE6BD] bg-white py-2.5 pl-8 pr-8 text-xs font-semibold text-[#4B2E1F] hover:border-[#4B2E1F] focus:outline-none focus:ring-1 focus:ring-[#4B2E1F] transition-all cursor-pointer shadow-2xs"
                >
                  <option value="All">Semua Pose</option>
                  <option value="1">1 Pose</option>
                  <option value="2">2 Poses</option>
                  <option value="4">4 Poses</option>
                  <option value="6">6 Poses</option>
                </select>
                <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#4B2E1F]/60">
                  <ChevronDown className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>

            {/* Creator Tag Dropdown (Tag yang Ditambahkan oleh Kreator) */}
            <div className="relative min-w-[160px]">
              <label htmlFor="creator-tag-dropdown" className="sr-only">Tag Kreator</label>
              <div className="relative">
                <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#4B2E1F]/60">
                  <Hash className="h-3.5 w-3.5" />
                </div>
                <select
                  id="creator-tag-dropdown"
                  value=""
                  onChange={(e) => {
                    if (e.target.value) {
                      toggleTag(e.target.value);
                    }
                  }}
                  className="w-full appearance-none rounded-lg border border-[#DEE6BD] bg-white py-2.5 pl-8 pr-8 text-xs font-semibold text-[#4B2E1F] hover:border-[#4B2E1F] focus:outline-none focus:ring-1 focus:ring-[#4B2E1F] transition-all cursor-pointer shadow-2xs"
                >
                  <option value="">Pilih Tag Kreator</option>
                  {allCreatorTags.map((tag) => (
                    <option key={tag} value={tag}>
                      #{tag}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#4B2E1F]/60">
                  <ChevronDown className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>

            {/* Custom Tag Input Form (Tag Ditambahkan oleh Kreator/User) */}
            <form onSubmit={handleAddCustomTag} className="flex items-center gap-1.5">
              <div className="relative flex-1 sm:w-44">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4B2E1F]/50 text-xs font-bold">#</span>
                <input
                  type="text"
                  value={customTagInput}
                  onChange={(e) => setCustomTagInput(e.target.value)}
                  placeholder="Ketik tag kreator..."
                  className="w-full pl-7 pr-3 py-2.5 rounded-lg border border-[#DEE6BD] bg-white text-xs text-[#4B2E1F] placeholder:text-[#4B2E1F]/45 focus:outline-none focus:ring-1 focus:ring-[#4B2E1F] transition-all shadow-2xs"
                />
              </div>
              <button
                type="submit"
                disabled={!customTagInput.trim()}
                className="flex items-center justify-center gap-1 px-3 py-2.5 rounded-lg bg-[#4B2E1F] hover:bg-[#3D2418] disabled:opacity-40 text-[#FDFFEB] text-xs font-semibold transition-all cursor-pointer shadow-2xs shrink-0"
                title="Tambahkan Tag Kreator"
              >
                <Plus className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Tambah</span>
              </button>
            </form>
          </div>

          {/* Row 2: Active Creator Tags Display & Reset All Filters Button */}
          <div className="pt-2 border-t border-[#DEE6BD] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {/* Left: Active Selected Tags */}
            <div className="flex flex-wrap items-center gap-1.5 min-h-[26px]">
              <span className="text-[11px] font-semibold text-[#4B2E1F]/80 mr-1 flex items-center gap-1">
                <SlidersHorizontal className="h-3 w-3 text-[#4B2E1F]/60" />
                Tag Kreator Aktif:
              </span>
              {selectedTags.length === 0 ? (
                <span className="text-[11px] text-[#4B2E1F]/60 italic">
                  Semua tag (klik hashtag di bawah atau pilih dropdown tag kreator)
                </span>
              ) : (
                <>
                  {selectedTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-md bg-[#4B2E1F] text-[#FDFFEB] pl-2 pr-1.5 py-0.5 text-[11px] font-semibold shadow-2xs animate-in fade-in"
                    >
                      #{tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="hover:bg-white/20 rounded-sm p-0.5 transition-colors cursor-pointer"
                        title="Hapus tag ini"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </>
              )}
            </div>

            {/* Right: Reset All Filters Button */}
            {(searchQuery || selectedPose !== 'All' || selectedStyle !== 'All' || selectedTags.length > 0) && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="shrink-0 inline-flex items-center gap-1 text-[11px] font-semibold text-[#4B2E1F] hover:bg-[#EAA996] bg-[#F4B8A5] px-2.5 py-1 rounded-md transition-colors cursor-pointer border border-[#DE9784]"
              >
                <X className="h-3 w-3" />
                <span>Reset Semua Filter</span>
              </button>
            )}
          </div>

          {/* Row 3: Quick Creator Hashtags */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] font-semibold text-[#4B2E1F]/80 mr-1 flex items-center gap-1">
              <Hash className="h-3 w-3 text-[#4B2E1F]/60" />
              Tag Populer Kreator:
            </span>
            {allCreatorTags.slice(0, 10).map((tag) => {
              const isActive = selectedTags.some((t) => t.toLowerCase() === tag.toLowerCase());
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#4B2E1F] text-[#FDFFEB] border-[#4B2E1F] shadow-2xs'
                      : 'bg-[#DEE6BD]/60 text-[#4B2E1F] border-[#DEE6BD] hover:bg-[#DEE6BD]'
                  }`}
                >
                  #{tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* HORIZONTAL STYLE TABS (Pengelompokan Gaya Ditentukan oleh Admin - Di Antara Card Search & Frame) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-5 mb-6">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <span className="shrink-0 text-xs font-bold text-[#4B2E1F] flex items-center gap-1.5 mr-2 pl-0.5">
            <Sparkles className="h-3.5 w-3.5 text-[#4B2E1F]" />
            <span>Pilih Style:</span>
          </span>

          {ADMIN_STYLES.map((style) => {
            const isSelected = selectedStyle === style.id;
            const count =
              style.id === 'All'
                ? allFrames.length
                : allFrames.filter((f) => f.category === style.id).length;

            return (
              <button
                key={style.id}
                type="button"
                onClick={() => setSelectedStyle(style.id)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#4B2E1F] text-[#FDFFEB] shadow-xs ring-2 ring-[#4B2E1F]'
                    : 'bg-[#FDFFEB] text-[#4B2E1F] border border-[#DEE6BD] hover:bg-[#DEE6BD]/60 shadow-2xs'
                }`}
              >
                <span>{style.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isSelected
                      ? 'bg-white/20 text-[#FDFFEB]'
                      : 'bg-[#DEE6BD] text-[#4B2E1F]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* PINTEREST MASONRY GRID FEED */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {filteredFrames.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[#4B2E1F]/20 bg-[#FDFFEB] p-12 text-center max-w-lg mx-auto my-12 shadow-xs">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#D2DDEA] text-[#4B2E1F] mb-4 border border-[#B8C8DB]">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-serif text-[#4B2E1F]">Tidak ada frame yang cocok</h3>
            <p className="mt-1 text-xs text-[#4B2E1F]/70">
              Coba gunakan kata kunci lain atau hapus filter tag untuk melihat koleksi frame lainnya.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#4B2E1F] hover:bg-[#3D2418] px-4 py-2 text-xs font-semibold text-[#FDFFEB] shadow-xs transition-colors cursor-pointer"
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {filteredFrames.map((frame, index) => {
              const frameTags = frame.tags && frame.tags.length > 0 ? frame.tags : [frame.category];
              const tagColors = [
                'bg-[#D2DDEA] text-[#4B2E1F] border-[#B8C8DB]',
                'bg-[#DEE6BD] text-[#4B2E1F] border-[#C5D09D]',
                'bg-[#F4B8A5] text-[#4B2E1F] border-[#DE9784]',
              ];

              return (
                <div
                  key={frame.id}
                  onClick={() => setInspectingFrame(frame)}
                  className="group relative break-inside-avoid rounded-xl border border-[#3D2418] bg-[#4B2E1F] overflow-hidden shadow-xs hover:border-[#2C1B12] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex flex-col justify-between text-left"
                >
                  {/* Clean Frame Artwork Container */}
                  <div className="relative bg-[#FDFFEB] overflow-hidden flex items-center justify-center p-3">
                    <img
                      src={frame.image}
                      alt={frame.name}
                      className="w-full object-contain max-h-[460px] transition-transform duration-300 group-hover:scale-[1.01]"
                      loading="lazy"
                    />

                    {/* Hover Overlay with Icon-Only Camera Button */}
                    <div className="absolute inset-0 bg-[#4B2E1F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-end p-3 pointer-events-none">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUseFrame(frame);
                        }}
                        title="Pakai frame ini untuk sesi foto"
                        aria-label="Pakai Frame Ini"
                        className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-lg bg-[#F4B8A5] hover:bg-[#EAA996] text-[#4B2E1F] border border-[#DE9784] shadow-md active:scale-95 transition-all cursor-pointer"
                      >
                        <Camera className="h-4 w-4 text-[#4B2E1F]" />
                      </button>
                    </div>
                  </div>

                  {/* Pin Description & Creator Info Area */}
                  <div className="p-4 bg-[#4B2E1F] border-t border-[#3D2418] flex flex-col justify-between flex-1">
                    <div>
                      {/* Frame Title */}
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FDFFEB] line-clamp-1 group-hover:text-[#F4B8A5] transition-colors">
                        {frame.name}
                      </h3>

                      {/* Frame Description */}
                      <p className="mt-1 text-xs text-[#FDFFEB]/85 line-clamp-2 leading-relaxed">
                        {frame.desc || 'Desain frame artistik resolusi tinggi khusus untuk sesi photobooth kamu.'}
                      </p>

                      {/* Multiple Style Tags / Hashtags */}
                      <div className="mt-2.5 flex flex-wrap gap-1">
                        {frameTags.map((tag, tIdx) => {
                          const clean = tag.replace(/^#/, '');
                          const isSelected = selectedTags.some(
                            (t) => t.toLowerCase() === clean.toLowerCase()
                          );
                          const colorClass = isSelected
                            ? 'bg-[#FDFFEB] text-[#4B2E1F] border-[#FDFFEB] shadow-2xs font-bold'
                            : tagColors[(index + tIdx) % tagColors.length];
                          return (
                            <button
                              key={clean}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleTag(clean);
                              }}
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-md transition-all cursor-pointer border ${colorClass}`}
                              title={`Filter tag #${clean}`}
                            >
                              #{clean}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Creator Identity Area */}
                    <div className="mt-3.5 pt-3 border-t border-[#3D2418] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#DEE6BD] text-[#4B2E1F] text-xs font-bold">
                          {frame.author ? frame.author.charAt(0).toUpperCase() : 'C'}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-[#FDFFEB] truncate">
                            {frame.author}
                          </p>
                          <p className="text-[10px] text-[#F4B8A5] truncate">
                            @{frame.author.toLowerCase().replace(/\s+/g, '')}
                          </p>
                        </div>
                      </div>

                      <span className="text-[10px] text-[#FDFFEB]/75 font-medium">
                        {frame.count} {frame.count === 1 ? 'Pose' : 'Poses'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* INSPECTION MODAL (Detail View Pinterest Pin) */}
      {inspectingFrame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-xl bg-[#D2DDEA] shadow-2xl border border-[#B8C8DB]">
            {/* Close Button */}
            <button
              onClick={() => setInspectingFrame(null)}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-[#4B2E1F] text-[#FDFFEB] hover:bg-[#3D2418] transition-colors cursor-pointer border border-[#4B2E1F]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left: Frame Image */}
              <div className="bg-[#FDFFEB] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#B8C8DB]">
                <img
                  src={inspectingFrame.image}
                  alt={inspectingFrame.name}
                  className="max-h-[480px] w-auto object-contain rounded-lg drop-shadow-sm"
                />
              </div>

              {/* Right: Details & Action */}
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  {/* Style Hashtags & Pose Info */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                    <span className="rounded-md bg-[#4B2E1F] text-[#FDFFEB] border border-[#4B2E1F] px-2.5 py-0.5 text-xs font-semibold">
                      {inspectingFrame.count} Pose Cutout
                    </span>
                    {(inspectingFrame.tags && inspectingFrame.tags.length > 0
                      ? inspectingFrame.tags
                      : [inspectingFrame.category]
                    ).map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-[#DEE6BD] text-[#4B2E1F] border border-[#C5D09D] px-2 py-0.5 text-xs font-semibold"
                      >
                        #{t.replace(/^#/, '')}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-serif text-[#4B2E1F] font-normal">
                    {inspectingFrame.name}
                  </h2>

                  {/* Creator Info */}
                  <div className="mt-4 flex items-center gap-3 p-3 rounded-lg bg-[#FDFFEB] border border-[#B8C8DB]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#4B2E1F] text-[#FDFFEB] font-bold text-sm">
                      {inspectingFrame.author ? inspectingFrame.author.charAt(0).toUpperCase() : 'C'}
                    </div>
                    <div>
                      <div className="text-xs text-[#4B2E1F]/60 font-medium">Kreator Frame</div>
                      <div className="text-sm font-bold text-[#4B2E1F]">{inspectingFrame.author}</div>
                      <div className="text-[11px] text-[#4B2E1F]/60">@{inspectingFrame.author ? inspectingFrame.author.toLowerCase().replace(/\s+/g, '') : 'username'}</div>
                    </div>
                  </div>

                  {/* Keterangan / Deskripsi */}
                  <div className="mt-5">
                    <h4 className="text-xs font-semibold text-[#4B2E1F]/70 uppercase tracking-wider">
                      Keterangan & Detail Desain
                    </h4>
                    <p className="mt-1.5 text-xs md:text-sm text-[#4B2E1F]/80 leading-relaxed">
                      {inspectingFrame.desc || 'Desain frame photobooth berkualitas tinggi siap digunakan untuk mengabadikan momen spesial kamu bersama teman dan keluarga.'}
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-[#4B2E1F]/70 bg-[#FDFFEB] p-3 rounded-lg border border-[#B8C8DB]">
                    <div>
                      <span className="text-[#4B2E1F]/60 block">Resolusi:</span>
                      <strong className="text-[#4B2E1F]">4000 × 5900 px</strong>
                    </div>
                    <div>
                      <span className="text-[#4B2E1F]/60 block">Slots Terkalibrasi:</span>
                      <strong className="text-[#4B2E1F]">{inspectingFrame.slots.length} Foto Cutout</strong>
                    </div>
                  </div>
                </div>

                {/* Big Action: "Pakai Frame Ini" */}
                <div className="mt-6 pt-4 border-t border-[#B8C8DB] flex flex-col gap-2">
                  <button
                    onClick={() => handleUseFrame(inspectingFrame)}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#4B2E1F] hover:bg-[#3D2418] py-3 px-6 text-sm font-semibold text-[#FDFFEB] border border-[#4B2E1F] shadow-xs transition-colors cursor-pointer"
                  >
                    <Camera className="h-4 w-4 text-[#FDFFEB]" />
                    <span>Pakai Frame & Mulai Foto Sekarang</span>
                  </button>
                  <p className="text-[11px] text-[#4B2E1F]/70 text-center">
                    Langsung masuk ke tahap pemotretan (Fase 2: Foto) dengan frame ini.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
