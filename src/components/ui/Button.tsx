// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const baseClasses = "rounded-lg border px-6 py-3 text-base font-medium font-sans transition-colors duration-250";
    
    const variantClasses = variant === 'default' 
      ? "bg-gray-900 text-white hover:bg-gray-800 border-transparent hover:border-gray-700" 
      : "bg-transparent text-gray-900 border-gray-300 hover:bg-gray-100";

    return (
      <button
        className={`${baseClasses} ${variantClasses} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";