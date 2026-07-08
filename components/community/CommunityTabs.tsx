"use client";

import type { CommunityTab } from "@/lib/community";
import { communityTabs } from "@/lib/community";

type CommunityTabsProps = {
  activeTab: CommunityTab;
  onChange: (tab: CommunityTab) => void;
  color: string;
};

export function CommunityTabs({
  activeTab,
  onChange,
  color,
}: CommunityTabsProps) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <div className="flex min-w-max gap-2">
        {communityTabs.map((tab) => {
          const active = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => onChange(tab)}
              className="rounded-full border px-4 py-2.5 text-sm font-black transition"
              style={
                active
                  ? {
                      borderColor: color,
                      backgroundColor: `${color}12`,
                      color,
                    }
                  : { borderColor: "#e2e8f0", color: "#64748b" }
              }
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}
