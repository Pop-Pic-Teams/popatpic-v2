import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';
import {
  Download,
  Share2,
  Copy,
  Sparkles,
  ArrowLeft,
  RotateCcw,
  Check,
  CheckCircle,
  User,
  Home,
} from 'lucide-react';
import { PHOTO_FILTERS, recordGuestPhoto } from '../data/frames';
import type { PhotoFilter, FrameSlot } from '../types/photobooth';
import { composePhotoboothImage } from '../utils/canvas';
import { playChimeSound } from '../utils/audio';
import { PhotoSessionStepper } from '../components/PhotoSessionStepper';

export const ResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(true);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [copiedImage, setCopiedImage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    photos = [],
    frameImage = '',
    slots = [],
    figmaWidth = 4000,
    filterId = 'normal',
    frameCount = 4,
    frameName = 'Pop@Pic! Strip',
    creatorName = 'Pop@Pic! Studio',
  } = (location.state as {
    photos?: string[];
    frameImage?: string;
    slots?: FrameSlot[];
    figmaWidth?: number;
    filterId?: string;
    frameCount?: number;
    frameName?: string;
    creatorName?: string;
  }) || {};

  const [selectedFilter, setSelectedFilter] = useState<PhotoFilter>(
    PHOTO_FILTERS.find((f) => f.id === filterId) || PHOTO_FILTERS[0]
  );

  // Render composite image on HTML5 Canvas (SRS F-G014, F-G015)
  const renderComposition = useCallback(async () => {
    if (!photos || photos.length === 0 || !frameImage || !canvasRef.current) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage(null);

    try {
      const dataUrl = await composePhotoboothImage(canvasRef.current, {
        frameImageSrc: frameImage,
        photos,
        slots,
        figmaWidth,
        filter: selectedFilter,
      });

      if (dataUrl) {
        setDownloadUrl(dataUrl);

        // SRS F-G016: Menyimpan metadata hasil foto dan URL file foto
        const recordId = `photo_${Date.now()}`;
        recordGuestPhoto({
          id: recordId,
          frame_id: frameName,
          frame_name: frameName,
          image_url: dataUrl,
          pose_count: frameCount,
          filter_applied: selectedFilter.name,
          created_at: new Date().toISOString(),
        });
      } else {
        setErrorMessage('Gagal memproses penggabungan foto.');
      }
    } catch (err) {
      console.error('Error compositing image:', err);
      setErrorMessage('Terjadi kesalahan saat memproses gambar.');
    } finally {
      setIsProcessing(false);
    }
  }, [photos, frameImage, slots, figmaWidth, selectedFilter, frameName, frameCount]);

  useEffect(() => {
    renderComposition();
  }, [renderComposition]);

  // Handle Download Photo (SRS F-G018)
  const handleDownload = () => {
    if (!downloadUrl) return;

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#6b38d4', '#fd56a7', '#4cd7f6', '#ffd9e4'],
      });
      playChimeSound();
    } catch {
      // Ignore
    }

    const filename = `PopAtPic_${frameName.replace(/\s+/g, '_')}_${Date.now()}.png`;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyImage = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        try {
          await navigator.clipboard.write([
            new ClipboardItem({
              'image/png': blob,
            }),
          ]);
          setCopiedImage(true);
          setTimeout(() => setCopiedImage(false), 2500);
        } catch {
          alert('Peramban Anda tidak mendukung penyalinan gambar langsung.');
        }
      }, 'image/png');
    } catch {
      // Fallback
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Hasil Foto Pop@Pic!',
      text: `Lihat hasil photobooth strip Pop@Pic! saya menggunakan bingkai ${frameName}.`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // User cancelled
      }
    }

    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  if (!photos || photos.length === 0) {
    return (
      <div className="min-h-screen bg-[#FDFFEB] flex flex-col items-center justify-center p-6 text-center font-sans">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white text-[#4B2E1F] mb-4 border border-[#919386]/30">
          <Sparkles className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-[#4B2E1F] mb-2">Sesi Tidak Ditemukan</h2>
        <p className="text-sm text-[#919386] max-w-sm mb-6">
          Belum ada foto yang diambil untuk sesi ini. Silakan mulai sesi photobooth baru.
        </p>
        <button
          onClick={() => navigate('/select-frame')}
          className="rounded-lg bg-[#4B2E1F] hover:bg-[#3D2418] px-6 py-3 text-xs font-semibold text-[#FDFFEB] shadow-xs transition-colors cursor-pointer"
        >
          Pilih Frame & Mulai Foto
        </button>
      </div>
    );
  }

  const qrTargetUrl = window.location.origin;

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFFEB] text-[#4B2E1F] font-sans pb-16">
      {/* Top Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-[#3D2418] bg-[#4B2E1F] backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                navigate('/filters', {
                  state: {
                    photos,
                    frameImage,
                    slots,
                    figmaWidth,
                    frameCount,
                    frameName,
                    creatorName,
                    initialFilterId: selectedFilter.id,
                  },
                })
              }
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#DEE6BD]/30 bg-[#3D2418] text-[#FDFFEB] transition-colors hover:bg-[#2A180E] cursor-pointer shadow-xs"
              aria-label="Kembali ke Filter"
              title="Kembali ke Penyesuaian Filter"
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
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                navigate('/booth', {
                  state: { frameCount, frameImage, slots, figmaWidth, frameName, creatorName, photos },
                })
              }
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#DEE6BD]/30 bg-[#3D2418] text-[#FDFFEB] transition-colors hover:bg-[#2A180E] cursor-pointer shadow-xs"
              aria-label="Ulangi Foto"
              title="Ulangi Foto (Retake)"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-3 sm:px-6 pt-18 pb-8 md:px-8 flex flex-col">
        {/* PROGRESS STEPPER (Step 4: Download & Share) */}
        <div className="shrink-0 pt-0.5 pb-1">
          <PhotoSessionStepper
            currentStep={4}
            onStepClick={(step) => {
              if (step === 1) {
                navigate('/frames');
              } else if (step === 2) {
                navigate('/booth', {
                  state: { frameCount, frameImage, slots, figmaWidth, frameName, creatorName, photos },
                });
              } else if (step === 3) {
                navigate('/filters', {
                  state: {
                    photos,
                    frameImage,
                    slots,
                    figmaWidth,
                    frameCount,
                    frameName,
                    creatorName,
                    initialFilterId: selectedFilter.id,
                  },
                });
              }
            }}
          />
        </div>

        {/* Phase Header Bar */}
        <div className="mb-3 flex flex-shrink-0 items-center justify-between gap-4 border-b border-[#DEE6BD] pb-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-[#DEE6BD] text-[#4B2E1F] font-semibold px-2 py-0.5 text-[10px] uppercase tracking-wider border border-[#C5D09D]">
                Fase 4: Download & Share
              </span>
              <span className="text-xs text-[#4B2E1F]/70 font-medium">Siap Dibagikan</span>
            </div>
            <h1 className="text-lg md:text-xl font-serif font-bold text-[#4B2E1F] mt-0.5">
              Hasil Foto Strip Pop@Pic!
            </h1>
            <p className="text-xs text-[#4B2E1F]/70">
              {frameName} • Oleh {creatorName}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] hover:bg-white px-3 py-1.5 text-xs font-semibold text-[#4B2E1F] transition-colors shadow-2xs cursor-pointer"
              title="Kembali ke Beranda"
            >
              <Home className="h-3.5 w-3.5" />
              <span>Kembali ke Home</span>
            </button>
            <button
              onClick={() =>
                navigate('/filters', {
                  state: {
                    photos,
                    frameImage,
                    slots,
                    figmaWidth,
                    frameCount,
                    frameName,
                    creatorName,
                    initialFilterId: selectedFilter.id,
                  },
                })
              }
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] hover:bg-white px-3 py-1.5 text-xs font-semibold text-[#4B2E1F] transition-colors shadow-2xs cursor-pointer"
            >
              <span>Ganti Filter</span>
            </button>
            <button
              onClick={() => navigate('/frames')}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#DE9784] bg-[#F4B8A5] hover:bg-[#EAA996] px-3.5 py-1.5 text-xs font-semibold text-[#4B2E1F] transition-colors shadow-2xs cursor-pointer"
            >
              Pilih Frame Baru
            </button>
          </div>
        </div>

        {/* Section: 2 Columns */}
        <section className="flex flex-1 flex-col gap-5 lg:flex-row items-start">
          {/* LEFT: PREVIEW RESULT (Dikecilkan sedikit agar lebih seimbang) */}
          <div className="flex flex-1 flex-col rounded-2xl border border-[#B8C8DB] bg-[#D2DDEA] p-3 sm:p-4 shadow-sm min-h-[460px] lg:min-h-[580px] xl:min-h-[620px] items-center justify-center relative">
            {isProcessing && (
              <div className="absolute inset-0 bg-[#FDFFEB]/85 backdrop-blur-xs flex flex-col items-center justify-center rounded-2xl z-20">
                <div className="h-8 w-8 border-3 border-[#4B2E1F] border-t-transparent rounded-full animate-spin mb-2" />
                <p className="text-xs font-semibold text-[#4B2E1F]">
                  Menyiapkan hasil foto strip resolusi tinggi...
                </p>
              </div>
            )}

            <div className="relative flex h-full w-full items-center justify-center p-1 sm:p-2">
              <canvas
                ref={canvasRef}
                className="max-h-[520px] lg:max-h-[600px] xl:max-h-[650px] h-auto w-auto max-w-full rounded-xl border border-[#B8C8DB] shadow-lg object-contain transition-all"
              />
            </div>

            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="rounded-md bg-[#4B2E1F]/90 backdrop-blur-md px-2.5 py-1 text-xs font-semibold text-[#FDFFEB] shadow-xs">
                Hasil Akhir Strip
              </span>
              <span className="rounded-md bg-[#FDFFEB] text-[#4B2E1F] border border-[#DEE6BD] px-2.5 py-1 text-[11px] font-semibold flex items-center gap-1 shadow-xs">
                <Sparkles className="h-3 w-3 text-[#F4B8A5]" />
                {selectedFilter.name}
              </span>
            </div>

            {errorMessage && (
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-red-50 p-2.5 text-center text-xs text-red-600 font-semibold border border-red-200">
                {errorMessage}
              </div>
            )}
          </div>

          {/* RIGHT: DOWNLOAD ACTIONS AND QR SHARING (Ukuran pas tanpa space kosong) */}
          <div className="w-full lg:w-[460px] xl:w-[500px] shrink-0 flex flex-col gap-4 rounded-2xl border border-[#B8C8DB] bg-[#D2DDEA] p-5 sm:p-6 shadow-sm">
            {/* Card Title */}
            <div className="flex items-center justify-between border-b border-[#B8C8DB] pb-3">
              <div>
                <h2 className="text-base sm:text-lg font-serif font-bold text-[#4B2E1F]">
                  Simpan & Unduh Foto
                </h2>
                <p className="text-[11px] text-[#4B2E1F]/70">
                  Unduh foto strip atau scan QR Code di ponsel Anda
                </p>
              </div>
              <span className="text-[10px] font-semibold text-[#4B2E1F] bg-[#FDFFEB] border border-[#DEE6BD] px-2.5 py-1 rounded-md shadow-2xs">
                Format PNG
              </span>
            </div>

            {/* Main Download & Copy Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <button
                onClick={handleDownload}
                disabled={!downloadUrl || isProcessing}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#4B2E1F] hover:bg-[#3D2418] py-3 px-5 text-xs sm:text-sm font-bold text-[#FDFFEB] border border-[#4B2E1F] shadow-sm hover:shadow-md disabled:opacity-40 transition-all cursor-pointer"
              >
                <Download className="h-4 w-4 text-[#FDFFEB]" />
                <span>Unduh Foto Strip</span>
              </button>

              <button
                onClick={handleCopyImage}
                disabled={!downloadUrl || isProcessing}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#DE9784] bg-[#F4B8A5] hover:bg-[#EAA996] py-3 px-4 text-xs sm:text-sm font-bold text-[#4B2E1F] transition-colors cursor-pointer shadow-2xs"
                title="Salin gambar ke papan klip"
              >
                {copiedImage ? (
                  <>
                    <Check className="h-4 w-4 text-[#4B2E1F]" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-[#4B2E1F]" />
                    <span>Salin</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between text-xs text-[#4B2E1F]/70 px-0.5">
              <span>Resolusi Tinggi • Kualitas Cetak</span>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1 font-semibold text-[#4B2E1F] hover:text-[#3D2418] cursor-pointer"
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>{copiedLink ? 'Tautan Disalin!' : 'Bagikan Tautan'}</span>
              </button>
            </div>

            {/* Bottom: QR Code Sharing */}
            <div className="border-t border-[#B8C8DB] pt-4 flex flex-col items-center text-center">
              <span className="text-xs font-bold text-[#4B2E1F] mb-0.5">
                Scan QR Code untuk Simpan di Ponsel
              </span>
              <p className="text-[11px] text-[#4B2E1F]/70 mb-3">
                Arahkan kamera ponsel Anda ke kode QR untuk mengunduh langsung
              </p>

              <div className="rounded-xl border border-[#B8C8DB] bg-white p-2.5 inline-block shadow-2xs">
                <QRCodeSVG
                  value={qrTargetUrl}
                  size={130}
                  level="M"
                  includeMargin={true}
                />
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-[#4B2E1F] bg-[#FDFFEB] px-3 py-1 rounded-lg border border-[#DEE6BD]">
                <CheckCircle className="h-3.5 w-3.5 text-[#4B2E1F]" />
                <span>Transfer Langsung Siap</span>
              </div>
            </div>

            {/* Action to Return Home */}
            <div className="pt-2 border-t border-[#B8C8DB]">
              <button
                onClick={() => navigate('/')}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[#DEE6BD] bg-[#FDFFEB] hover:bg-white py-2.5 px-4 text-xs sm:text-sm font-semibold text-[#4B2E1F] transition-colors cursor-pointer shadow-2xs"
              >
                <Home className="h-4 w-4 text-[#4B2E1F]" />
                <span>Kembali ke Home</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
