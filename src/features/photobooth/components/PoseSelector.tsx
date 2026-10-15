import React from 'react';

interface PoseSelectorProps {
  counts: number[];
  selectedCount: number;
  onSelect: (count: number) => void;
}

export const PoseSelector: React.FC<PoseSelectorProps> = ({
  counts,
  selectedCount,
  onSelect,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {counts.map((count) => {
        const isSelected = selectedCount === count;
        return (
          <button
            key={count}
            type="button"
            onClick={() => onSelect(count)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              isSelected
                ? 'bg-[#D2DDEA] text-[#4B2E1F] border border-[#B8C8DB] shadow-xs'
                : 'border border-[#919386]/30 bg-white text-[#4B2E1F] hover:border-[#4B2E1F] hover:bg-[#DEE6BD]/30'
            }`}
          >
            {count} {count === 1 ? 'Pose' : 'Poses'}
          </button>
        );
      })}
    </div>
  );
};
