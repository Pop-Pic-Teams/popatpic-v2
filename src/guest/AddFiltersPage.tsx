'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from '../utils/navigation';
import {
  Wand2,
  ArrowLeft,
  RotateCcw,
  CheckCircle,
  Sparkles,
  Camera,
  Layers,
  ChevronRight,
  Sliders,
} from 'lucide-react';
import { PHOTO_FILTERS } from '../data/frames';
import type { PhotoFilter, FrameSlot } from '../types/photobooth';
import { composePhotoboothImage } from '../utils/canvas';
import { PhotoSessionStepper } from '../components/PhotoSessionStepper';

export const AddFiltersPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const rawState = location.state || {};
  const rawFrameImage = rawState.frameImage || '';
  const resolvedFrameImage: string =
    typeof rawFrameImage === 'object' && rawFrameImage && 'src' in (rawFrameImage as Record<string, any>)
      ? (rawFrameImage as { src: string }).src
      : String(rawFrameImage || '');

  const {
    photos = [],
    frameImage = resolvedFrameImage,
    slots = [],
    figmaWidth = 4000,
    frameCount = 4,
    frameName = 'Pop@Pic! Strip',
    creatorName = 'Pop@Pic! Creator',
    initialFilterId = 'normal',
  } = (rawState as {
    photos?: string[];
    frameImage?: string;
    slots?: FrameSlot[];
    figmaWidth?: number;
    frameCount?: number;
    frameName?: string;
    creatorName?: string;
    initialFilterId?: string;
  });

  const [activeFilter, setActiveFilter] = useState<PhotoFilter>(
    PHOTO_FILTERS.find((f) => f.id === initialFilterId) || PHOTO_FILTERS[0]
  );
  const [isRendering, setIsRendering] = useState<boolean>(true);

  // Render composite image on HTML5 Canvas with the selected filter applied
  const renderPreview = useCallback(async () => {
    if (!photos || photos.length === 0 || !frameImage || !canvasRef.current) {
      setIsRendering(false);
      return;
    }

    setIsRendering(true);
    try {
      await composePhotoboothImage(canvasRef.current, {
        frameImageSrc: frameImage,
        photos,
        slots,
        figmaWidth,
        filter: activeFilter,
      });
    } catch (err) {
      console.error('Error compositing preview with filter:', err);
    } finally {
      setIsRendering(false);
    }
  }, [photos, frameImage, slots, figmaWidth, activeFilter]);

  useEffect(() => {
    renderPreview();
  }, [renderPreview]);

  // Proceed to Step 4: Download & Share
  const handleProceedToResult = () => {
    navigate('/result', {
      state: {
        photos,
        frameImage,
        slots,
        figmaWidth,
        filterId: activeFilter.id,
        frameCount,
        frameName,
        creatorName,
      },
    });
  };

  // Back to Step 2: Take Photos / Retake
  const handleBackToBooth = () => {
    navigate('/booth', {
      state: {
        frameCount,
        frameImage,
        slots,
        figmaWidth,
        frameName,
        creatorName,
        photos,
      },
    });
  };

  if (!photos || photos.length === 0) {
    return (
      <div className="min-h-screen bg-[#FDFFEB] flex flex-col items-center justify-center p-6 text-center font-sans text-[#4B2E1F]">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#4B2E1F] mb-4 border border-[#DEE6BD] shadow-xs">
          <Wand2 className="h-6 w-6 text-[#4B2E1F]" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#4B2E1F] mb-2">Belum Ada Foto Tersimpan</h2>
        <p className="text-xs text-[#4B2E1F]/70 max-w-sm mb-6">
          Sesi foto belum memiliki foto yang diambil. Silakan kembali ke booth foto untuk mengambil pose Anda.
        </p>
        <button
          onClick={() => navigate('/frames')}
          className="rounded-lg bg-[#4B2E1F] hover:bg-[#3D2418] px-6 py-2.5 text-xs font-semibold text-[#FDFFEB] shadow-xs cursor-pointer transition-colors"
        >
          Pilih Frame Baru
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFFEB] text-[#4B2E1F] font-sans pb-16">
      {/* Top Header Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-[#3D2418] bg-[#4B2E1F] backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBackToBooth}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#DEE6BD]/30 bg-[#3D2418] text-[#FDFFEB] transition-colors hover:bg-[#2A180E] cursor-pointer shadow-xs"
              aria-label="Kembali ke Booth"
              title="Kembali ke Booth"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => navigate('/')}
              className="text-2xl font-serif tracking-tight text-[#FDFFEB] cursor-pointer"
            >
              Pop<span className="text-[#F4B8A5]">@</span><span className="text-[#FDFFEB] italic">Pic!</span>
            </button>
          </div>
          <div className="text-xs text-[#FDFFEB]/80 flex items-center gap-2">
            <span className="font-serif text-sm font-normal text-[#FDFFEB]">{frameName}</span>
            <span>•</span>
            <span>{photos.length} Foto Siap Difilter</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-3 sm:px-6 pt-18 pb-8 md:px-8 flex flex-col">
        {/* 4-Step Progress Stepper (Active on Step 3: Add Filters) */}
        <div className="shrink-0 pt-0.5 pb-1">
          <PhotoSessionStepper
            currentStep={3}
            onStepClick={(step) => {
              if (step === 1) {
                navigate('/frames');
              } else if (step === 2) {
                handleBackToBooth();
              }
            }}
          />
        </div>

        {/* Phase Header Bar */}
        <div className="mb-3 flex flex-shrink-0 items-center justify-between gap-4 border-b border-[#DEE6BD] pb-2">
          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-[#F4B8A5] text-[#4B2E1F] font-semibold px-2 py-0.5 text-[10px] uppercase tracking-wider border border-[#DE9784]">
                  Fase 3: Add Filters
                </span>
                <span className="text-xs text-[#4B2E1F]/70 font-medium">
                  Filter Aktif: <strong className="text-[#4B2E1F]">{activeFilter.name}</strong>
                </span>
              </div>
              <h1 className="text-lg md:text-xl font-serif font-bold text-[#4B2E1F] mt-0.5">
                Sesuaikan Filter Warna
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleBackToBooth}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#DE9784] bg-[#F4B8A5] hover:bg-[#EAA996] px-3.5 py-1.5 text-xs font-semibold text-[#4B2E1F] transition-colors shadow-2xs cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Ulangi Foto</span>
            </button>
          </div>
        </div>

        {/* 2-Column Workstation: Left Enlarged Preview, Right Wider Filter Picker Beside It */}
        <section className="flex flex-1 flex-col gap-5 lg:flex-row items-stretch">
          {/* LEFT: PREVIEW RESULT (Dikecilkan sedikit agar lebih seimbang) */}
          <div className="flex flex-1 flex-col rounded-2xl border border-[#B8C8DB] bg-[#D2DDEA] p-3 sm:p-4 shadow-sm min-h-[460px] lg:min-h-[580px] xl:min-h-[620px] items-center justify-center relative">
            {isRendering && (
              <div className="absolute inset-0 bg-[#FDFFEB]/85 backdrop-blur-xs flex flex-col items-center justify-center rounded-2xl z-20">
                <div className="h-8 w-8 border-3 border-[#4B2E1F] border-t-transparent rounded-full animate-spin mb-2" />
                <p className="text-xs font-semibold text-[#4B2E1F]">
                  Menerapkan filter {activeFilter.name}...
                </p>
              </div>
            )}

            {/* Canvas Container that lets the preview expand */}
            <div className="relative flex h-full w-full items-center justify-center p-1 sm:p-2">
              <canvas
                ref={canvasRef}
                className="max-h-[520px] lg:max-h-[600px] xl:max-h-[650px] h-auto w-auto max-w-full rounded-xl border border-[#B8C8DB] shadow-lg object-contain transition-all"
              />
            </div>

            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="rounded-md bg-[#4B2E1F]/90 backdrop-blur-md px-2.5 py-1 text-xs font-semibold text-[#FDFFEB] shadow-xs">
                Live Preview Strip
              </span>
              <span className="rounded-md bg-[#FDFFEB] text-[#4B2E1F] border border-[#DEE6BD] px-2.5 py-1 text-[11px] font-semibold flex items-center gap-1 shadow-xs">
                <Sparkles className="h-3 w-3 text-[#F4B8A5]" />
                {activeFilter.label}
              </span>
            </div>
          </div>

          {/* RIGHT: FILTER SELECTION PALETTE (Lebih lebar ke samping) */}
          <div className="w-full lg:w-[480px] xl:w-[540px] shrink-0 flex flex-col justify-between rounded-2xl border border-[#B8C8DB] bg-[#D2DDEA] p-4 sm:p-5 shadow-sm">
            <div className="flex flex-col flex-1">
              <div className="flex items-center justify-between mb-3 border-b border-[#B8C8DB] pb-2.5">
                <div>
                  <h2 className="text-base font-serif font-bold text-[#4B2E1F]">
                    Koleksi Filter
                  </h2>
                  <p className="text-[11px] text-[#4B2E1F]/70">
                    Pilih tone estetika untuk foto strip Anda
                  </p>
                </div>
                <span className="text-[10px] font-semibold text-[#4B2E1F] bg-[#FDFFEB] border border-[#DEE6BD] px-2 py-0.5 rounded-md">
                  {PHOTO_FILTERS.length} Filter
                </span>
              </div>

              {/* Filter Cards Grid - 1 baris 2 filter */}
              <div className="grid grid-cols-2 gap-3 overflow-y-auto no-scrollbar pr-1 flex-1 max-h-[480px] lg:max-h-[540px]">
                {PHOTO_FILTERS.map((filter) => {
                  const isSelected = activeFilter.id === filter.id;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter)}
                      className={`text-left p-2.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                        isSelected
                          ? 'bg-[#4B2E1F] text-[#FDFFEB] border-[#4B2E1F] shadow-xs ring-2 ring-[#4B2E1F]/30'
                          : 'bg-[#FDFFEB] text-[#4B2E1F] border-[#DEE6BD] hover:border-[#4B2E1F]/40 hover:bg-white shadow-2xs'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span
                            className="h-3.5 w-3.5 rounded-full border border-black/10 shrink-0 shadow-2xs"
                            style={{ backgroundColor: filter.previewColor }}
                          />
                          <span className="font-serif font-bold text-xs truncate">
                            {filter.name}
                          </span>
                        </div>
                        {isSelected && (
                          <CheckCircle className="h-3.5 w-3.5 text-[#F4B8A5] shrink-0" />
                        )}
                      </div>

                      <p
                        className={`text-[10px] leading-tight line-clamp-2 ${
                          isSelected ? 'text-[#FDFFEB]/80' : 'text-[#4B2E1F]/70'
                        }`}
                      >
                        {filter.description}
                      </p>

                      <div className="flex items-center justify-between pt-1 border-t border-black/5 text-[9px]">
                        <span
                          className={`font-semibold uppercase tracking-wider px-1 py-0.2 rounded ${
                            isSelected
                              ? 'bg-[#3D2418] text-[#F4B8A5]'
                              : 'bg-[#D2DDEA]/60 text-[#4B2E1F]'
                          }`}
                        >
                          {filter.label}
                        </span>
                        <span className="opacity-70">
                          {isSelected ? 'Aktif' : 'Pilih'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions - Satu-satunya tombol Lanjut ke Unduh */}
            <div className="mt-4 pt-3 border-t border-[#B8C8DB] flex flex-col gap-2">
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => setActiveFilter(PHOTO_FILTERS[0])}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#DEE6BD] bg-[#FDFFEB] hover:bg-white py-2.5 px-3 text-xs font-semibold text-[#4B2E1F] transition-colors cursor-pointer shadow-2xs"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Reset Normal</span>
                </button>
                <button
                  onClick={handleProceedToResult}
                  className="flex-[1.4] inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#4B2E1F] hover:bg-[#3D2418] py-2.5 px-4 text-xs sm:text-sm font-bold text-[#FDFFEB] border border-[#4B2E1F] shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <Sparkles className="h-4 w-4 text-[#F4B8A5]" />
                  <span>Lanjut ke Unduh</span>
                  <ChevronRight className="h-4 w-4 text-[#FDFFEB]" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
