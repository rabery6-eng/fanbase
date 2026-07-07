"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BottomNav } from "@/components/home/BottomNav";
import { playerRecords, teamRecords } from "@/lib/records";
import type { Team } from "@/lib/teams";
import { PlayerCard } from "./PlayerCard";
import { RecordTabs, type RecordTab } from "./RecordTabs";
import { SearchBar } from "./SearchBar";
import { SeasonSelector } from "./SeasonSelector";
import { TeamCard } from "./TeamCard";

type RecordsScreenProps = {
  team: Team;
  onNavigate: (screen: "home" | "game" | "records" | "my") => void;
};

export function RecordsScreen({ team, onNavigate }: RecordsScreenProps) {
  const [season, setSeason] = useState("2026");
  const [activeTab, setActiveTab] = useState<RecordTab>("players");
  const [query, setQuery] = useState("");

  const filteredPlayers = useMemo(() => {
    const lowered = query.trim().toLowerCase();

    if (!lowered) {
      return playerRecords;
    }

    return playerRecords.filter(
      (player) =>
        player.name.toLowerCase().includes(lowered) ||
        player.team.name.toLowerCase().includes(lowered),
    );
  }, [query]);

  const filteredTeams = useMemo(() => {
    const lowered = query.trim().toLowerCase();

    if (!lowered) {
      return teamRecords;
    }

    return teamRecords.filter((record) =>
      record.team.name.toLowerCase().includes(lowered),
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto min-h-screen w-full max-w-md pb-28 sm:max-w-2xl lg:max-w-4xl">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="px-4 pt-5 sm:px-6"
        >
          <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                  Record Hub
                </p>
                <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-slate-950">
                  Records
                </h1>
              </div>
              <SeasonSelector value={season} onChange={setSeason} />
            </div>
            <p className="mt-4 text-sm font-medium leading-6 text-slate-500">
              {season} 시즌 선수와 팀 기록을 한 곳에서 확인하세요.
            </p>
            <div className="mt-5">
              <SearchBar
                value={query}
                onChange={setQuery}
                placeholder={
                  activeTab === "players" ? "선수 검색" : "팀 검색"
                }
              />
            </div>
          </section>
        </motion.header>

        <motion.section
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { delayChildren: 0.1, staggerChildren: 0.05 },
            },
          }}
          className="grid gap-3 px-4 pt-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3"
        >
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 lg:col-span-3"
          >
            <RecordTabs
              activeTab={activeTab}
              color={team.color}
              onChange={(tab) => {
                setActiveTab(tab);
                setQuery("");
              }}
            />
          </motion.div>

          {activeTab === "players" &&
            filteredPlayers.map((player) => (
              <motion.div key={player.id} variants={itemVariants}>
                <PlayerCard player={player} />
              </motion.div>
            ))}

          {activeTab === "teams" &&
            filteredTeams.map((record) => (
              <motion.div key={record.id} variants={itemVariants}>
                <TeamCard record={record} />
              </motion.div>
            ))}
        </motion.section>
      </div>
      <BottomNav activeTab="Records" team={team} onTabChange={onNavigate} />
    </main>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};
