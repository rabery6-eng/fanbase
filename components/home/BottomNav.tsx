"use client";

import type { Team } from "@/lib/teams";

type BottomNavProps = {
  team: Team;
};

const navItems = [
  { label: "Home", icon: "H" },
  { label: "Game", icon: "G" },
  { label: "Community", icon: "C" },
  { label: "Records", icon: "R" },
  { label: "My", icon: "M" },
];

export function BottomNav({ team }: BottomNavProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/80 bg-white/88 px-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-2 shadow-[0_-18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div className="mx-auto grid max-w-md grid-cols-5 gap-1 sm:max-w-2xl lg:max-w-4xl">
        {navItems.map((item) => {
          const isActive = item.label === "Home";

          return (
            <button
              key={item.label}
              type="button"
              className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl text-[11px] font-semibold text-slate-400 transition hover:text-slate-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
              style={isActive ? { color: team.color } : undefined}
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full text-[11px]"
                style={
                  isActive
                    ? { backgroundColor: `${team.color}14` }
                    : { backgroundColor: "#f1f5f9" }
                }
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
