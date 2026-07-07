"use client";

import type { Game } from "@/lib/games";
import type { Team } from "@/lib/teams";

type AIGameBriefingProps = {
  game: Game;
  team: Team;
};

const briefingByStatus = {
  예정: "오늘 경기는 선발 매치업과 초반 득점이 핵심입니다.",
  진행중: "현재 흐름은 불펜 운영과 중심타선의 집중력에 달려 있습니다.",
  종료: "오늘 경기는 중반 이후 집중력 차이가 승부를 갈랐습니다.",
};

export function AIGameBriefing({ game, team }: AIGameBriefingProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
          AI 경기 브리핑
        </h2>
        <span
          className="rounded-full px-2.5 py-1 text-[11px] font-black"
          style={{ backgroundColor: `${team.color}14`, color: team.color }}
        >
          {game.status}
        </span>
      </div>
      <p className="mt-4 text-sm font-semibold leading-6 text-slate-700">
        {briefingByStatus[game.status]}
      </p>
    </article>
  );
}
