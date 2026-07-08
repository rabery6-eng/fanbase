"use client";

import type { PlayerRecord } from "@/lib/records";

type PopularPlayersProps = {
  players: PlayerRecord[];
  onOpenPlayer: (player: PlayerRecord) => void;
};

export function PopularPlayers({
  players,
  onOpenPlayer,
}: PopularPlayersProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
        많이 언급된 선수
      </h2>
      <div className="mt-4 grid gap-2">
        {players.map((player, index) => (
          <button
            key={player.id}
            type="button"
            onClick={() => onOpenPlayer(player)}
            className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-left"
          >
            <span className="text-sm font-black text-slate-800">
              {index + 1}. {player.name}
            </span>
            <span className="text-xs font-black text-slate-400">
              {player.position}
            </span>
          </button>
        ))}
      </div>
    </article>
  );
}
