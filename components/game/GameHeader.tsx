"use client";

import type { Team } from "@/lib/teams";

type GameHeaderProps = {
  team: Team;
};

const todayLabel = new Intl.DateTimeFormat("ko-KR", {
  month: "long",
  day: "numeric",
  weekday: "long",
}).format(new Date());

export function GameHeader({ team }: GameHeaderProps) {
  return (
    <header className="px-4 pt-5 sm:px-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
          Game Center
        </p>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-[-0.055em] text-slate-950">
              오늘의 경기
            </h1>
            <p className="mt-2 text-sm font-medium text-slate-500">
              {todayLabel}
            </p>
          </div>
          <span
            className="rounded-full px-3 py-1.5 text-xs font-black text-white"
            style={{ backgroundColor: team.color }}
          >
            {team.name}
          </span>
        </div>
      </section>
    </header>
  );
}
