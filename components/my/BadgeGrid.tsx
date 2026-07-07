"use client";

import { fanBadges } from "@/lib/my-profile";
import type { Team } from "@/lib/teams";

type BadgeGridProps = {
  team: Team;
};

export function BadgeGrid({ team }: BadgeGridProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
        배지
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {fanBadges.map((badge) => (
          <div
            key={badge.title}
            className="rounded-2xl border p-4"
            style={
              badge.active
                ? {
                    borderColor: `${team.color}33`,
                    backgroundColor: `${team.color}0d`,
                  }
                : { borderColor: "#e2e8f0", backgroundColor: "#f8fafc" }
            }
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-black"
              style={
                badge.active
                  ? { backgroundColor: team.color, color: "#ffffff" }
                  : { backgroundColor: "#e2e8f0", color: "#94a3b8" }
              }
            >
              B
            </div>
            <p className="mt-3 text-sm font-black text-slate-950">{badge.title}</p>
            <p className="mt-1 text-xs font-medium leading-5 text-slate-500">
              {badge.description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
