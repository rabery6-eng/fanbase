"use client";

import { useState } from "react";
import type { Team } from "@/lib/teams";

type MVPVoteCardProps = {
  team: Team;
};

const mvpCandidates = ["김도현", "박민준", "이서준"];

export function MVPVoteCard({ team }: MVPVoteCardProps) {
  const [selectedMvp, setSelectedMvp] = useState<string | null>(null);

  return (
    <article className="h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
        오늘의 MVP
      </h2>
      <div className="mt-4 grid gap-2">
        {mvpCandidates.map((candidate) => {
          const active = selectedMvp === candidate;

          return (
            <button
              key={candidate}
              type="button"
              onClick={() => setSelectedMvp(candidate)}
              className="rounded-2xl border px-4 py-3 text-left text-sm font-black transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
              style={
                active
                  ? {
                      borderColor: team.color,
                      backgroundColor: `${team.color}12`,
                      color: team.color,
                    }
                  : { borderColor: "#e2e8f0", color: "#475569" }
              }
            >
              {candidate}
            </button>
          );
        })}
      </div>
    </article>
  );
}
