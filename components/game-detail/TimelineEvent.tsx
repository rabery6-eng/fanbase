"use client";

import type { Team } from "@/lib/teams";

export type TimelineEventItem = {
  inning: string;
  type: "안타" | "홈런" | "교체" | "적시타";
  description: string;
};

type TimelineEventProps = {
  event: TimelineEventItem;
  isLast: boolean;
  team: Team;
};

export function TimelineEvent({ event, isLast, team }: TimelineEventProps) {
  return (
    <div className="grid grid-cols-[2.5rem_1fr] gap-3">
      <div className="flex flex-col items-center">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-black text-white"
          style={{ backgroundColor: team.color }}
        >
          {event.type}
        </span>
        {!isLast && <span className="h-12 w-px bg-slate-200" />}
      </div>
      <div className={isLast ? "pb-0" : "pb-5"}>
        <p className="text-xs font-black text-slate-400">{event.inning}</p>
        <p className="mt-1 text-sm font-bold leading-6 text-slate-900">
          {event.description}
        </p>
      </div>
    </div>
  );
}
