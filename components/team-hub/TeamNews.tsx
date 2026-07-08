"use client";

type TeamNewsProps = {
  news: string[];
};

export function TeamNews({ news }: TeamNewsProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
        팀 뉴스
      </h2>
      <div className="mt-4 divide-y divide-slate-100">
        {news.map((item) => (
          <p
            key={item}
            className="py-3 text-sm font-bold leading-5 text-slate-800 first:pt-0 last:pb-0"
          >
            {item}
          </p>
        ))}
      </div>
    </article>
  );
}
