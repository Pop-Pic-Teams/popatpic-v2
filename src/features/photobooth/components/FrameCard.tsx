import React from 'react';
import type { FrameTemplate } from '../../../types/photobooth';
import { Camera } from 'lucide-react';

interface FrameCardProps {
  frame: FrameTemplate;
  isSelected?: boolean;
  onSelect: (frame: FrameTemplate) => void;
}

export const FrameCard: React.FC<FrameCardProps> = ({
  frame,
  isSelected = false,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(frame)}
      className={`group relative flex flex-col overflow-hidden rounded-xl border bg-white transition-all duration-200 cursor-pointer ${
        isSelected
          ? 'border-[#4B2E1F] shadow-md ring-2 ring-[#D2DDEA]'
          : 'border-[#919386]/25 hover:border-[#4B2E1F] hover:shadow-sm'
      }`}
    >
      <div className="relative aspect-[4000/5900] w-full overflow-hidden bg-[#FDFFEB] p-3 flex items-center justify-center">
        <img
          src={frame.image}
          alt={frame.name}
          className="h-full w-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-102"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 rounded-md bg-[#FDFFEB]/95 backdrop-blur-xs px-2 py-0.5 text-[10px] font-bold text-[#4B2E1F] shadow-2xs border border-[#919386]/30">
          {frame.count} Poses
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-3.5 border-t border-[#919386]/20">
        <div>
          <h3 className="font-serif text-sm font-semibold text-[#4B2E1F] line-clamp-1 group-hover:text-[#919386] transition-colors">
            {frame.name}
          </h3>
          <p className="text-[11px] text-[#919386] line-clamp-1 mt-0.5">
            By {frame.author}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="rounded-md bg-[#D2DDEA] px-2 py-0.5 text-[10px] font-semibold text-[#4B2E1F] border border-[#B8C8DB]">
            {frame.category}
          </span>
          <button
            type="button"
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#D2DDEA] hover:bg-[#C2CEE0] text-[#4B2E1F] border border-[#B8C8DB] shadow-2xs transition-colors"
          >
            <Camera className="h-3.5 w-3.5 text-[#4B2E1F]" />
          </button>
        </div>
      </div>
    </div>
  );
};
