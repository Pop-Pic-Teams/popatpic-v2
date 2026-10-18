import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none focus:outline-hidden focus:ring-2 focus:ring-orange-500/30';

    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-xs px-4 py-2 gap-2',
      lg: 'text-sm px-5 py-2.5 gap-2.5',
      icon: 'h-9 w-9 p-0',
    };

    const variantStyles = {
      primary:
        'bg-[#4B2E1F] text-[#FDFFEB] border border-[#4B2E1F] shadow-xs hover:bg-[#3D2418] active:scale-[0.98]',
      secondary:
        'bg-[#F4B8A5] border border-[#DE9784] text-[#4B2E1F] hover:bg-[#EAA996] shadow-xs active:scale-[0.98]',
      outline:
        'border border-[#4B2E1F]/40 bg-transparent text-[#4B2E1F] hover:bg-[#D2DDEA]/50 shadow-2xs',
      danger:
        'bg-red-600 text-white hover:bg-red-700 active:scale-[0.98] shadow-xs',
      ghost:
        'text-[#4B2E1F]/70 hover:bg-[#D2DDEA]/40 hover:text-[#4B2E1F]',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-current" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
