import { Suspense } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '../context/AuthContext';
import { SessionProvider } from '../context/SessionContext';
import { AppNavbarWrapper } from '../components/AppNavbarWrapper';

export const metadata: Metadata = {
  title: 'Remix Pop@Pic! Photobooth',
  description: 'Interactive digital photobooth web application with custom aesthetic frames, live webcam capture, photo filters, and instant QR sharing.',
  openGraph: {
    title: 'Remix Pop@Pic! Photobooth',
    description: 'Interactive digital photobooth web application with custom aesthetic frames, live webcam capture, photo filters, and instant QR sharing.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remix Pop@Pic! Photobooth',
    description: 'Interactive digital photobooth web application with custom aesthetic frames, live webcam capture, photo filters, and instant QR sharing.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
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
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/main
