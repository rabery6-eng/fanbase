import { initialCommunityPosts } from "@/lib/community";
import { createGameData } from "@/lib/games";
import { playerRecords } from "@/lib/records";
import { teams, type Team } from "@/lib/teams";

export type SearchTab = "전체" | "선수" | "팀" | "경기" | "게시글" | "뉴스";

export type SearchResult =
  | {
      id: string;
      type: "선수";
      title: string;
      subtitle: string;
      description: string;
      playerId: string;
    }
  | {
      id: string;
      type: "팀" | "경기" | "게시글" | "뉴스";
      title: string;
      subtitle: string;
      description: string;
    };

export const searchTabs: SearchTab[] = [
  "전체",
  "선수",
  "팀",
  "경기",
  "게시글",
  "뉴스",
];

export const recentSearches = ["김도현", "오늘 경기", "MVP 투표", "팀 ERA"];

export const trendingSearches = [
  "선발 매치업",
  "홈런 순위",
  "직관 후기",
  "AI 경기 요약",
  "승부예측",
];

const newsResults: SearchResult[] = [
  {
    id: "news-1",
    type: "뉴스",
    title: "오늘 KBO 주요 장면 5가지",
    subtitle: "Fanbase News · 12분 전",
    description: "초반 득점, 불펜 운영, 팬 반응까지 한 번에 정리했어요.",
  },
  {
    id: "news-2",
    type: "뉴스",
    title: "주간 선수 컨디션 리포트",
    subtitle: "Data Desk · 38분 전",
    description: "최근 10경기 지표로 보는 상승세 선수와 체크 포인트.",
  },
];

export function createSearchResults(selectedTeam: Team): SearchResult[] {
  const games = createGameData(selectedTeam);

  return [
    ...playerRecords.map<SearchResult>((player) => ({
      id: `player-${player.id}`,
      type: "선수",
      title: player.name,
      subtitle: `${player.team.name} · ${player.position}`,
      description: `WAR ${player.war} · OPS ${player.ops} · ERA ${player.era}`,
      playerId: player.id,
    })),
    ...teams.map<SearchResult>((team) => ({
      id: `team-${team.id}`,
      type: "팀",
      title: team.name,
      subtitle: "KBO 팀",
      description: "팀 기록, 경기, 커뮤니티 반응을 함께 확인하세요.",
    })),
    ...games.map<SearchResult>((game) => ({
      id: `game-${game.id}`,
      type: "경기",
      title: `${game.awayTeam.name} vs ${game.homeTeam.name}`,
      subtitle: `${game.status} · ${game.time}`,
      description: `${game.stadium} · ${game.awayPitcher} / ${game.homePitcher}`,
    })),
    ...initialCommunityPosts.slice(0, 6).map<SearchResult>((post) => ({
      id: `post-${post.id}`,
      type: "게시글",
      title: post.title,
      subtitle: `${post.team.name} · ${post.category}`,
      description: post.preview,
    })),
    ...newsResults,
  ];
}
