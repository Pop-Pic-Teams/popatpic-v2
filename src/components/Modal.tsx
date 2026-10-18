'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showCloseButton?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  maxWidth = 'md',
  showCloseButton = true,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`relative w-full ${maxWidthStyles[maxWidth]} rounded-xl border border-[#919386]/30 bg-white shadow-xl p-6 z-10 transition-all font-sans overflow-hidden`}
        role="dialog"
        aria-modal="true"
      >
        {(title || showCloseButton) && (
          <div className="flex items-start justify-between mb-4 border-b border-[#919386]/20 pb-3">
            <div>
              {title && (
                <h3 className="text-lg font-serif font-normal text-[#4B2E1F]">{title}</h3>
              )}
              {description && (
                <p className="text-xs text-[#919386] mt-0.5">{description}</p>
              )}
            </div>
            {showCloseButton && (
              <button
                onClick={onClose}
                className="rounded-lg p-1 text-[#919386] hover:text-[#4B2E1F] hover:bg-[#D2DDEA]/40 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        )}
        <div className="max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};
