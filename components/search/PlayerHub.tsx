"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BottomNav } from "@/components/home/BottomNav";
import type { PlayerRecord } from "@/lib/records";
import type { Team } from "@/lib/teams";
import { FollowButton } from "./FollowButton";
import { PlayerAICard } from "./PlayerAICard";
import { PlayerCommunity } from "./PlayerCommunity";
import { PlayerNews } from "./PlayerNews";
import { PlayerRecentGames } from "./PlayerRecentGames";
import { PlayerStats } from "./PlayerStats";

type PlayerHubProps = {
  player: PlayerRecord;
  team: Team;
  onBack: () => void;
  onNavigate: (
    screen: "home" | "game" | "community" | "records" | "my",
  ) => void;
};

export function PlayerHub({ player, team, onBack, onNavigate }: PlayerHubProps) {
  const [following, setFollowing] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto min-h-screen w-full max-w-md pb-28 sm:max-w-2xl lg:max-w-4xl">
        <header className="px-4 pt-5 sm:px-6">
          <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
            <div
              className="h-2"
              style={{ backgroundColor: player.team.color }}
              aria-hidden="true"
            />
            <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onBack}
                  className="rounded-full bg-slate-100 px-3 py-2 text-xs font-black text-slate-600"
                >
                  뒤로가기
                </button>
                <FollowButton
                  following={following}
                  color={player.team.color}
                  onToggle={() => setFollowing((value) => !value)}
                />
              </div>
              <div className="mt-6 flex gap-4">
                <div
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl text-2xl font-black text-white"
                  style={{ backgroundColor: player.team.color }}
                >
                  {player.name.slice(0, 1)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                    Player Hub
                  </p>
                  <h1 className="mt-2 text-4xl font-black tracking-[-0.06em] text-slate-950">
                    {player.name}
                  </h1>
                  <p className="mt-2 text-sm font-bold text-slate-500">
                    {player.team.name} · {player.position}
                  </p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <MiniStat label="오늘" value="2타수 1안타" />
                <MiniStat label="팬 평점" value="8.7" />
                <MiniStat label="WAR" value={player.war} />
              </div>
            </div>
          </section>
        </header>

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
            <PlayerStats player={player} />
          </Item>
          <Item>
            <PlayerAICard player={player} color={player.team.color} />
          </Item>
          <Item>
            <PlayerRecentGames player={player} />
          </Item>
          <Item>
            <PlayerNews player={player} />
          </Item>
          <Item>
            <PlayerCommunity player={player} />
          </Item>
        </motion.section>
      </div>
      <BottomNav activeTab="Records" team={team} onTabChange={onNavigate} />
    </main>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3">
      <p className="text-[11px] font-black text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-black text-slate-950">{value}</p>
    </div>
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
