"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CommunityScreen } from "@/components/community/CommunityScreen";
import { GameDetailScreen } from "@/components/game-detail/GameDetailScreen";
import { GameScreen } from "@/components/game/GameScreen";
import { HomePreview } from "@/components/HomePreview";
import { MyScreen } from "@/components/my/MyScreen";
import { RecordsScreen } from "@/components/records/RecordsScreen";
import { RecommendConfirm } from "@/components/RecommendConfirm";
import { PlayerHub } from "@/components/search/PlayerHub";
import { SearchScreen } from "@/components/search/SearchScreen";
import { TeamRecommend } from "@/components/TeamRecommend";
import { TeamSelect } from "@/components/TeamSelect";
import { TeamTransition } from "@/components/TeamTransition";
import { TeamHub } from "@/components/team-hub/TeamHub";
import type { Game } from "@/lib/games";
import { playerRecords, type PlayerRecord } from "@/lib/records";
import type { Team } from "@/lib/teams";

type Screen =
  | "team-select"
  | "recommend"
  | "recommend-confirm"
  | "transition"
  | "home"
  | "game"
  | "game-detail"
  | "community"
  | "records"
  | "my"
  | "search"
  | "player-hub"
  | "team-hub";

export default function Page() {
  const [screen, setScreen] = useState<Screen>("team-select");
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerRecord | null>(null);

  const openPlayerHub = (player: PlayerRecord = playerRecords[0]) => {
    setSelectedPlayer(player);
    setScreen("player-hub");
  };

  const openTeamHub = (team: Team) => {
    setSelectedTeam(team);
    setScreen("team-hub");
  };

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

      {screen === "home" && selectedTeam && (
        <HomePreview
          team={selectedTeam}
          onNavigate={setScreen}
          onOpenSearch={() => setScreen("search")}
          onOpenTeam={() => openTeamHub(selectedTeam)}
        />
      )}

      {screen === "game" && selectedTeam && (
        <GameScreen
          team={selectedTeam}
          onNavigate={setScreen}
          onSelectGame={(game) => {
            setSelectedGame(game);
            setScreen("game-detail");
          }}
          onOpenPlayer={openPlayerHub}
        />
      )}

      {screen === "game-detail" && selectedTeam && selectedGame && (
        <GameDetailScreen
          game={selectedGame}
          team={selectedTeam}
          onBack={() => setScreen("game")}
          onNavigate={setScreen}
          onOpenPlayer={openPlayerHub}
        />
      )}

      {screen === "community" && selectedTeam && (
        <CommunityScreen
          team={selectedTeam}
          onNavigate={setScreen}
          onOpenPlayer={openPlayerHub}
          onOpenTeam={openTeamHub}
        />
      )}

      {screen === "records" && selectedTeam && (
        <RecordsScreen
          team={selectedTeam}
          onNavigate={setScreen}
          onOpenPlayer={openPlayerHub}
          onOpenTeam={openTeamHub}
        />
      )}

      {screen === "my" && selectedTeam && (
        <MyScreen
          team={selectedTeam}
          onNavigate={setScreen}
          onChangeTeam={() => setScreen("team-select")}
        />
      )}

      {screen === "search" && selectedTeam && (
        <SearchScreen
          team={selectedTeam}
          onBack={() => setScreen("home")}
          onOpenPlayer={openPlayerHub}
          onOpenTeam={openTeamHub}
        />
      )}

      {screen === "player-hub" && selectedTeam && selectedPlayer && (
        <PlayerHub
          player={selectedPlayer}
          team={selectedTeam}
          onBack={() => setScreen("search")}
          onNavigate={setScreen}
          onOpenTeam={openTeamHub}
        />
      )}

      {screen === "team-hub" && selectedTeam && (
        <TeamHub
          team={selectedTeam}
          onBack={() => setScreen("home")}
          onNavigate={setScreen}
          onOpenPlayer={openPlayerHub}
        />
      )}

      <AnimatePresence>
        {screen === "transition" && selectedTeam && (
          <TeamTransition key={selectedTeam.id} team={selectedTeam} />
        )}
      </AnimatePresence>
    </>
  );
}
