"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="block">
      <span className="sr-only">통합 검색</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-4 text-base font-bold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-300 focus:ring-4 focus:ring-slate-200"
        placeholder="선수, 팀, 경기, 게시글, 뉴스 검색"
      />
    </label>
  );
}
