'use client';

import React from 'react';
import { Navbar } from '../components/Navbar';

interface UserLayoutProps {
  children?: React.ReactNode;
}

export const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C211B] font-sans antialiased flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};
