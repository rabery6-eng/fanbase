"use client";

import { motion } from "framer-motion";
import { BottomNav } from "@/components/home/BottomNav";
import { getTeamHubData } from "@/lib/team-hub";
import type { PlayerRecord } from "@/lib/records";
import type { Team } from "@/lib/teams";
import { AIBriefing } from "./AIBriefing";
import { PopularPlayers } from "./PopularPlayers";
import { RosterCard } from "./RosterCard";
import { TeamCommunity } from "./TeamCommunity";
import { TeamHeader } from "./TeamHeader";
import { TeamNews } from "./TeamNews";
import { TeamTimeline } from "./TeamTimeline";
import { TodayGameCard } from "./TodayGameCard";

type TeamHubProps = {
  team: Team;
  onBack: () => void;
  onNavigate: (
    screen: "home" | "game" | "community" | "records" | "my",
  ) => void;
  onOpenPlayer: (player: PlayerRecord) => void;
};

export function TeamHub({
  team,
  onBack,
  onNavigate,
  onOpenPlayer,
}: TeamHubProps) {
  const data = getTeamHubData(team);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto min-h-screen w-full max-w-md pb-28 sm:max-w-2xl lg:max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <TeamHeader
            team={team}
            record={data.teamRecord}
            onBack={onBack}
          />
        </motion.div>

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
          <Item className="sm:col-span-2 lg:col-span-2">
            <TodayGameCard game={data.todayGame} team={team} />
          </Item>
          <Item>
            <AIBriefing team={team} briefing={data.briefing} />
          </Item>
          <Item>
            <RosterCard roster={data.roster} onOpenPlayer={onOpenPlayer} />
          </Item>
          <Item>
            <PopularPlayers
              players={data.popularPlayers}
              onOpenPlayer={onOpenPlayer}
            />
          </Item>
          <Item>
            <TeamNews news={data.news} />
          </Item>
          <Item>
            <TeamCommunity posts={data.fanReactions} />
          </Item>
          <Item className="sm:col-span-2 lg:col-span-3">
            <TeamTimeline team={team} items={data.timeline} />
          </Item>
        </motion.section>
      </div>
      <BottomNav activeTab="Home" team={team} onTabChange={onNavigate} />
    </main>
  );
}

function Item({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
