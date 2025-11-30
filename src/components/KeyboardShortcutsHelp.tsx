import { useState } from 'react';
import { Keyboard, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function KeyboardShortcutsHelp() {
  const [isOpen, setIsOpen] = useState(false);

  const shortcuts = [
    { keys: ['j'], description: 'Next year' },
    { keys: ['k'], description: 'Previous year' },
    { keys: ['Shift', '+'], description: 'Zoom in' },
    { keys: ['Shift', '-'], description: 'Zoom out' },
    { keys: ['Shift', '0'], description: 'Reset zoom' },
    { keys: ['Shift', '1-9'], description: 'Jump to decade' },
    { keys: ['?'], description: 'Show shortcuts' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          'fixed bottom-8 right-8 z-40',
          'p-3 bg-background border-4 border-foreground shadow-neo',
          'hover:bg-primary hover:scale-110 transition-all',
          'lg:bottom-auto lg:top-8'
        )}
        aria-label="Show keyboard shortcuts"
        title="Keyboard Shortcuts (?)"
      >
        <Keyboard className="w-5 h-5" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="shortcuts-title"
        >
          <div
            className="bg-background border-4 border-foreground shadow-neo max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <h2 
                id="shortcuts-title"
                className="text-2xl font-black uppercase text-foreground"
              >
                Keyboard Shortcuts
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-accent transition-colors"
                aria-label="Close shortcuts dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {shortcuts.map((shortcut, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b-2 border-muted"
                >
                  <span className="text-sm text-muted-foreground">
                    {shortcut.description}
                  </span>
                  <div className="flex gap-1">
                    {shortcut.keys.map((key, keyIndex) => (
                      <kbd
                        key={keyIndex}
                        className="px-2 py-1 text-xs font-bold bg-muted border-2 border-foreground uppercase"
                      >
                        {key}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Press <kbd className="px-1 py-0.5 bg-muted border border-foreground">?</kbd> to toggle this help
            </p>
          </div>
        </div>
      )}
    </>
  );
}
