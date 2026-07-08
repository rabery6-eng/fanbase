"use client";

import { teams, type Team } from "@/lib/teams";

type TeamTagSelectorProps = {
  value: Team;
  onChange: (team: Team) => void;
  color: string;
};

export function TeamTagSelector({ value, onChange, color }: TeamTagSelectorProps) {
  return (
    <div>
      <p className="text-sm font-black text-slate-900">팀 태그 선택</p>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {teams.map((team) => {
          const active = value.id === team.id;

          return (
            <button
              key={team.id}
              type="button"
              onClick={() => onChange(team)}
              className="shrink-0 rounded-full border px-3 py-2 text-xs font-black transition"
              style={
                active
                  ? {
                      borderColor: color,
                      backgroundColor: `${color}12`,
                      color,
                    }
                  : { borderColor: "#e2e8f0", color: "#64748b" }
              }
            >
              {team.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
