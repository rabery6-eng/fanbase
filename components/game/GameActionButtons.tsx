"use client";

import type { Team } from "@/lib/teams";

type GameActionButtonsProps = {
  team: Team;
};

export function GameActionButtons({ team }: GameActionButtonsProps) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3">
      <button
        type="button"
        className="rounded-2xl px-4 py-3 text-sm font-black text-white shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
        style={{ backgroundColor: team.color }}
      >
        팬 채팅방 입장
      </button>
      <button
        type="button"
        className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-800 shadow-sm transition hover:border-slate-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
      >
        승부예측
      </button>
    </div>
  );
}
