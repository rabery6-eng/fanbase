"use client";

import type { TeamRecord } from "@/lib/records";
import type { Team } from "@/lib/teams";

type TeamHeaderProps = {
  team: Team;
  record: TeamRecord;
  onBack: () => void;
};

export function TeamHeader({ team, record, onBack }: TeamHeaderProps) {
  return (
    <header className="px-4 pt-5 sm:px-6">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
        <div
          className="h-2"
          style={{ backgroundColor: team.color }}
          aria-hidden="true"
        />
        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onBack}
              className="rounded-full bg-slate-100 px-3 py-2 text-xs font-black text-slate-600"
            >
              뒤로가기
            </button>
            <span
              className="rounded-full px-3 py-1.5 text-xs font-black"
              style={{ backgroundColor: `${team.color}14`, color: team.color }}
            >
              팀 컬러 {team.color}
            </span>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl text-xl font-black text-white"
              style={{ backgroundColor: team.color }}
            >
              {team.name.slice(0, 2)}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                Team Hub
              </p>
              <h1 className="mt-2 text-4xl font-black tracking-[-0.06em] text-slate-950">
                {team.name}
              </h1>
              <p className="mt-2 text-sm font-bold text-slate-500">
                리그 {record.rank}위 · 승률 {record.winRate}
              </p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <Mini label="순위" value={`${record.rank}위`} />
            <Mini label="최근 성적" value={record.recentGames.join(" ")} />
            <Mini label="팀 ERA" value={record.era} />
          </div>
        </div>
      </section>
    </header>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3">
      <p className="text-[11px] font-black text-slate-400">{label}</p>
      <p className="mt-1 truncate text-sm font-black text-slate-950">{value}</p>
    </div>
  );
}
