"use client";

import { fanProfile } from "@/lib/my-profile";
import type { Team } from "@/lib/teams";

type ProfileHeaderProps = {
  team: Team;
};

export function ProfileHeader({ team }: ProfileHeaderProps) {
  return (
    <header className="px-4 pt-5 sm:px-6">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
        <div
          className="h-2"
          style={{ backgroundColor: team.color }}
          aria-hidden="true"
        />
        <div className="p-5">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
            Profile
          </p>
          <div className="mt-4 flex items-center gap-4">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl text-xl font-black text-white"
              style={{ backgroundColor: team.color }}
            >
              MY
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="truncate text-3xl font-black tracking-[-0.055em] text-slate-950">
                프로필
              </h1>
              <p className="mt-1 text-sm font-bold text-slate-500">
                {team.name} 팬 · {fanProfile.level}
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <Info label="응원팀" value={team.name} />
            <Info label="팀 컬러" value={team.color} />
            <Info label="팬 레벨" value={fanProfile.levelName} />
            <Info label="팬 가입일" value={fanProfile.joinedAt} />
          </div>
        </div>
      </section>
    </header>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-xs font-black text-slate-400">{label}</p>
      <p className="mt-1 truncate text-sm font-black text-slate-950">{value}</p>
    </div>
  );
}
