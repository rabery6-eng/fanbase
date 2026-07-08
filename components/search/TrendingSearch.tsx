"use client";

type TrendingSearchProps = {
  items: string[];
  onSelect: (query: string) => void;
  color: string;
};

export function TrendingSearch({ items, onSelect, color }: TrendingSearchProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-sm font-black text-slate-950">인기 검색어</h2>
      <div className="mt-3 grid gap-2">
        {items.map((item, index) => (
          <button
            key={item}
            type="button"
            onClick={() => onSelect(item)}
            className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-left text-sm font-black text-slate-700"
          >
            <span style={{ color }}>{index + 1}</span>
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
