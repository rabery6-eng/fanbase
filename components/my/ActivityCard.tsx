"use client";

import { fanActivities } from "@/lib/my-profile";
import type { Team } from "@/lib/teams";

type ActivityCardProps = {
  team: Team;
};

export function ActivityCard({ team }: ActivityCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
        팬 활동
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {fanActivities.map((activity, index) => (
          <div key={activity.label} className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-black text-slate-400">{activity.label}</p>
            <p
              className="mt-2 text-xl font-black tracking-[-0.04em]"
              style={index === 1 ? { color: team.color } : { color: "#020617" }}
            >
              {activity.value}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
