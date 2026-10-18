'use client';

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

export interface PhotoSessionState {
  photos?: string[];
  frameImage?: string;
  slots?: any[];
  figmaWidth?: number;
  frameCount?: number;
  frameName?: string;
  creatorName?: string;
  filterId?: string;
  initialFilterId?: string;
  currentPhase?: number;
  from?: any;
  [key: string]: any;
}

interface SessionContextType {
  navState: PhotoSessionState;
  setNavState: (state: PhotoSessionState | ((prev: PhotoSessionState) => PhotoSessionState)) => void;
  clearSession: () => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

const STORAGE_KEY = 'pop_pic_photobooth_session';

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [navState, setNavStateInternal] = useState<PhotoSessionState>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = sessionStorage.getItem(STORAGE_KEY);
        if (stored) return JSON.parse(stored);
      } catch (e) {
        console.error('Failed to read session storage', e);
      }
    }
    return {};
  });

  const setNavState = useCallback(
    (state: PhotoSessionState | ((prev: PhotoSessionState) => PhotoSessionState)) => {
      setNavStateInternal((prev) => {
        const next = typeof state === 'function' ? state(prev) : state;
        try {
          if (JSON.stringify(prev) === JSON.stringify(next)) {
            return prev;
          }
        } catch {
          // Ignore serialization error
        }
        if (typeof window !== 'undefined') {
          try {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
          } catch (e) {
            console.error('Failed to persist session state', e);
          }
        }
        return next;
      });
    },
    []
  );

  const clearSession = useCallback(() => {
    setNavStateInternal((prev) => {
      if (Object.keys(prev).length === 0) return prev;
      return {};
    });
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.removeItem(STORAGE_KEY);
      } catch {}
    }
  }, []);

  const value = useMemo(
    () => ({ navState, setNavState, clearSession }),
    [navState, setNavState, clearSession]
  );

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    return {
      navState: {},
      setNavState: () => {},
      clearSession: () => {},
    };
  }
  return context;
};
