"use client";

import type { Game } from "@/lib/games";

type GameCardProps = {
  game: Game;
};

export function GameCard({ game }: GameCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-black text-slate-500">
          {game.status}
        </span>
        <span className="text-xs font-bold text-slate-400">{game.time}</span>
      </div>

      <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <CompactTeam name={game.awayTeam.name} score={game.awayScore} />
        <span className="text-[11px] font-black text-slate-300">VS</span>
        <CompactTeam name={game.homeTeam.name} score={game.homeScore} alignRight />
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 text-xs font-medium text-slate-500">
        <span>{game.stadium}</span>
        <span>
          {game.awayPitcher} / {game.homePitcher}
        </span>
      </div>
    </article>
  );
}

function CompactTeam({
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
      <p className="mt-1 text-2xl font-black tracking-[-0.05em] text-slate-950">
        {score}
      </p>
    </div>
  );
}
