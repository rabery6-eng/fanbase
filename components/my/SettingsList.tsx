"use client";

import { settings } from "@/lib/my-profile";
import type { Team } from "@/lib/teams";

type SettingsListProps = {
  team: Team;
  onChangeTeam: () => void;
};

export function SettingsList({ team, onChangeTeam }: SettingsListProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-black tracking-[-0.03em] text-slate-950">
        설정
      </h2>
      <div className="mt-4 divide-y divide-slate-100">
        {settings.map((setting) => (
          <button
            key={setting}
            type="button"
            onClick={setting === "응원팀 변경" ? onChangeTeam : undefined}
            className="flex w-full items-center justify-between py-4 text-left text-sm font-black text-slate-700 first:pt-0 last:pb-0"
          >
            <span>{setting}</span>
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: setting === "응원팀 변경" ? team.color : "#cbd5e1" }}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </article>
  );
}
