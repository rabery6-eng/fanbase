"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HomePreview } from "@/components/HomePreview";
import { RecommendConfirm } from "@/components/RecommendConfirm";
import { TeamRecommend } from "@/components/TeamRecommend";
import { TeamSelect } from "@/components/TeamSelect";
import { TeamTransition } from "@/components/TeamTransition";
import type { Team } from "@/lib/teams";

type Screen =
  | "team-select"
  | "recommend"
  | "recommend-confirm"
  | "transition"
  | "home";

export default function Page() {
  const [screen, setScreen] = useState<Screen>("team-select");
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const handleSelectTeam = (team: Team) => {
    setSelectedTeam(team);
    setScreen("transition");
  };

  useEffect(() => {
    if (screen !== "transition") {
      return;
    }

    const timer = window.setTimeout(() => {
      setScreen("home");
    }, 1850);

    return () => window.clearTimeout(timer);
  }, [screen]);

  return (
    <>
      {screen === "team-select" && (
        <TeamSelect
          onSelectTeam={handleSelectTeam}
          onRecommend={() => setScreen("recommend")}
        />
      )}

      {screen === "recommend" && (
        <TeamRecommend
          onBack={() => setScreen("team-select")}
          onSelectTeam={(team) => {
            setSelectedTeam(team);
            setScreen("recommend-confirm");
          }}
        />
      )}

      {screen === "recommend-confirm" && selectedTeam && (
        <RecommendConfirm
          team={selectedTeam}
          onConfirm={() => setScreen("transition")}
          onBack={() => setScreen("recommend")}
        />
      )}

      {screen === "home" && selectedTeam && <HomePreview team={selectedTeam} />}

      <AnimatePresence>
        {screen === "transition" && selectedTeam && (
          <TeamTransition key={selectedTeam.id} team={selectedTeam} />
        )}
      </AnimatePresence>
    </>
  );
}
