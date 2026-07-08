"use client";

import { motion } from "framer-motion";
import { BottomNav } from "@/components/home/BottomNav";
import { createGameData, type Game } from "@/lib/games";
import type { Team } from "@/lib/teams";
import { FeaturedGameCard } from "./FeaturedGameCard";
import { GameCard } from "./GameCard";
import { GameHeader } from "./GameHeader";

type GameScreenProps = {
  team: Team;
  onNavigate: (
    screen: "home" | "game" | "community" | "records" | "my",
  ) => void;
  onSelectGame: (game: Game) => void;
};

export function GameScreen({ team, onNavigate, onSelectGame }: GameScreenProps) {
  const games = createGameData(team);
  const featuredGame = games.find(
    (game) => game.homeTeam.id === team.id || game.awayTeam.id === team.id,
  );
  const otherGames = games.filter((game) => game.id !== featuredGame?.id);

  if (!featuredGame) {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto min-h-screen w-full max-w-md pb-28 sm:max-w-2xl lg:max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <GameHeader team={team} />
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
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            className="sm:col-span-2 lg:col-span-3"
          >
            <FeaturedGameCard
              game={featuredGame}
              team={team}
              onSelect={onSelectGame}
            />
          </motion.div>

          <div className="sm:col-span-2 lg:col-span-3">
            <h2 className="px-1 pb-1 pt-3 text-sm font-black tracking-[-0.02em] text-slate-500">
              다른 경기
            </h2>
          </div>

          {otherGames.map((game) => (
            <motion.div
              key={game.id}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <GameCard game={game} onSelect={onSelectGame} />
            </motion.div>
          ))}
        </motion.section>
      </div>
      <BottomNav activeTab="Game" team={team} onTabChange={onNavigate} />
    </main>
  );
}
