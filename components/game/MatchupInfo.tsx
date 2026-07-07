"use client";

import type { Game } from "@/lib/games";
import type { Team } from "@/lib/teams";

type MatchupInfoProps = {
  game: Game;
  team: Team;
};

export function MatchupInfo({ game, team }: MatchupInfoProps) {
  return (
    <div className="mt-4 grid gap-3">
      <InfoBlock
        label="선발 매치업"
        value={`${game.awayPitcher} vs ${game.homePitcher}`}
      />
      <div className="rounded-2xl border border-slate-100 p-4">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
          최근 5경기 흐름
        </p>
        <div className="mt-3 flex gap-2">
          {game.recentFlow.map((result, index) => (
            <span
              key={`${result}-${index}`}
              className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-black"
              style={
                result === "승"
                  ? { backgroundColor: `${team.color}14`, color: team.color }
                  : { backgroundColor: "#f1f5f9", color: "#94a3b8" }
              }
            >
              {result}
            </span>
          ))}
        </div>
      </div>
      <InfoBlock label="오늘의 관전 포인트" value={game.watchPoint} />
    </div>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-100 p-4">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
        {value}
      </p>
    </div>
  );
}
