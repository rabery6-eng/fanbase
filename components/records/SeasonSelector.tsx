"use client";

type SeasonSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

const seasons = ["2026", "2025", "2024"];

export function SeasonSelector({ value, onChange }: SeasonSelectorProps) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="h-11 rounded-2xl border border-slate-200 bg-white px-3 text-sm font-black text-slate-800 outline-none focus:ring-4 focus:ring-slate-200"
      aria-label="시즌 선택"
    >
      {seasons.map((season) => (
        <option key={season} value={season}>
          {season} 시즌
        </option>
      ))}
    </select>
  );
}
