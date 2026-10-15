import React from 'react';
import { Sparkles, Camera, Wand2, QrCode, Check } from 'lucide-react';

export interface PhotoSessionStepperProps {
  currentStep: 1 | 2 | 3 | 4;
  className?: string;
  onStepClick?: (step: 1 | 2 | 3 | 4) => void;
}

interface StepItem {
  number: 1 | 2 | 3 | 4;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STEPS: StepItem[] = [
  {
    number: 1,
    title: '1. Choose Frame',
    icon: Sparkles,
  },
  {
    number: 2,
    title: '2. Take Photos',
    icon: Camera,
  },
  {
    number: 3,
    title: '3. Add Filters',
    icon: Wand2,
  },
  {
    number: 4,
    title: '4. Download & Share',
    icon: QrCode,
  },
];

export const PhotoSessionStepper: React.FC<PhotoSessionStepperProps> = ({
  currentStep,
  className = '',
  onStepClick,
}) => {
  return (
    <div className={`w-full max-w-3xl mx-auto px-2 py-1.5 sm:py-2 ${className}`}>
      <div className="relative flex items-center justify-between">
        {/* Continuous background connecting line */}
        <div className="absolute top-3.5 left-8 right-8 h-[2px] bg-[#919386]/25 -z-0" />

        {/* Dynamic active progress bar */}
        <div
          className="absolute top-3.5 left-8 h-[2px] bg-[#4B2E1F] transition-all duration-500 -z-0"
          style={{
            width:
              currentStep === 1
                ? '0%'
                : currentStep === 2
                  ? '33.33%'
                  : currentStep === 3
                    ? '66.66%'
                    : 'calc(100% - 4rem)',
          }}
        />

        {STEPS.map((step) => {
          const isCompleted = currentStep > step.number;
          const isActive = currentStep === step.number;
          const isPending = currentStep < step.number;
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-center group"
            >
              <button
                type="button"
                disabled={!onStepClick || isPending}
                onClick={() => onStepClick && onStepClick(step.number)}
                className={`relative flex h-7 w-7 sm:h-7.5 sm:w-7.5 items-center justify-center rounded-md transition-all duration-300 ${
                  isActive
                    ? 'bg-[#D2DDEA] text-[#4B2E1F] border border-[#B8C8DB] shadow-2xs ring-2 ring-[#D2DDEA]'
                    : isCompleted
                      ? 'bg-[#DEE6BD] text-[#4B2E1F] border border-[#C5D09D] shadow-2xs hover:bg-[#D4DEA7]'
                      : 'bg-white text-[#919386] border border-[#919386]/30'
                } ${onStepClick && !isPending ? 'cursor-pointer' : 'cursor-default'}`}
                aria-current={isActive ? 'step' : undefined}
                title={step.title}
              >
                {isCompleted ? (
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                ) : (
                  <Icon className="h-3.5 w-3.5" />
                )}
              </button>

              {/* Label */}
              <div className="mt-1 text-center">
                <span
                  className={`text-[11px] sm:text-xs font-semibold tracking-tight transition-colors ${
                    isActive
                      ? 'text-[#4B2E1F] font-bold'
                      : isCompleted
                        ? 'text-[#4B2E1F]'
                        : 'text-[#919386]'
                  }`}
                >
                  {step.title}
                </span>

                {/* Active Underline indicator */}
                {isActive && (
                  <div className="mx-auto mt-0.5 h-0.5 w-5 rounded bg-[#4B2E1F] animate-in fade-in" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
