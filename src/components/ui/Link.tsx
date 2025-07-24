// src/components/ui/Link.tsx
import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  underline?: boolean;
}

export const Link = ({ 
  className = '', 
  underline = false, 
  children,
  ...props 
}: LinkProps) => {
  return (
    <a
      className={`text-blue-600 hover:text-blue-800 transition-colors ${
        underline ? 'underline' : 'no-underline'
      } ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};