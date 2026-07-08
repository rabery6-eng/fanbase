"use client";

import type { Game } from "@/lib/games";
import type { Team } from "@/lib/teams";

type TodayGameCardProps = {
  game: Game;
  team: Team;
};

export function TodayGameCard({ game, team }: TodayGameCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
          오늘 경기
        </h2>
        <span
          className="rounded-full px-3 py-1 text-xs font-black"
          style={{ backgroundColor: `${team.color}14`, color: team.color }}
        >
          {game.status}
        </span>
      </div>
      <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <TeamScore name={game.awayTeam.name} score={game.awayScore} />
        <span className="text-xs font-black text-slate-300">VS</span>
        <TeamScore name={game.homeTeam.name} score={game.homeScore} alignRight />
      </div>
      <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm font-bold text-slate-600">
        {game.time} · {game.stadium} · {game.awayPitcher} / {game.homePitcher}
      </p>
    </article>
  );
}

function TeamScore({
  name,
  score,
  alignRight = false,
}: {
  name: string;
  score: number;
  alignRight?: boolean;
}) {
  return (
    <div className={alignRight ? "text-right" : ""}>
      <p className="truncate text-xs font-bold text-slate-500">{name}</p>
      <p className="mt-1 text-3xl font-black tracking-[-0.06em] text-slate-950">
        {score}
      </p>
    </div>
  );
}
