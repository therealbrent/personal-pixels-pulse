import { useState, useEffect } from 'react';
import { Command } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CommandFABProps {
  onOpenCommandPalette: () => void;
}

export function CommandFAB({ onOpenCommandPalette }: CommandFABProps) {
  const [isMac, setIsMac] = useState(false);
  const [shouldRadiate, setShouldRadiate] = useState(true);

  useEffect(() => {
    // Detect OS
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);

    // Radiate animation: synchronized with header pulse (13s cycle)
    const radiateInterval = setInterval(() => {
      setShouldRadiate(true);
      setTimeout(() => setShouldRadiate(false), 3000);
    }, 13000);

    return () => clearInterval(radiateInterval);
  }, []);

  return (
    <button
      onClick={onOpenCommandPalette}
      className={cn(
        "flex fixed right-0 top-1/2 -translate-y-1/2 z-50",
        "flex-col items-center justify-center gap-2",
        // Desktop sizing
        "lg:w-16 lg:py-6 lg:px-3",
        // Mobile sizing - slightly smaller but still prominent
        "w-14 py-5 px-2",
        "bg-accent text-accent-foreground",
        "border-[6px] border-foreground",
        "shadow-neo-md hover:shadow-neo-lg",
        "transition-all duration-300",
        "hover:w-20 hover:py-8",
        "focus:ring-4 focus:ring-focus-ring focus:ring-offset-4",
        "group",
        // Radiating border animation
        shouldRadiate && "animate-[radiate_3s_ease-in-out]"
      )}
      style={{
        borderTopLeftRadius: '12px',
        borderBottomLeftRadius: '12px',
        borderRight: 'none',
      }}
      aria-label={`Open command palette (${isMac ? '⌘K' : 'Ctrl+K'})`}
    >
      {/* Command Icon - OS-specific or Menu icon */}
      {isMac ? (
        <Command 
          size={28} 
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        />
      ) : (
        <div className="flex flex-col gap-1 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
          <div className="w-6 h-[3px] bg-accent-foreground rounded-sm" />
          <div className="w-6 h-[3px] bg-accent-foreground rounded-sm" />
          <div className="w-6 h-[3px] bg-accent-foreground rounded-sm" />
        </div>
      )}
      
      {/* Menu Label */}
      <span className="text-xs font-black leading-none tracking-tight">
        MENU
      </span>

      {/* Geometric accents - Hot Pink + Onyx clash */}
      <div 
        className="absolute top-2 left-2 w-3 h-3 bg-cobalt border-2 border-accent-foreground rotate-45 opacity-80"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-3 right-2 w-2 h-2 bg-accent-foreground border-2 border-accent-foreground -rotate-12 opacity-60"
        aria-hidden="true"
      />
    </button>
  );
}