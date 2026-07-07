"use client";

import type { HomeData } from "@/components/HomePreview";

type TeamNewsCardProps = {
  news: HomeData["news"];
};

export function TeamNewsCard({ news }: TeamNewsCardProps) {
  return (
    <article className="h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold tracking-[-0.03em] text-slate-950">
          팀 뉴스
        </h2>
        <button
          type="button"
          className="text-xs font-bold text-slate-400 transition hover:text-slate-700"
        >
          전체
        </button>
      </div>
      <div className="mt-4 divide-y divide-slate-100">
        {news.map((item) => (
          <article key={item.title} className="py-3 first:pt-0 last:pb-0">
            <h3 className="text-sm font-bold leading-5 text-slate-900">
              {item.title}
            </h3>
            <p className="mt-1 text-xs font-medium text-slate-400">
              {item.source} · {item.age}
            </p>
          </article>
        ))}
      </div>
    </article>
  );
}
