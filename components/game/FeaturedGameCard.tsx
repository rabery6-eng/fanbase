"use client";

import type { Game } from "@/lib/games";
import type { Team } from "@/lib/teams";
import { GameActionButtons } from "./GameActionButtons";
import { MatchupInfo } from "./MatchupInfo";

type FeaturedGameCardProps = {
  game: Game;
  team: Team;
};

export function FeaturedGameCard({ game, team }: FeaturedGameCardProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
      <div
        className="h-2"
        style={{ backgroundColor: team.color }}
        aria-hidden="true"
      />
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span
            className="rounded-full px-3 py-1.5 text-xs font-black"
            style={{ backgroundColor: `${team.color}14`, color: team.color }}
          >
            내 팀 경기
          </span>
          <span className="text-xs font-bold text-slate-400">
            {game.status} · {game.time}
          </span>
        </div>

        <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <ScoreTeam name={game.awayTeam.name} score={game.awayScore} />
          <span className="text-xs font-black text-slate-300">VS</span>
          <ScoreTeam name={game.homeTeam.name} score={game.homeScore} alignRight />
        </div>

        <div className="mt-5 rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-bold text-slate-900">{game.stadium}</p>
          <p className="mt-1 text-xs font-medium text-slate-500">
            원정 {game.awayTeam.name} · 홈 {game.homeTeam.name}
          </p>
        </div>

        <MatchupInfo game={game} team={team} />
        <GameActionButtons team={team} />
      </div>
    </article>
  );
}

function ScoreTeam({
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
      <p className="truncate text-sm font-bold text-slate-500">{name}</p>
      <p className="mt-2 text-4xl font-black tracking-[-0.06em] text-slate-950">
        {score}
      </p>
    </div>
  );
}
