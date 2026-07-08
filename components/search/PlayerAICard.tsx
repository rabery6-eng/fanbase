"use client";

import type { PlayerRecord } from "@/lib/records";

type PlayerAICardProps = {
  player: PlayerRecord;
  color: string;
};

export function PlayerAICard({ player, color }: PlayerAICardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
          AI 분석
        </h2>
        <span
          className="rounded-full px-2.5 py-1 text-[11px] font-black"
          style={{ backgroundColor: `${color}14`, color }}
        >
          LIVE
        </span>
      </div>
      <p className="mt-4 text-sm font-semibold leading-6 text-slate-700">
        {player.name}은 최근 경기에서 핵심 지표의 안정성이 높고, 오늘 경기에서도
        초반 흐름을 바꿀 수 있는 선수로 분류됩니다.
      </p>
    </article>
  );
}
