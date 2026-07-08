import { createGameData } from "@/lib/games";
import { initialCommunityPosts } from "@/lib/community";
import { playerRecords, teamRecords } from "@/lib/records";
import type { Team } from "@/lib/teams";

export function getTeamHubData(team: Team) {
  const teamRecord =
    teamRecords.find((record) => record.team.id === team.id) ?? teamRecords[0];
  const games = createGameData(team);
  const todayGame =
    games.find(
      (game) => game.homeTeam.id === team.id || game.awayTeam.id === team.id,
    ) ?? games[0];
  const roster = playerRecords.filter((player) => player.team.id === team.id);
  const fallbackRoster = roster.length > 0 ? roster : playerRecords.slice(0, 3);
  const teamPosts = initialCommunityPosts.filter(
    (post) => post.team.id === team.id,
  );

  return {
    teamRecord,
    todayGame,
    recentGames: teamRecord.recentGames,
    roster: fallbackRoster,
    news: [
      `${team.name} 오늘 경기 관전 포인트`,
      `${team.name} 주간 전력 리포트 공개`,
      `${team.name} 팬들이 주목하는 다음 매치업`,
    ],
    briefing:
      "최근 경기 흐름은 공격 집중력과 불펜 운영에서 갈리고 있어요. 초반 득점에 성공하면 경기 주도권을 빠르게 가져올 가능성이 큽니다.",
    fanReactions:
      teamPosts.length > 0
        ? teamPosts.slice(0, 3)
        : initialCommunityPosts.slice(0, 3),
    popularPlayers: fallbackRoster.slice(0, 3),
    timeline: [
      "시즌 초반 핵심 전력 안정화",
      "중반 이후 젊은 선수 출전 증가",
      "최근 5경기에서 공격 지표 반등",
      "다음 시리즈가 순위 경쟁의 분기점",
    ],
  };
}
