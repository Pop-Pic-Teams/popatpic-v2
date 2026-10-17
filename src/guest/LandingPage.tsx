'use client';

import React, { useEffect, useState } from 'react';
import { useNavigate } from '../utils/navigation';
import { Sparkles, ArrowRight, Camera, QrCode, Sliders, ShieldCheck, X } from 'lucide-react';
import { getApprovedActiveFrames, INITIAL_FRAMES } from '../data/frames';
import type { FrameTemplate } from '../types/photobooth';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [inspectingFrame, setInspectingFrame] = useState<FrameTemplate | null>(null);
  const [approvedFrames, setApprovedFrames] = useState(() =>
    INITIAL_FRAMES.filter((frame) => frame.status === 'approved' && frame.is_active)
  );

  useEffect(() => {
    setApprovedFrames(getApprovedActiveFrames());
  }, []);

  const trendingFrames = approvedFrames.slice(0, 4);

  const handleUseFrame = (frame: FrameTemplate) => {
    navigate('/booth', {
      state: {
        frameCount: frame.count,
        frameImage: frame.image,
        slots: frame.slots,
        figmaWidth: frame.figmaWidth,
        frameName: frame.name,
        creatorName: frame.author,
        currentPhase: 2,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#FDFFEB] text-[#4B2E1F] font-sans scroll-smooth pt-20">
      {/* HERO SECTION - GUEST ONLY */}
      <main id="home" className="mx-auto max-w-6xl px-6 pt-12 pb-16">
        <section className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:justify-between">
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left z-20">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-['Instrument_Serif',serif] font-normal tracking-tight text-[#4B2E1F] leading-[0.95] mb-4" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
              Pop<span className="text-[#F4B8A5]">@</span><span className="text-[#4B2E1F] italic">Pic!</span>
            </h1>

            <p className="mb-6 text-sm md:text-base text-[#4B2E1F]/80 max-w-md mx-auto lg:mx-0 leading-relaxed font-normal">
              Choose curated frames, snap with live webcam or upload from gallery, and instantly download high-res photo strips without signing up.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                onClick={() => navigate('/frames')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-[#4B2E1F] hover:bg-[#3D2418] px-6 py-3 text-sm font-semibold text-[#FDFFEB] border border-[#4B2E1F] shadow-sm transition-colors cursor-pointer"
              >
                <span>Start Photo Session</span>
                <ArrowRight className="h-4 w-4 text-[#FDFFEB]" />
              </button>

              <button
                onClick={() => navigate('/frames')}
                className="w-full sm:w-auto rounded-lg border border-[#DE9784] bg-[#F4B8A5] hover:bg-[#EAA996] px-5 py-3 text-sm font-semibold text-[#4B2E1F] transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-2"
              >
                <Sparkles className="h-4 w-4 text-[#4B2E1F]" />
                <span>Browse Frames</span>
              </button>
            </div>

            {/* Micro stats banner */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 border-t border-[#919386]/25 pt-5 text-left">
              <div>
                <div className="text-xl font-serif text-[#4B2E1F]">Guest Access</div>
                <div className="text-[11px] text-[#919386]">No account required</div>
              </div>
              <div className="h-6 w-px bg-[#919386]/30" />
              <div>
                <div className="text-xl font-serif text-[#4B2E1F]">Webcam & Gallery</div>
                <div className="text-[11px] text-[#919386]">Live camera support</div>
              </div>
              <div className="h-6 w-px bg-[#919386]/30" />
              <div>
                <div className="text-xl font-serif text-[#4B2E1F]">QR Code</div>
                <div className="text-[11px] text-[#919386]">Instant phone transfer</div>
              </div>
            </div>
          </div>

          {/* Right Image Deck with Interactive Hover */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-[340px] lg:max-w-[420px] aspect-[4/5] relative mt-4 group cursor-pointer">
              {/* Card 1: Back Left (Secondary: Soft Pistachio) */}
              <div className="absolute top-4 left-0 w-2/3 aspect-[3/4] overflow-hidden rounded-lg shadow-lg border-[4px] border-[#F4B8A5] transform -rotate-8 transition-all duration-500 group-hover:-translate-x-6 group-hover:-translate-y-3 group-hover:-rotate-[12deg] z-10 bg-[#DEE6BD]">
                <img
                  src="/assets/landing-page/left.jpg"
                  alt="Back card left"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Card 2: Back Right (Primary: Powder Blue) */}
              <div className="absolute top-8 right-0 w-2/3 aspect-[3/4] overflow-hidden rounded-lg shadow-lg border-[4px] border-[#F4B8A5] transform rotate-8 transition-all duration-500 group-hover:translate-x-6 group-hover:translate-y-2 group-hover:rotate-[12deg] z-10 bg-[#D2DDEA]">
                <img
                  src="/assets/landing-page/right.png"
                  alt="Back card right"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Card 3: Main Foreground Center */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[78%] aspect-[3/4] overflow-hidden rounded-lg shadow-xl border-[4px] border-[#F4B8A5] transform rotate-1 transition-all duration-500 group-hover:-translate-y-4 group-hover:rotate-0 z-20 bg-[#D2DDEA]">
                <img
                  src="/assets/landing-page/center.jpg"
                  alt="Main card center"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* TRENDING FRAMES SECTION */}
      <section id="frames" className="bg-[#D2DDEA] py-14 border-t border-[#B8C8DB]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-normal text-[#4B2E1F]">
                Featured <span className="italic text-[#4B2E1F]/70">Frames</span>
              </h2>
              <p className="mt-0.5 text-xs text-[#4B2E1F]/80">
                Curated creative designs ready for your photo session
              </p>
            </div>
            <button
              onClick={() => navigate('/frames')}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#4B2E1F] hover:bg-[#3D2418] text-[#FDFFEB] px-3.5 py-1.5 text-xs font-semibold border border-[#4B2E1F] transition-colors cursor-pointer shadow-xs"
            >
              <span>View all frames</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#FDFFEB]" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingFrames.map((frame, index) => {
              const frameTags = frame.tags && frame.tags.length > 0 ? frame.tags : [frame.category];
              const tagColors = [
                'bg-[#D2DDEA] text-[#4B2E1F] border-[#B8C8DB]',
                'bg-[#DEE6BD] text-[#4B2E1F] border-[#C5D09D]',
                'bg-[#F4DCCF] text-[#4B2E1F] border-[#E8C5B3]',
              ];

              return (
                <div
                  key={frame.id}
                  onClick={() => setInspectingFrame(frame)}
                  className="group relative rounded-xl border border-[#4B2E1F]/25 bg-[#4B2E1F] overflow-hidden shadow-xs hover:border-[#3D2418] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex flex-col justify-between text-left"
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
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FDFFEB] line-clamp-1 group-hover:text-[#D2DDEA] transition-colors">
                        {frame.name}
                      </h3>

                      {/* Frame Description */}
                      <p className="mt-1 text-xs text-[#FDFFEB]/85 line-clamp-2 leading-relaxed">
                        {frame.desc || 'Desain frame artistik resolusi tinggi siap pakai untuk sesi foto kamu.'}
                      </p>

                      {/* Multiple Style Tags / Hashtags */}
                      <div className="mt-2.5 flex flex-wrap gap-1">
                        {frameTags.map((tag, tIdx) => {
                          const clean = tag.replace(/^#/, '');
                          const colorClass = tagColors[(index + tIdx) % tagColors.length];
                          return (
                            <span
                              key={clean}
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${colorClass}`}
                            >
                              #{clean}
                            </span>
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
                          <p className="text-[10px] text-[#D2DDEA] truncate">
                            @{frame.author ? frame.author.toLowerCase().replace(/\s+/g, '') : 'username'}
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-[#DEE6BD]">
                        {frame.count} Poses
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-14 bg-[#FDFFEB] border-t border-[#DEE6BD]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-md mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-normal text-[#4B2E1F]">
              How It <span className="italic text-[#F4B8A5]">Works</span>
            </h2>
            <p className="mt-1 text-xs text-[#4B2E1F]/75">
              Four simple steps to capture and celebrate your moments
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-lg bg-[#D2DDEA] p-5 border border-[#B8C8DB] shadow-xs">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#4B2E1F] text-[#FDFFEB] mb-3 text-xs font-bold shadow-2xs">
                1
              </div>
              <h3 className="text-xl font-serif font-bold text-[#4B2E1F] mb-1">Pick a Frame</h3>
              <p className="text-xs text-[#4B2E1F]/80 leading-relaxed">
                Choose 1, 2, 4, or 6 pose formats tailored to your style.
              </p>
            </div>

            <div className="rounded-lg bg-[#D2DDEA] p-5 border border-[#B8C8DB] shadow-xs">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#4B2E1F] text-[#FDFFEB] mb-3 text-xs font-bold shadow-2xs">
                2
              </div>
              <h3 className="text-xl font-serif font-bold text-[#4B2E1F] mb-1">Take Photos</h3>
              <p className="text-xs text-[#4B2E1F]/80 leading-relaxed">
                Use your live webcam with a timer or upload from your gallery.
              </p>
            </div>

            <div className="rounded-lg bg-[#D2DDEA] p-5 border border-[#B8C8DB] shadow-xs">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#4B2E1F] text-[#FDFFEB] mb-3 text-xs font-bold shadow-2xs">
                3
              </div>
              <h3 className="text-xl font-serif font-bold text-[#4B2E1F] mb-1">Apply Filters</h3>
              <p className="text-xs text-[#4B2E1F]/80 leading-relaxed">
                Enhance your photos with presets like 90s Vibe, Pastel, or Noir.
              </p>
            </div>

            <div className="rounded-lg bg-[#D2DDEA] p-5 border border-[#B8C8DB] shadow-xs">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#4B2E1F] text-[#FDFFEB] mb-3 text-xs font-bold shadow-2xs">
                4
              </div>
              <h3 className="text-xl font-serif font-bold text-[#4B2E1F] mb-1">Download & QR</h3>
              <p className="text-xs text-[#4B2E1F]/80 leading-relaxed">
                Save high-resolution PNG strips or scan QR code to your phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-14 bg-[#4B2E1F] border-t border-[#3D2418]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-serif font-normal text-[#FDFFEB] mb-3">
            About <span className="italic text-[#F4B8A5]">Pop@Pic!</span>
          </h2>
          <p className="text-sm text-[#FDFFEB]/85 leading-relaxed mb-6 max-w-2xl mx-auto">
            Pop@Pic! is a modern web photobooth experience (BYOD). Guests can snap photos instantly without logging in, while independent creators can contribute custom frames curated by the Admin team.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D2DDEA] border border-[#B8C8DB] rounded-lg text-xs font-semibold text-[#4B2E1F]">
              <Camera className="h-3.5 w-3.5 text-[#4B2E1F]" /> Webcam & Gallery
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#DEE6BD] border border-[#C5D09D] rounded-lg text-xs font-semibold text-[#4B2E1F]">
              <Sliders className="h-3.5 w-3.5 text-[#4B2E1F]" /> Preset Color Filters
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F4B8A5] border border-[#DE9784] rounded-lg text-xs font-semibold text-[#4B2E1F]">
              <QrCode className="h-3.5 w-3.5 text-[#4B2E1F]" /> QR Mobile Transfer
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#3D2418] bg-[#3D2418] py-6 text-center text-xs text-[#FDFFEB]/70">
        <p>© 2026 Pop@Pic! Photobooth. All rights reserved.</p>
      </footer>

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
                    onClick={() => {
                      const f = inspectingFrame;
                      setInspectingFrame(null);
                      handleUseFrame(f);
                    }}
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
