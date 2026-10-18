import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, leftIcon, rightIcon, className = '', id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-xs font-medium text-[#2C211B] mb-1.5">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3 flex items-center pointer-events-none text-stone-400">
              {leftIcon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={`w-full rounded-lg border bg-[#FFFDF9] text-xs text-[#2C211B] transition-colors placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 disabled:bg-stone-50 disabled:cursor-not-allowed ${
              leftIcon ? 'pl-9' : 'pl-3'
            } ${rightIcon ? 'pr-9' : 'pr-3'} py-2.5 ${
              error
                ? 'border-red-400 focus:border-red-500'
                : 'border-[#EDE3D5] focus:border-orange-500'
            } ${className}`}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 flex items-center pointer-events-none text-stone-400">
              {rightIcon}
            </div>
          )}
        </div>
        {error ? (
          <p className="mt-1 text-[11px] text-red-600 font-medium">{error}</p>
        ) : helperText ? (
          <p className="mt-1 text-[11px] text-stone-400">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';
