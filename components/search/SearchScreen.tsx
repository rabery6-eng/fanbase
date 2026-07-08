"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { playerRecords, type PlayerRecord } from "@/lib/records";
import {
  createSearchResults,
  recentSearches,
  searchTabs,
  type SearchTab,
  trendingSearches,
} from "@/lib/search-data";
import type { Team } from "@/lib/teams";
import { teams } from "@/lib/teams";
import { RecentSearch } from "./RecentSearch";
import { SearchBar } from "./SearchBar";
import { SearchResultCard } from "./SearchResultCard";
import { TrendingSearch } from "./TrendingSearch";

type SearchScreenProps = {
  team: Team;
  onBack: () => void;
  onOpenPlayer: (player: PlayerRecord) => void;
  onOpenTeam: (team: Team) => void;
};

export function SearchScreen({
  team,
  onBack,
  onOpenPlayer,
  onOpenTeam,
}: SearchScreenProps) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<SearchTab>("전체");
  const results = useMemo(() => createSearchResults(team), [team]);

  const filteredResults = useMemo(() => {
    const lowered = query.trim().toLowerCase();

    return results.filter((result) => {
      const matchesTab = activeTab === "전체" || result.type === activeTab;
      const text = `${result.title} ${result.subtitle} ${result.description}`.toLowerCase();
      const matchesQuery = lowered.length === 0 || text.includes(lowered);

      return matchesTab && matchesQuery;
    });
  }, [activeTab, query, results]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto min-h-screen w-full max-w-md pb-10 sm:max-w-2xl lg:max-w-4xl">
        <header className="px-4 pt-5 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={onBack}
              className="rounded-full bg-white px-3 py-2 text-xs font-black text-slate-600 shadow-sm"
            >
              뒤로가기
            </button>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
              Universal Search
            </p>
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] text-slate-950">
            Search
          </h1>
          <div className="mt-5">
            <SearchBar value={query} onChange={setQuery} />
          </div>
        </header>

        <section className="px-4 pt-4 sm:px-6">
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            {searchTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className="shrink-0 rounded-full border px-4 py-2.5 text-sm font-black"
                style={
                  activeTab === tab
                    ? {
                        borderColor: team.color,
                        backgroundColor: `${team.color}12`,
                        color: team.color,
                      }
                    : { borderColor: "#e2e8f0", color: "#64748b" }
                }
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        {query.length === 0 && activeTab === "전체" && (
          <section className="grid gap-3 px-4 pt-4 sm:grid-cols-2 sm:px-6">
            <RecentSearch items={recentSearches} onSelect={setQuery} />
            <TrendingSearch
              items={trendingSearches}
              color={team.color}
              onSelect={setQuery}
            />
          </section>
        )}

        <motion.section
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { delayChildren: 0.08, staggerChildren: 0.04 },
            },
          }}
          className="grid gap-3 px-4 pt-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3"
        >
          {filteredResults.map((result) => (
            <motion.div
              key={result.id}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <SearchResultCard
                result={result}
                color={team.color}
                onOpenPlayer={(playerId) => {
                  const player =
                    playerRecords.find((record) => record.id === playerId) ??
                    playerRecords[0];
                  onOpenPlayer(player);
                }}
                onOpenTeam={(teamId) => {
                  const foundTeam =
                    teams.find((teamItem) => teamItem.id === teamId) ?? team;
                  onOpenTeam(foundTeam);
                }}
              />
            </motion.div>
          ))}
        </motion.section>
      </div>
    </main>
  );
}
