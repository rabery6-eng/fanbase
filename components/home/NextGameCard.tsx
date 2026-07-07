"use client";

import type { HomeData } from "@/components/HomePreview";
import type { Team } from "@/lib/teams";

type NextGameCardProps = {
  team: Team;
  nextGame: HomeData["nextGame"];
};

export function NextGameCard({ team, nextGame }: NextGameCardProps) {
  return (
    <article className="h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold tracking-[-0.03em] text-slate-950">
        다음 경기
      </h2>
      <div
        className="mt-4 rounded-2xl p-4"
        style={{
          background: `linear-gradient(135deg, ${team.color}12 0%, #f8fafc 100%)`,
        }}
      >
        <p
          className="text-xs font-black uppercase tracking-[0.16em]"
          style={{ color: team.color }}
        >
          Upcoming
        </p>
        <p className="mt-3 text-2xl font-black tracking-[-0.05em] text-slate-950">
          {nextGame.date}
        </p>
        <p className="mt-2 text-sm font-semibold text-slate-700">
          {nextGame.opponent}
        </p>
        <p className="mt-1 text-sm text-slate-500">{nextGame.stadium}</p>
      </div>
    </article>
  );
}
