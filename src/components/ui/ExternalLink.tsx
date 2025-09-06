import React from 'react';
import { Icon } from './icon';
import { cn } from '@/lib/utils';

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  showIcon?: boolean;
  iconSize?: number;
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'destructive';
  className?: string;
}

const variantStyles = {
  default: 'text-foreground hover:text-primary',
  primary: 'text-primary hover:text-primary/80',
  secondary: 'text-secondary hover:text-secondary/80',
  accent: 'text-accent hover:text-accent/80',
  destructive: 'text-destructive hover:text-destructive/80'
};

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  showIcon = true,
  iconSize = 16,
  variant = 'primary',
  className,
  ...props
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'underline font-semibold inline-flex items-center gap-1 transition-colors',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
      {showIcon && <Icon name="external-link" size={iconSize} />}
    </a>
  );
};