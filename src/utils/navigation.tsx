'use client';

import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSession, PhotoSessionState } from '../context/SessionContext';

export interface NavigateOptions {
  state?: PhotoSessionState;
  replace?: boolean;
}

export function useNavigate() {
  const router = useRouter();
  const { setNavState } = useSession();

  return useCallback(
    (to: string | number, options?: NavigateOptions) => {
      if (typeof to === 'number') {
        if (to < 0) {
          router.back();
        } else {
          router.forward();
        }
        return;
      }

      if (options?.state) {
        setNavState(options.state);
      }

      if (options?.replace) {
        router.replace(to);
      } else {
        router.push(to);
      }
    },
    [router, setNavState]
  );
}

export function useLocation() {
  const pathname = usePathname();
  const { navState } = useSession();

  return useMemo(() => {
    const search = typeof window !== 'undefined' ? window.location.search : '';
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    return {
      pathname: pathname || '/',
      search,
      state: navState,
      hash,
    };
  }, [pathname, navState]);
}

export interface NavigateProps {
  to: string;
  state?: PhotoSessionState;
  replace?: boolean;
}

export const Navigate: React.FC<NavigateProps> = ({ to, state, replace }) => {
  const router = useRouter();
  const { setNavState } = useSession();
  const navigatedRef = useRef(false);
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    if (navigatedRef.current) return;
    navigatedRef.current = true;

    if (stateRef.current) {
      setNavState(stateRef.current);
    }

    if (replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  }, [to, replace, router, setNavState]);

  return null;
};

export const Link: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    to: string;
    state?: PhotoSessionState;
    replace?: boolean;
    children?: React.ReactNode;
    className?: string;
  }
> = ({ to, state, replace, children, className, onClick, ...rest }) => {
  const navigate = useNavigate();

  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick(e);
        navigate(to, { state, replace });
      }}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
};
