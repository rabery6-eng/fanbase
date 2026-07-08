"use client";

import type { Team } from "@/lib/teams";

type TeamTimelineProps = {
  team: Team;
  items: string[];
};

export function TeamTimeline({ team, items }: TeamTimelineProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
        팀 타임라인
      </h2>
      <div className="mt-5">
        {items.map((item, index) => (
          <div key={item} className="grid grid-cols-[2rem_1fr] gap-3">
            <div className="flex flex-col items-center">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: team.color }}
              />
              {index < items.length - 1 && <span className="h-10 w-px bg-slate-200" />}
            </div>
            <p className="pb-5 text-sm font-bold leading-5 text-slate-700">
              {item}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
