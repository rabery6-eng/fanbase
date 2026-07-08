"use client";

import type { HomeData } from "@/components/HomePreview";
import type { Team } from "@/lib/teams";

type HomeHeaderProps = {
  team: Team;
  todayGame: HomeData["todayGame"];
  onOpenSearch: () => void;
};

export function HomeHeader({ team, todayGame, onOpenSearch }: HomeHeaderProps) {
  return (
    <header className="px-4 pt-5 sm:px-6">
      <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-5 pb-6 pt-5 text-white shadow-soft">
        <div
          className="absolute inset-0 opacity-85"
          style={{
            background: `linear-gradient(135deg, ${team.color} 0%, ${team.color}cc 38%, #0f172a 100%)`,
          }}
          aria-hidden="true"
        />
        <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-white/12 blur-2xl" />
        <div className="absolute -bottom-16 left-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

        <div className="relative">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/68">
                My KBO Home
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-[-0.05em]">
                {team.name}
              </h1>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/16 text-sm font-black backdrop-blur">
              {team.name.slice(0, 2)}
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenSearch}
            className="mt-5 w-full rounded-2xl border border-white/16 bg-white/14 px-4 py-3 text-left text-sm font-bold text-white/86 backdrop-blur transition hover:bg-white/18 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
          >
            선수, 팀, 경기, 게시글 검색
          </button>

          <p className="mt-5 text-[15px] font-medium leading-6 text-white/78">
            환영합니다. 당신의 야구는 이곳에서 시작됩니다.
          </p>

          <div className="mt-6 rounded-2xl border border-white/16 bg-white/14 p-4 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-white/62">오늘 경기</p>
                <p className="mt-1 text-lg font-bold tracking-[-0.02em]">
                  {todayGame.status}
                </p>
              </div>
              <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-950">
                {todayGame.time}
              </span>
            </div>
            <p className="mt-3 text-sm font-medium text-white/74">
              {todayGame.opponent} · {todayGame.stadium}
            </p>
          </div>
        </div>
      </section>
    </header>
  );
}
