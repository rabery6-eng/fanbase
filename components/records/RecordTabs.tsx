"use client";

export type RecordTab = "players" | "teams";

type RecordTabsProps = {
  activeTab: RecordTab;
  onChange: (tab: RecordTab) => void;
  color: string;
};

const tabs: { label: string; value: RecordTab }[] = [
  { label: "선수", value: "players" },
  { label: "팀", value: "teams" },
];

export function RecordTabs({ activeTab, onChange, color }: RecordTabsProps) {
  return (
    <div className="grid grid-cols-2 rounded-2xl bg-slate-100 p-1">
      {tabs.map((tab) => {
        const active = activeTab === tab.value;

        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onChange(tab.value)}
            className="rounded-xl px-4 py-3 text-sm font-black transition"
            style={
              active
                ? { backgroundColor: "#ffffff", color, boxShadow: "0 8px 24px rgba(15,23,42,0.08)" }
                : { color: "#64748b" }
            }
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
