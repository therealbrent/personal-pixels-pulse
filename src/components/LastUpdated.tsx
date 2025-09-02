import { useEffect, useMemo, useState } from "react";

// Replaced date-fns with native browser APIs (-15KB bundle reduction)
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const absolute = date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const now = Date.now();
  const diffMs = now - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  
  let relative: string;
  if (diffDays > 0) {
    relative = `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
  } else if (diffHours > 0) {
    relative = `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
  } else if (diffMinutes > 0) {
    relative = `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
  } else {
    relative = 'just now';
  }
  
  return { absolute, relative, iso: dateString };
};

export interface BuildInfoMeta {
  node?: string | null;
  gitSha?: string | null;
  gitRef?: string | null;
  env?: string | null;
}

export interface BuildInfo {
  timestamp: string; // ISO 8601 string
  meta?: BuildInfoMeta;
}

function useBuildInfo() {
  const [info, setInfo] = useState<BuildInfo | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    const url = `${import.meta.env.BASE_URL}build-info.json`;
    fetch(url, { cache: "no-store" })
      .then(async (res) => {
        if (!res.ok) throw new Error(`Failed to load build-info.json: ${res.status}`);
        return res.json();
      })
      .then((data: BuildInfo) => {
        if (!cancelled) setInfo(data);
      })
      .catch((e: Error) => {
        if (!cancelled) setError(e);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { info, error } as const;
}

export default function LastUpdated() {
  const { info } = useBuildInfo();

  const content = useMemo(() => {
    if (!info?.timestamp) return null;
    return formatDate(info.timestamp);
  }, [info?.timestamp]);

  if (!content) {
    // Fallback if build info is missing
    return (
      <p className="text-xs text-primary mb-4 md:mb-6" aria-live="polite">
        Last updated: Unknown
      </p>
    );
  }

  return (
      <p className="text-xs sm:text-sm text-primary mb-4 md:mb-6" aria-live="polite">
        Last updated: <time dateTime={content.iso}>{content.absolute}</time> • {content.relative}
      </p>
  );
}
