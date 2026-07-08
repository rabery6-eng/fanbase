"use client";

import type { SearchResult } from "@/lib/search-data";

type SearchResultCardProps = {
  result: SearchResult;
  color: string;
  onOpenPlayer?: (playerId: string) => void;
};

export function SearchResultCard({
  result,
  color,
  onOpenPlayer,
}: SearchResultCardProps) {
  const clickable = result.type === "선수";

  return (
    <button
      type="button"
      onClick={() => {
        if (result.type === "선수") {
          onOpenPlayer?.(result.playerId);
        }
      }}
      className="block w-full rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-slate-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
      disabled={!clickable}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="rounded-full px-3 py-1 text-[11px] font-black"
          style={{ backgroundColor: `${color}12`, color }}
        >
          {result.type}
        </span>
        {clickable && (
          <span className="text-xs font-black text-slate-400">Player Hub</span>
        )}
      </div>
      <h2 className="mt-4 text-lg font-black tracking-[-0.03em] text-slate-950">
        {result.title}
      </h2>
      <p className="mt-1 text-xs font-bold text-slate-400">{result.subtitle}</p>
      <p className="mt-3 text-sm font-medium leading-6 text-slate-500">
        {result.description}
      </p>
    </button>
  );
}
