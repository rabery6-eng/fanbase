"use client";

type RecentSearchProps = {
  items: string[];
  onSelect: (query: string) => void;
};

export function RecentSearch({ items, onSelect }: RecentSearchProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-sm font-black text-slate-950">최근 검색어</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onSelect(item)}
            className="rounded-full bg-slate-100 px-3 py-2 text-xs font-black text-slate-600"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
