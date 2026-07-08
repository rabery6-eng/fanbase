"use client";

import type { TeamRecord } from "@/lib/records";

type TeamCardProps = {
  record: TeamRecord;
  onSelect?: (teamId: string) => void;
};

export function TeamCard({ record, onSelect }: TeamCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(record.team.id)}
      className="block w-full overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition hover:border-slate-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
    >
      <div
        className="h-2"
        style={{ backgroundColor: record.team.color }}
        aria-hidden="true"
      />
      <div className="p-5">
        <div className="flex items-center gap-4">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-sm font-black text-white"
            style={{ backgroundColor: record.team.color }}
            aria-label="로고 Placeholder"
          >
            {record.team.name.slice(0, 2)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-black text-slate-400">
              리그 {record.rank}위
            </p>
            <h2 className="mt-1 truncate text-lg font-black tracking-[-0.03em] text-slate-950">
              {record.team.name}
            </h2>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          <Stat label="승률" value={record.winRate} />
          <Stat label="득점" value={record.runsScored} />
          <Stat label="실점" value={record.runsAllowed} />
          <Stat label="팀 OPS" value={record.ops} />
          <Stat label="팀 ERA" value={record.era} />
          <Stat label="순위" value={`${record.rank}위`} />
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
            최근 경기
          </p>
          <div className="flex gap-1.5">
            {record.recentGames.map((game, index) => (
              <span
                key={`${game}-${index}`}
                className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-black"
                style={
                  game === "승"
                    ? {
                        backgroundColor: `${record.team.color}14`,
                        color: record.team.color,
                      }
                    : { backgroundColor: "#f1f5f9", color: "#94a3b8" }
                }
              >
                {game}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3">
      <p className="text-[11px] font-bold text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-black text-slate-950">{value}</p>
    </div>
  );
}
