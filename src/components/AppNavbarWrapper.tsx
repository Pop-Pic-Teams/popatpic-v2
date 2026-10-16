'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';

export const AppNavbarWrapper: React.FC = () => {
  const pathname = usePathname();

  const showMainNavbar =
    pathname === '/' ||
    pathname === '/frames' ||
    pathname === '/browse-frames' ||
    pathname === '/session' ||
    pathname === '/select-frame';

  if (!showMainNavbar) return null;

  return <Navbar />;
};
