import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface BrutalistButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  asChild?: boolean;
}

const brutalistVariants = {
  primary: 'stroke-yellow-pink' as const, // Yellow border, pink hover
  secondary: 'stroke-onyx-crimson' as const, // Onyx border, crimson hover  
  accent: 'brutalist-accent' as const // Accent with shadow effect
};

export const BrutalistButton: React.FC<BrutalistButtonProps> = ({
  children,
  variant = 'primary',
  size = 'default',
  className,
  asChild = false,
  ...props
}) => {
  return (
    <Button
      variant={brutalistVariants[variant]}
      size={size}
      className={cn(
        'focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 min-h-[44px]',
        className
      )}
      asChild={asChild}
      {...props}
    >
      {children}
    </Button>
  );
};