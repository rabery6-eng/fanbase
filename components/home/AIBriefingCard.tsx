"use client";

import type { HomeData } from "@/components/HomePreview";
import type { Team } from "@/lib/teams";

type AIBriefingCardProps = {
  team: Team;
  briefing: HomeData["briefing"];
};

export function AIBriefingCard({ team, briefing }: AIBriefingCardProps) {
  return (
    <article className="h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold tracking-[-0.03em] text-slate-950">
          AI 브리핑
        </h2>
        <span
          className="rounded-full px-2.5 py-1 text-[11px] font-bold"
          style={{ backgroundColor: `${team.color}14`, color: team.color }}
        >
          LIVE
        </span>
      </div>
      <p className="mt-4 text-sm font-semibold leading-6 text-slate-800">
        {briefing.headline}
      </p>
      <ul className="mt-4 space-y-2">
        {briefing.points.map((point) => (
          <li key={point} className="flex gap-2 text-xs leading-5 text-slate-500">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: team.color }}
              aria-hidden="true"
            />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}
