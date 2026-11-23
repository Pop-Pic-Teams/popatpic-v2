import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Instrument_Sans, Instrument_Serif, Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '../context/AuthContext';
import { SessionProvider } from '../context/SessionContext';
import { AppNavbarWrapper } from '../components/AppNavbarWrapper';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-instrument-sans',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pop@Pic! Photobooth',
  description: 'Interactive digital photobooth web application with custom aesthetic frames, live webcam capture, photo filters, and instant QR sharing.',
  openGraph: {
    title: 'Pop@Pic! Photobooth',
    description: 'Interactive digital photobooth web application with custom aesthetic frames, live webcam capture, photo filters, and instant QR sharing.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pop@Pic! Photobooth',
    description: 'Interactive digital photobooth web application with custom aesthetic frames, live webcam capture, photo filters, and instant QR sharing.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${inter.variable}`}
    >
      <head>
      </head>
      <body className="min-h-screen bg-[#FDFFEB] text-[#4B2E1F] font-sans antialiased">
        <AuthProvider>
          <SessionProvider>
            <Suspense fallback={null}>
              <AppNavbarWrapper />
              {children}
            </Suspense>
          </SessionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
