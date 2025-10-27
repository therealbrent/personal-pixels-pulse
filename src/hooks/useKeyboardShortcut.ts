import { useEffect } from 'react';

export function useKeyboardShortcut(
  key: string,
  callback: () => void,
  options?: {
    ctrl?: boolean;
    meta?: boolean;
    shift?: boolean;
    alt?: boolean;
  }
) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const matchesKey = e.key.toLowerCase() === key.toLowerCase();
      const matchesCtrl = options?.ctrl ? e.ctrlKey : !e.ctrlKey;
      const matchesMeta = options?.meta ? e.metaKey : !e.metaKey;
      const matchesShift = options?.shift ? e.shiftKey : !e.shiftKey;
      const matchesAlt = options?.alt ? e.altKey : !e.altKey;

      // For ⌘K / Ctrl+K: either ctrl+k OR meta+k should work
      const isCommandK = key === 'k' && (options?.ctrl || options?.meta);
      if (isCommandK) {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          callback();
          return;
        }
      }

      if (
        matchesKey &&
        matchesCtrl &&
        matchesMeta &&
        matchesShift &&
        matchesAlt
      ) {
        e.preventDefault();
        callback();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [key, callback, options]);
}
