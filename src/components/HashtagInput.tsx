import React, { useState, KeyboardEvent, ClipboardEvent } from 'react';
import { Hash, X } from 'lucide-react';

export interface HashtagInputProps {
  tags: string[];
  onChange: (tags: string[]) => void;
  maxTags?: number;
  placeholder?: string;
  label?: string;
  helperText?: string;
}

/**
 * Komponen Input Hashtag untuk Creator
 * Mengubah input teks berpemisah koma (,), spasi ( ), atau Enter menjadi visual chips (kotak kecil)
 * Siap untuk diintegrasikan ke payload Supabase (kolom tags: text[])
 */
export const HashtagInput: React.FC<HashtagInputProps> = ({
  tags,
  onChange,
  maxTags = 12,
  placeholder = 'Ketik hashtag (cth: wisuda, lucu, retro)...',
  label = 'Hashtags / Kata Kunci Bebas',
  helperText = 'Tekan koma, spasi, atau Enter untuk menambahkan tag. Creator bebas menginput kata kunci.',
}) => {
  const [inputValue, setInputValue] = useState('');

  // Membersihkan dan memformat kata menjadi tag valid
  const formatTag = (raw: string): string => {
    return raw
      .trim()
      .replace(/^#+/, '')
      .replace(/[^a-zA-Z0-9_\-\u00C0-\u024F]/g, '')
      .toLowerCase();
  };

  // Menambahkan satu atau beberapa tag
  const addTags = (rawInput: string) => {
    // Pisahkan berdasarkan koma atau spasi
    const rawTokens = rawInput.split(/[\s,]+/);
    const validTokens: string[] = [];

    rawTokens.forEach((token) => {
      const clean = formatTag(token);
      if (
        clean.length > 0 &&
        !tags.some((t) => t.toLowerCase() === clean) &&
        !validTokens.includes(clean)
      ) {
        validTokens.push(clean);
      }
    });

    if (validTokens.length > 0) {
      const nextTags = [...tags, ...validTokens].slice(0, maxTags);
      onChange(nextTags);
    }
    setInputValue('');
  };

  // Menghapus tag berdasarkan index atau nama
  const removeTag = (indexToRemove: number) => {
    const nextTags = tags.filter((_, idx) => idx !== indexToRemove);
    onChange(nextTags);
  };

  // Keyboard navigation & trigger
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',' || e.key === ' ') {
      e.preventDefault();
      if (inputValue.trim()) {
        addTags(inputValue);
      }
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      // Hapus chip terakhir jika input kosong dan menekan backspace
      e.preventDefault();
      removeTag(tags.length - 1);
    }
  };

  // Handle paste string dengan koma atau spasi
  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    if (pastedText) {
      addTags(pastedText);
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs font-semibold text-[#2C211B] mb-1.5 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Hash className="h-3.5 w-3.5 text-orange-600" />
            <span>{label}</span>
          </span>
          <span className="text-[10px] text-stone-400 font-normal">
            {tags.length}/{maxTags} tag
          </span>
        </label>
      )}

      {/* Visual Chip Container Box */}
      <div className="flex flex-wrap items-center gap-1.5 p-2 rounded-lg border border-[#EDE3D5] bg-white min-h-[44px] focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/10 transition-all">
        {/* Rendered Visual Chips */}
        {tags.map((tag, idx) => (
          <span
            key={`${tag}-${idx}`}
            className="inline-flex items-center gap-1 rounded-md bg-orange-50 border border-orange-200 text-orange-800 px-2 py-1 text-xs font-medium shadow-2xs animate-in fade-in"
          >
            <span className="text-orange-500 font-bold select-none">#</span>
            <span>{tag}</span>
            <button
              type="button"
              onClick={() => removeTag(idx)}
              className="text-orange-400 hover:text-orange-700 hover:bg-orange-100/80 rounded-sm p-0.5 transition-colors cursor-pointer"
              title={`Hapus #${tag}`}
              aria-label={`Hapus tag ${tag}`}
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}

        {/* Text Input */}
        {tags.length < maxTags && (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            onBlur={() => {
              if (inputValue.trim()) {
                addTags(inputValue);
              }
            }}
            placeholder={tags.length === 0 ? placeholder : 'Tambah hashtag...'}
            className="flex-1 min-w-[130px] border-none bg-transparent py-1 px-1 text-xs text-[#2C211B] placeholder-stone-400 focus:outline-none"
          />
        )}
      </div>

      {/* Helper text */}
      {helperText && (
        <p className="mt-1 text-[10px] text-stone-400 leading-normal">
          {helperText}
        </p>
      )}
    </div>
  );
};
