import { useEffect, useMemo, useState } from "react";
import { format, formatDistanceToNowStrict, parseISO } from "date-fns";

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
    const date = parseISO(info.timestamp);
    const absolute = format(date, "MMMM d, yyyy");
    const relative = formatDistanceToNowStrict(date, { addSuffix: true });
    return { absolute, relative, iso: info.timestamp } as const;
  }, [info?.timestamp]);

  if (!content) {
    // Fallback if build info is missing
    return (
      <p className="text-xs text-accent mb-4 md:mb-6" aria-live="polite">
        Last updated: Unknown
      </p>
    );
  }

  return (
    <p className="text-xs sm:text-sm text-accent mb-4 md:mb-6" aria-live="polite">
      Last updated: <time dateTime={content.iso}>{content.absolute}</time> • {content.relative}
    </p>
  );
}
