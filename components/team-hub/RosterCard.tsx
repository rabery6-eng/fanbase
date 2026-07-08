"use client";

import type { PlayerRecord } from "@/lib/records";

type RosterCardProps = {
  roster: PlayerRecord[];
  onOpenPlayer: (player: PlayerRecord) => void;
};

export function RosterCard({ roster, onOpenPlayer }: RosterCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
        선수단
      </h2>
      <div className="mt-4 space-y-2">
        {roster.map((player) => (
          <button
            key={player.id}
            type="button"
            onClick={() => onOpenPlayer(player)}
            className="flex w-full items-center justify-between rounded-2xl bg-slate-50 p-4 text-left"
          >
            <div>
              <p className="text-sm font-black text-slate-900">{player.name}</p>
              <p className="mt-1 text-xs font-bold text-slate-400">
                {player.position} · WAR {player.war}
              </p>
            </div>
            <span className="text-xs font-black text-slate-400">보기</span>
          </button>
        ))}
      </div>
    </article>
  );
}
