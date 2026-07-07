"use client";

import type { HomeData } from "@/components/HomePreview";
import type { Team } from "@/lib/teams";

type TodayGameCardProps = {
  team: Team;
  game: HomeData["todayGame"];
};

export function TodayGameCard({ team, game }: TodayGameCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            Today Game
          </p>
          <h2 className="mt-3 text-xl font-bold tracking-[-0.035em] text-slate-950">
            오늘 경기
          </h2>
        </div>
        <span
          className="rounded-full px-3 py-1.5 text-xs font-bold text-white"
          style={{ backgroundColor: team.color }}
        >
          {game.time}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <TeamPill label={team.name} color={team.color} />
        <span className="text-xs font-black text-slate-300">VS</span>
        <TeamPill label="상대 팀" color="#cbd5e1" alignRight />
      </div>

      <div className="mt-5 rounded-2xl bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-700">{game.opponent}</p>
        <p className="mt-1 text-sm text-slate-500">{game.stadium}</p>
        <p className="mt-3 text-xs leading-5 text-slate-500">{game.note}</p>
      </div>
    </article>
  );
}

function TeamPill({
  label,
  color,
  alignRight = false,
}: {
  label: string;
  color: string;
  alignRight?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 ${alignRight ? "justify-end" : ""}`}
    >
      {!alignRight && (
        <span
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        />
      )}
      <span className="truncate text-sm font-bold text-slate-900">{label}</span>
      {alignRight && (
        <span
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
