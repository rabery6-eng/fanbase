"use client";

import type { HomeData } from "@/components/HomePreview";
import type { Team } from "@/lib/teams";

type FanReactionCardProps = {
  team: Team;
  reaction: HomeData["fanReaction"];
};

export function FanReactionCard({ team, reaction }: FanReactionCardProps) {
  return (
    <article className="h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold tracking-[-0.03em] text-slate-950">
        팬 반응
      </h2>
      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-3xl font-black tracking-[-0.05em] text-slate-950">
            {reaction.volume}
          </p>
          <p className="mt-1 text-xs font-semibold text-slate-400">
            오늘 대화량
          </p>
        </div>
        <span
          className="rounded-full px-3 py-1.5 text-xs font-bold"
          style={{ backgroundColor: `${team.color}12`, color: team.color }}
        >
          {reaction.mood}
        </span>
      </div>
      <p className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
        {reaction.highlight}
      </p>
    </article>
  );
}
