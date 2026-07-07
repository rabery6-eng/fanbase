"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HomePreview } from "@/components/HomePreview";
import { RecommendTeamPlaceholder } from "@/components/RecommendTeamPlaceholder";
import { TeamSelect } from "@/components/TeamSelect";
import { TeamTransition } from "@/components/TeamTransition";
import type { Team } from "@/lib/teams";

type Screen = "select" | "transition" | "home" | "recommend";

export default function Page() {
  const [screen, setScreen] = useState<Screen>("select");
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
      {screen === "select" && (
        <TeamSelect
          onSelectTeam={handleSelectTeam}
          onRecommend={() => setScreen("recommend")}
        />
      )}

      {screen === "recommend" && (
        <RecommendTeamPlaceholder onBack={() => setScreen("select")} />
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
