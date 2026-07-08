"use client";

import type { PlayerRecord } from "@/lib/records";

type PlayerNewsProps = {
  player: PlayerRecord;
};

export function PlayerNews({ player }: PlayerNewsProps) {
  const news = [
    `${player.name}, 최근 10경기 지표 상승세`,
    `${player.team.name} 핵심 선수 컨디션 리포트`,
    `오늘 경기에서 주목할 매치업`,
  ];

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
        관련 뉴스
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
