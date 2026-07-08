"use client";

import type { Team } from "@/lib/teams";

type AIBriefingProps = {
  team: Team;
  briefing: string;
};

export function AIBriefing({ team, briefing }: AIBriefingProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
          AI 브리핑
        </h2>
        <span
          className="rounded-full px-2.5 py-1 text-[11px] font-black"
          style={{ backgroundColor: `${team.color}14`, color: team.color }}
        >
          LIVE
        </span>
      </div>
      <p className="mt-4 text-sm font-semibold leading-6 text-slate-700">
        {briefing}
      </p>
    </article>
  );
}
