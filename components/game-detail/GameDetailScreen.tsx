"use client";

import { motion } from "framer-motion";
import { BottomNav } from "@/components/home/BottomNav";
import type { Game } from "@/lib/games";
import { playerRecords, type PlayerRecord } from "@/lib/records";
import type { Team } from "@/lib/teams";
import { AIGameBriefing } from "./AIGameBriefing";
import { CheerButton } from "./CheerButton";
import { FanChatPreview } from "./FanChatPreview";
import { GameDetailHeader } from "./GameDetailHeader";
import { GameTimeline } from "./GameTimeline";
import { MVPVoteCard } from "./MVPVoteCard";
import { PredictionCard } from "./PredictionCard";

type GameDetailScreenProps = {
  game: Game;
  team: Team;
  onBack: () => void;
  onNavigate: (
    screen: "home" | "game" | "community" | "records" | "my",
  ) => void;
  onOpenPlayer: (player: PlayerRecord) => void;
};

export function GameDetailScreen({
  game,
  team,
  onBack,
  onNavigate,
  onOpenPlayer,
}: GameDetailScreenProps) {
  const isMyTeamGame =
    game.homeTeam.id === team.id || game.awayTeam.id === team.id;
  const featuredPlayer =
    playerRecords.find((player) => player.team.id === team.id) ??
    playerRecords[0];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto min-h-screen w-full max-w-md pb-28 sm:max-w-2xl lg:max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <GameDetailHeader
            game={game}
            isMyTeamGame={isMyTeamGame}
            team={team}
            onBack={onBack}
            onOpenPlayer={() => onOpenPlayer(featuredPlayer)}
          />
        </motion.div>

        <motion.section
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { delayChildren: 0.1, staggerChildren: 0.06 },
            },
          }}
          className="grid gap-3 px-4 pt-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3"
        >
          <DetailMotion className="sm:col-span-2 lg:col-span-2">
            <AIGameBriefing game={game} team={team} />
          </DetailMotion>
          <DetailMotion>
            <CheerButton team={team} />
          </DetailMotion>
          <DetailMotion className="sm:col-span-2 lg:col-span-2">
            <GameTimeline game={game} team={team} />
          </DetailMotion>
          <DetailMotion>
            <PredictionCard game={game} team={team} />
          </DetailMotion>
          <DetailMotion>
            <FanChatPreview team={team} />
          </DetailMotion>
          <DetailMotion>
            <MVPVoteCard team={team} />
          </DetailMotion>
        </motion.section>
      </div>
      <BottomNav activeTab="Game" team={team} onTabChange={onNavigate} />
    </main>
  );
}

function DetailMotion({
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
