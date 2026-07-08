"use client";

import type { Game } from "@/lib/games";
import type { Team } from "@/lib/teams";

type GameDetailHeaderProps = {
  game: Game;
  team: Team;
  isMyTeamGame: boolean;
  onBack: () => void;
  onOpenPlayer: () => void;
};

export function GameDetailHeader({
  game,
  team,
  isMyTeamGame,
  onBack,
  onOpenPlayer,
}: GameDetailHeaderProps) {
  return (
    <header className="px-4 pt-5 sm:px-6">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
        <div
          className="h-2"
          style={{ backgroundColor: team.color }}
          aria-hidden="true"
        />
        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onBack}
              className="rounded-full bg-slate-100 px-3 py-2 text-xs font-black text-slate-600 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
            >
              뒤로가기
            </button>
            <div className="flex items-center gap-2">
              {isMyTeamGame && (
                <span
                  className="rounded-full px-3 py-1.5 text-xs font-black"
                  style={{ backgroundColor: `${team.color}14`, color: team.color }}
                >
                  내 팀 경기
                </span>
              )}
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-black text-slate-500">
                {game.status}
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <HeaderTeam name={game.awayTeam.name} score={game.awayScore} />
            <div className="text-center">
              <p className="text-[11px] font-black text-slate-300">VS</p>
              <p className="mt-2 rounded-full bg-slate-950 px-3 py-1.5 text-xs font-black text-white">
                {game.time}
              </p>
            </div>
            <HeaderTeam name={game.homeTeam.name} score={game.homeScore} alignRight />
          </div>

          <div className="mt-6 rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-black text-slate-900">{game.stadium}</p>
            <p className="mt-2 text-xs font-medium leading-5 text-slate-500">
              선발 투수 · 원정 {game.awayPitcher} / 홈 {game.homePitcher}
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenPlayer}
            className="mt-4 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 transition hover:border-slate-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
          >
            관련 선수 허브 보기
          </button>
        </div>
      </section>
    </header>
  );
}

function HeaderTeam({
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
      <p className="truncate text-sm font-black text-slate-600">{name}</p>
      <p className="mt-2 text-5xl font-black tracking-[-0.07em] text-slate-950">
        {score}
      </p>
    </div>
  );
}
