"use client";

import { fanProfile } from "@/lib/my-profile";
import type { Team } from "@/lib/teams";

type FanLevelCardProps = {
  team: Team;
};

export function FanLevelCard({ team }: FanLevelCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
            Fan Level
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-[-0.05em] text-slate-950">
            {fanProfile.level}
          </h2>
          <p className="mt-1 text-sm font-bold text-slate-500">
            {fanProfile.levelName}
          </p>
        </div>
        <span
          className="rounded-full px-3 py-1.5 text-xs font-black"
          style={{ backgroundColor: `${team.color}14`, color: team.color }}
        >
          {fanProfile.experience}%
        </span>
      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full"
          style={{
            width: `${fanProfile.experience}%`,
            backgroundColor: team.color,
          }}
        />
      </div>

      <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-600">
        다음 레벨까지 남은 활동: {fanProfile.nextLevelTodo}
      </p>
    </article>
  );
}
