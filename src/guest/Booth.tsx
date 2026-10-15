import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Camera,
  RotateCcw,
  Upload,
  ArrowLeft,
  Sparkles,
  Volume2,
  VolumeX,
  FlipHorizontal,
  RefreshCw,
  CheckCircle,
  Image as ImageIcon,
  ChevronRight,
  Layers,
} from 'lucide-react';
import pixelFramePng from '../assets/frames/pixel-frame.png';
import { PhotoSessionStepper } from '../components/PhotoSessionStepper';
import { getStandardSlots } from '../data/frames';
import type { FrameSlot } from '../types/photobooth';
import { playCountdownBeep, playShutterSound } from '../utils/audio';

export const BoothPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const frameCount: number = location.state?.frameCount || 4;
  const frameImage: string = location.state?.frameImage || pixelFramePng;
  const slots: FrameSlot[] = location.state?.slots || getStandardSlots(frameCount);
  const figmaWidth: number = location.state?.figmaWidth || 4000;
  const frameName: string = location.state?.frameName || 'Custom Frame';
  const creatorName: string = location.state?.creatorName || 'Pop@Pic! Creator';

  // State
  const [photoSource, setPhotoSource] = useState<'camera' | 'gallery'>('camera');
  const [countdown, setCountdown] = useState<number | string | null>(null);
  const [isShooting, setIsShooting] = useState<boolean>(false);
  const [currentShotIndex, setCurrentShotIndex] = useState<number>(0);
  const [photos, setPhotos] = useState<string[]>(location.state?.photos || []);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isMirrored, setIsMirrored] = useState<boolean>(true);
  const [flashActive, setFlashActive] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const shots = Array.from({ length: frameCount }, (_, i) => i + 1);

  // Initialize live webcam (SRS F-G08, F-G09)
  const startCamera = useCallback(async () => {
    setCameraError(null);
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: facingMode,
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
        audio: false,
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch {
      setCameraError(
        'Izin kamera ditolak atau kamera tidak terdeteksi. Silakan gunakan unggah dari galeri atau izinkan akses kamera.'
      );
    }
  }, [facingMode]);

  useEffect(() => {
    if (photoSource === 'camera') {
      startCamera();
    } else {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    }
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [photoSource, startCamera]);

  const toggleFacingMode = () => {
    setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
  };

  const captureVideoFrame = (): string | null => {
    const video = videoRef.current;
    if (!video || !video.videoWidth) return null;

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    if (isMirrored) {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/png');
  };

  // Automated shoot sequence for all poses
  const handleShootAll = async () => {
    if (isShooting) return;
    setIsShooting(true);
    setPhotos([]);

    const tempPhotos: string[] = [];

    for (let i = 0; i < frameCount; i++) {
      setCurrentShotIndex(i);

      for (let c = 3; c > 0; c--) {
        setCountdown(c);
        if (soundEnabled) playCountdownBeep(false);
        await new Promise((r) => setTimeout(r, 1000));
      }

      setCountdown('Smile! 📸');
      if (soundEnabled) {
        playCountdownBeep(true);
        playShutterSound();
      }

      setFlashActive(true);
      setTimeout(() => setFlashActive(false), 200);

      await new Promise((r) => setTimeout(r, 250));

      const photoDataUrl = captureVideoFrame();
      if (photoDataUrl) {
        tempPhotos.push(photoDataUrl);
        setPhotos([...tempPhotos]);
      }

      await new Promise((r) => setTimeout(r, 1200));
    }

    setCountdown(null);
    setIsShooting(false);
  };

  // Retake a single specific shot
  const handleRetakeSingleShot = async (index: number) => {
    if (isShooting) return;
    setIsShooting(true);
    setCurrentShotIndex(index);

    for (let c = 3; c > 0; c--) {
      setCountdown(c);
      if (soundEnabled) playCountdownBeep(false);
      await new Promise((r) => setTimeout(r, 1000));
    }

    setCountdown('Smile! 📸');
    if (soundEnabled) {
      playCountdownBeep(true);
      playShutterSound();
    }

    setFlashActive(true);
    setTimeout(() => setFlashActive(false), 200);

    await new Promise((r) => setTimeout(r, 250));

    const photoDataUrl = captureVideoFrame();
    if (photoDataUrl) {
      const updated = [...photos];
      updated[index] = photoDataUrl;
      setPhotos(updated);
    }

    setCountdown(null);
    setIsShooting(false);
  };

  // Gallery photo upload handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError(null);
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    const maxSizeBytes = 10 * 1024 * 1024;

    const fileList = Array.from(files);
    for (const f of fileList) {
      if (!validTypes.includes(f.type)) {
        setUploadError(
          `File "${f.name}" bukan format yang didukung. Sistem hanya menerima JPEG, PNG, atau WebP.`
        );
        return;
      }
      if (f.size > maxSizeBytes) {
        setUploadError(`File "${f.name}" melebihi batas 10 MB.`);
        return;
      }
    }

    const remaining = frameCount - photos.length;
    const filesToLoad = fileList.slice(0, remaining > 0 ? remaining : frameCount);

    const readers = filesToLoad.map((file) => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readers).then((newUrls) => {
      if (photos.length >= frameCount) {
        setPhotos(newUrls);
      } else {
        setPhotos((prev) => [...prev, ...newUrls].slice(0, frameCount));
      }
    });

    if (e.target) e.target.value = '';
  };

  // Manually proceed to Step 3: Add Filters
  const handleProceedToFilters = () => {
    if (photos.length === 0) return;
    navigate('/filters', {
      state: {
        frameCount,
        frameImage,
        photos,
        slots,
        figmaWidth,
        frameName,
        creatorName,
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFFEB] text-[#4B2E1F] font-sans pb-16">
      {/* Top Header Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-[#3D2418] bg-[#4B2E1F] backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/frames')}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#DEE6BD]/30 bg-[#3D2418] text-[#FDFFEB] transition-colors hover:bg-[#2A180E] cursor-pointer shadow-xs"
              aria-label="Ganti Frame"
              title="Kembali ke Galeri Frame"
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
          <div className="flex items-center gap-3 text-xs text-[#FDFFEB]/80">
            <span className="font-serif text-sm font-normal text-[#FDFFEB] hidden sm:inline">
              {frameName}
            </span>
            <span className="hidden sm:inline">•</span>
            <span>{frameCount} Pose</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 mx-auto w-full max-w-6xl px-3 sm:px-6 pt-17 pb-4 flex flex-col items-center">
        {/* PROGRESS STEPPER (Active on Step 2: Take Photos) */}
        <div className="w-full shrink-0 pt-0.5 pb-1">
          <PhotoSessionStepper
            currentStep={2}
            onStepClick={(step) => {
              if (step === 1) {
                // Navigate back to Pinterest frame gallery
                navigate('/frames');
              } else if (step === 3 && photos.length === frameCount) {
                handleProceedToFilters();
              }
            }}
          />
        </div>

        {/* Top Session Title Bar */}
        <div className="w-full mb-3 flex items-center justify-between border-b border-[#DEE6BD] pb-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-[#DEE6BD] text-[#4B2E1F] font-semibold px-2 py-0.5 text-[10px] uppercase tracking-wider border border-[#C5D09D]">
                Fase 2: Take Photos
              </span>
              <span className="text-xs text-[#4B2E1F]/70 font-medium">
                {photos.length}/{frameCount} Foto Terisi
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-serif font-bold text-[#4B2E1F] mt-0.5">
              Live Photobooth Webcam
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/frames')}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#DE9784] bg-[#F4B8A5] hover:bg-[#EAA996] px-3 py-1.5 text-xs font-semibold text-[#4B2E1F] transition-colors shadow-2xs cursor-pointer"
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Ganti Frame</span>
            </button>

            {photos.length === frameCount && (
              <button
                onClick={handleProceedToFilters}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#4B2E1F] hover:bg-[#3D2418] px-3.5 py-1.5 text-xs font-semibold text-[#FDFFEB] border border-[#4B2E1F] shadow-2xs transition-colors cursor-pointer"
              >
                <span>Lanjut ke Filter</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* UNIFIED BOOTH & PHOTO SLOTS BLUE CARD */}
        <div className="w-full rounded-2xl border border-[#B8C8DB] bg-[#D2DDEA] p-3 sm:p-4 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_225px] xl:grid-cols-[1fr_250px] gap-3.5 items-stretch">
            {/* LEFT: WEBCAM CONTROLS & VIEWFINDER */}
            <div className="w-full flex flex-col min-w-0">
              {/* Top Controls Toolbar */}
              <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
                {/* Left: Source Switcher (Live Webcam vs Upload Files) */}
                <div className="flex rounded-lg bg-[#FDFFEB] border border-[#DEE6BD] p-0.5 shadow-2xs">
                  <button
                    onClick={() => setPhotoSource('camera')}
                    className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                      photoSource === 'camera'
                        ? 'bg-[#4B2E1F] text-[#FDFFEB] shadow-xs'
                        : 'text-[#4B2E1F]/70 hover:text-[#4B2E1F]'
                    }`}
                  >
                    <Camera className="h-3.5 w-3.5" />
                    <span>Live Webcam</span>
                  </button>
                  <button
                    onClick={() => setPhotoSource('gallery')}
                    className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                      photoSource === 'gallery'
                        ? 'bg-[#4B2E1F] text-[#FDFFEB] shadow-xs'
                        : 'text-[#4B2E1F]/70 hover:text-[#4B2E1F]'
                    }`}
                  >
                    <ImageIcon className="h-3.5 w-3.5" />
                    <span>Upload File</span>
                  </button>
                </div>

                {/* Right: Camera helper buttons */}
                {photoSource === 'camera' && (
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setIsMirrored(!isMirrored)}
                      className={`flex h-8 px-2.5 items-center gap-1.5 rounded-lg border text-xs font-semibold transition-colors cursor-pointer shadow-2xs ${
                        isMirrored
                          ? 'border-[#4B2E1F] bg-[#4B2E1F] text-[#FDFFEB]'
                          : 'border-[#DEE6BD] bg-[#FDFFEB] text-[#4B2E1F] hover:bg-white'
                      }`}
                      title="Cerminkan Tampilan Kamera (Mirror View)"
                    >
                      <FlipHorizontal className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Mirror</span>
                    </button>
                    <button
                      onClick={toggleFacingMode}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] text-[#4B2E1F] hover:bg-white transition-colors cursor-pointer shadow-2xs"
                      title="Putar Kamera Depan / Belakang"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => setSoundEnabled(!soundEnabled)}
                      className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-colors cursor-pointer shadow-2xs ${
                        soundEnabled
                          ? 'border-[#4B2E1F] bg-[#4B2E1F] text-[#FDFFEB]'
                          : 'border-[#DEE6BD] bg-[#FDFFEB] text-[#4B2E1F] hover:bg-white'
                      }`}
                      title={soundEnabled ? 'Suara Shutter Aktif' : 'Suara Shutter Senyap'}
                    >
                      {soundEnabled ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                )}
              </div>

              {/* VIEWFINDER: RASIO 16:9 DIPERTAHANKAN */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-stone-950 flex items-center justify-center border border-[#3D2418]/30 shadow-inner">
                {flashActive && (
                  <div className="absolute inset-0 bg-white z-40 transition-opacity duration-150 animate-out fade-out" />
                )}

                {photoSource === 'camera' ? (
                  <>
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      style={{
                        transform: isMirrored ? 'scaleX(-1)' : 'none',
                        filter: 'none',
                      }}
                      className="h-full w-full object-cover transition-all duration-300"
                    />

                    {cameraError && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#4B2E1F]/95 text-[#FDFFEB] p-5 text-center z-20">
                        <Camera className="h-10 w-10 text-[#F4B8A5] mb-2" />
                        <p className="text-xs sm:text-sm font-semibold max-w-md mb-3 leading-relaxed">
                          {cameraError}
                        </p>
                        <button
                          onClick={() => setPhotoSource('gallery')}
                          className="rounded-lg bg-[#FDFFEB] hover:bg-white px-4 py-2 text-xs font-bold text-[#4B2E1F] shadow-sm cursor-pointer transition-colors"
                        >
                          Beralih ke Unggah File
                        </button>
                      </div>
                    )}

                    {/* Centered Countdown */}
                    {countdown !== null && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs z-30">
                        <div className="rounded-2xl bg-[#FDFFEB]/95 px-8 py-5 text-5xl sm:text-6xl font-serif font-bold text-[#4B2E1F] shadow-2xl border-2 border-[#DEE6BD] animate-pulse">
                          {countdown}
                        </div>
                      </div>
                    )}

                    {/* Top Badge: Shot Indicator */}
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                      <span className="rounded-lg bg-[#4B2E1F]/90 backdrop-blur-md px-2.5 py-1 text-xs font-semibold text-[#FDFFEB] shadow-xs">
                        {isShooting
                          ? `Pose ${currentShotIndex + 1} dari ${frameCount}`
                          : `${frameCount} Pose Siap Difoto`}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-6 bg-[#FDFFEB] h-full w-full text-[#4B2E1F]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#4B2E1F] mb-2 border border-[#DEE6BD] shadow-xs">
                      <Upload className="h-6 w-6 text-[#4B2E1F]" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#4B2E1F] mb-0.5">
                      Pilih Foto dari Perangkat Anda
                    </h3>
                    <p className="text-[11px] text-[#4B2E1F]/70 max-w-sm mb-3">
                      Format: JPEG, PNG, WebP (Maksimum 10 MB per foto).
                    </p>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="rounded-lg bg-[#4B2E1F] hover:bg-[#3D2418] px-5 py-2 text-xs font-semibold text-[#FDFFEB] shadow-xs transition-colors cursor-pointer"
                    >
                      Pilih Berkas Foto ({photos.length}/{frameCount})
                    </button>
                    {uploadError && (
                      <p className="text-xs text-red-600 mt-2 font-semibold">{uploadError}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom Action Bar: Shoot Buttons and Upload Trigger */}
              <div className="mt-3 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                <div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  {photoSource === 'camera' && (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] px-3 py-1.5 text-xs font-semibold text-[#4B2E1F] hover:bg-white transition-colors cursor-pointer shadow-2xs"
                    >
                      <Upload className="h-3.5 w-3.5 text-[#4B2E1F]" />
                      <span>Unggah dari Galeri</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {photos.length > 0 && !isShooting && (
                    <button
                      onClick={() => setPhotos([])}
                      className="rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] px-3 py-1.5 text-xs font-semibold text-[#4B2E1F] hover:bg-white transition-colors cursor-pointer shadow-2xs"
                    >
                      Reset Foto
                    </button>
                  )}

                  {photoSource === 'camera' ? (
                    <button
                      onClick={handleShootAll}
                      disabled={isShooting}
                      className="flex items-center gap-2 rounded-xl bg-[#4B2E1F] hover:bg-[#3D2418] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#FDFFEB] border border-[#4B2E1F] shadow-sm disabled:opacity-50 transition-all cursor-pointer"
                    >
                      <Camera className="h-4 w-4 text-[#FDFFEB]" />
                      <span>
                        {isShooting
                          ? 'Mengambil Foto...'
                          : photos.length === frameCount
                          ? `Ambil Ulang (${frameCount} Pose)`
                          : `Mulai Foto (${frameCount} Pose)`}
                      </span>
                    </button>
                  ) : (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-2 rounded-xl bg-[#4B2E1F] hover:bg-[#3D2418] px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#FDFFEB] border border-[#4B2E1F] shadow-sm transition-all cursor-pointer"
                    >
                      <Upload className="h-4 w-4 text-[#FDFFEB]" />
                      <span>Pilih Berkas Foto</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT: PHOTO SLOTS COLUMN (Satu Card Biru dengan Booth, Memanjang Vertikal Sejajar dengan Tombol) */}
            <div className="w-full h-full rounded-xl border border-[#B8C8DB] bg-[#FDFFEB] p-3 shadow-2xs flex flex-col justify-between">
              <div className="flex flex-col flex-1 min-h-0">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#DEE6BD] shrink-0">
                  <div>
                    <h2 className="text-xs sm:text-sm font-serif font-bold text-[#4B2E1F]">
                      Hasil Slot ({photos.length}/{frameCount})
                    </h2>
                    <span className="text-[10px] text-[#4B2E1F]/70">
                      Pose Foto Terisi
                    </span>
                  </div>
                  {photos.length === frameCount && (
                    <span className="inline-flex items-center gap-1 rounded bg-[#DEE6BD] text-[#4B2E1F] border border-[#C5D09D] px-1.5 py-0.5 text-[10px] font-bold">
                      <CheckCircle className="h-3 w-3 text-[#4B2E1F]" />
                      <span>Lengkap</span>
                    </span>
                  )}
                </div>

                {/* Vertical Photo Slots List (Scroll di dalam slot) */}
                <div className="flex-1 min-h-0 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto max-h-[380px] lg:max-h-[430px] no-scrollbar py-0.5">
                  {shots.map((shot, idx) => (
                    <div
                      key={shot}
                      className="group relative w-20 sm:w-24 lg:w-full aspect-[4/3] lg:aspect-[16/10] shrink-0 overflow-hidden rounded-xl border border-[#DEE6BD] bg-white shadow-2xs transition-all hover:shadow-md flex flex-col justify-between"
                    >
                      {photos[idx] ? (
                        <>
                          <img
                            src={photos[idx]}
                            alt={`Pose ${shot}`}
                            className="h-full w-full object-cover"
                          />

                          {/* Slot badge */}
                          <span className="absolute top-1 left-1 rounded bg-[#4B2E1F]/85 text-[#FDFFEB] px-1.5 py-0.5 text-[9px] font-bold shadow-xs">
                            #{shot}
                          </span>

                          {/* Retake badge */}
                          <div className="absolute bottom-1 right-1 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                            {photoSource === 'camera' ? (
                              <button
                                onClick={() => handleRetakeSingleShot(idx)}
                                disabled={isShooting}
                                className="inline-flex items-center gap-1 rounded bg-[#4B2E1F] hover:bg-[#3D2418] text-[#FDFFEB] px-1.5 py-0.5 text-[9px] font-semibold shadow-xs cursor-pointer transition-colors"
                                title={`Ulangi Foto Pose #${shot}`}
                              >
                                <RefreshCw className="h-2 w-2" />
                                <span>Retake</span>
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  const updated = [...photos];
                                  updated.splice(idx, 1);
                                  setPhotos(updated);
                                }}
                                className="inline-flex items-center gap-1 rounded bg-white text-red-600 hover:bg-red-50 px-1.5 py-0.5 text-[9px] font-semibold shadow-xs cursor-pointer transition-colors"
                                title="Hapus Foto"
                              >
                                <span>Hapus</span>
                              </button>
                            )}
                          </div>

                          {/* Hover Overlay with Retake Action */}
                          <div className="hidden sm:flex absolute inset-0 bg-[#4B2E1F]/60 opacity-0 group-hover:opacity-100 transition-opacity flex-col items-center justify-center p-1.5 gap-1">
                            <span className="text-[10px] font-bold text-[#FDFFEB]">Pose #{shot}</span>
                            {photoSource === 'camera' ? (
                              <button
                                onClick={() => handleRetakeSingleShot(idx)}
                                disabled={isShooting}
                                className="inline-flex items-center gap-1 rounded-md bg-[#FDFFEB] text-[#4B2E1F] hover:bg-white px-2 py-1 text-[10px] font-bold shadow-xs cursor-pointer transition-transform active:scale-95"
                              >
                                <RefreshCw className="h-2.5 w-2.5 text-[#4B2E1F]" />
                                <span>Retake</span>
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  const updated = [...photos];
                                  updated.splice(idx, 1);
                                  setPhotos(updated);
                                }}
                                className="inline-flex items-center gap-1 rounded-md bg-white text-red-600 hover:bg-red-50 px-2 py-1 text-[10px] font-bold shadow-xs cursor-pointer"
                              >
                                <span>Hapus</span>
                              </button>
                            )}
                          </div>
                        </>
                      ) : (
                        <div className="h-full w-full flex items-center justify-center gap-2 p-2 bg-[#FDFFEB]/60">
                          <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-[#4B2E1F]/50 border border-[#DEE6BD] shrink-0">
                            <Camera className="h-3 w-3" />
                          </div>
                          <div className="text-left">
                            <span className="text-[11px] font-bold text-[#4B2E1F] block leading-tight">Slot #{shot}</span>
                            <span className="text-[9px] text-[#4B2E1F]/60 block leading-tight">Kosong</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA aligned with bottom action buttons */}
              <div className="mt-2.5 pt-2 border-t border-[#DEE6BD] shrink-0">
                {photos.length === frameCount ? (
                  <button
                    onClick={handleProceedToFilters}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#4B2E1F] hover:bg-[#3D2418] py-2 px-3 text-xs sm:text-sm font-semibold text-[#FDFFEB] border border-[#4B2E1F] shadow-xs transition-colors cursor-pointer"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-[#F4B8A5]" />
                    <span>Lanjut ke Filter</span>
                    <ChevronRight className="h-3.5 w-3.5 text-[#FDFFEB]" />
                  </button>
                ) : (
                  <div className="flex items-center justify-between text-[11px] text-[#4B2E1F]/70 px-1 py-1 font-medium">
                    <span>{frameCount - photos.length} pose tersisa</span>
                    <span className="text-[10px] bg-[#DEE6BD] px-1.5 py-0.5 rounded text-[#4B2E1F] font-semibold">
                      {photos.length}/{frameCount}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
