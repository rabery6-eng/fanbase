"use client";

import { motion } from "framer-motion";
import { BottomNav } from "@/components/home/BottomNav";
import type { Team } from "@/lib/teams";
import { ActivityCard } from "./ActivityCard";
import { BadgeGrid } from "./BadgeGrid";
import { FanLevelCard } from "./FanLevelCard";
import { MyPostsPreview } from "./MyPostsPreview";
import { ProfileHeader } from "./ProfileHeader";
import { SettingsList } from "./SettingsList";

type MyScreenProps = {
  team: Team;
  onNavigate: (screen: "home" | "game" | "records" | "my") => void;
  onChangeTeam: () => void;
};

export function MyScreen({ team, onNavigate, onChangeTeam }: MyScreenProps) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto min-h-screen w-full max-w-md pb-28 sm:max-w-2xl lg:max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProfileHeader team={team} />
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
            <FanLevelCard team={team} />
          </Item>
          <Item>
            <ActivityCard team={team} />
          </Item>
          <Item className="sm:col-span-2 lg:col-span-2">
            <BadgeGrid team={team} />
          </Item>
          <Item>
            <MyPostsPreview />
          </Item>
          <Item className="sm:col-span-2 lg:col-span-3">
            <SettingsList team={team} onChangeTeam={onChangeTeam} />
          </Item>
        </motion.section>
      </div>
      <BottomNav activeTab="My" team={team} onTabChange={onNavigate} />
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
