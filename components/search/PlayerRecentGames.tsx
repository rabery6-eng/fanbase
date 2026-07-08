"use client";

import type { PlayerRecord } from "@/lib/records";

type PlayerRecentGamesProps = {
  player: PlayerRecord;
};

export function PlayerRecentGames({ player }: PlayerRecentGamesProps) {
  const games = [...player.recentGames, ...player.recentGames].slice(0, 10);

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
        최근 10경기
      </h2>
      <div className="mt-4 grid gap-2">
        {games.map((game, index) => (
          <div
            key={`${game}-${index}`}
            className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
          >
            <span className="text-xs font-black text-slate-400">
              Game {index + 1}
            </span>
            <span className="text-sm font-black text-slate-800">{game}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
