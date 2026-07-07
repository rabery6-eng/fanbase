import { teams, type Team } from "@/lib/teams";

export type GameStatus = "예정" | "진행중" | "종료";

export type Game = {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  time: string;
  status: GameStatus;
  stadium: string;
  homePitcher: string;
  awayPitcher: string;
  homeScore: number;
  awayScore: number;
  recentFlow: string[];
  watchPoint: string;
};

export function createGameData(selectedTeam: Team): Game[] {
  const opponents = teams.filter((teamItem) => teamItem.id !== selectedTeam.id);
  const opponent = opponents[0] ?? teams[0];
  const otherTeams = opponents.filter((teamItem) => teamItem.id !== opponent.id);
  const pairings = [
    [otherTeams[0], otherTeams[1]],
    [otherTeams[2], otherTeams[3]],
    [otherTeams[4], otherTeams[5]],
    [otherTeams[6], otherTeams[7]],
  ];
  const gameMeta = [
    {
      time: "3회초",
      status: "진행중" as const,
      stadium: "광주",
      homePitcher: "이민재",
      awayPitcher: "최현준",
      homeScore: 2,
      awayScore: 1,
      recentFlow: ["승", "승", "패", "패", "승"],
      watchPoint: "불펜 운용이 승부처가 될 수 있어요.",
    },
    {
      time: "18:30",
      status: "예정" as const,
      stadium: "부산",
      homePitcher: "정우진",
      awayPitcher: "강태오",
      homeScore: 0,
      awayScore: 0,
      recentFlow: ["패", "승", "패", "승", "승"],
      watchPoint: "선발 투수의 초반 제구가 중요해요.",
    },
    {
      time: "종료",
      status: "종료" as const,
      stadium: "수원",
      homePitcher: "문지훈",
      awayPitcher: "오세찬",
      homeScore: 4,
      awayScore: 6,
      recentFlow: ["승", "패", "패", "승", "패"],
      watchPoint: "장타 한 방이 경기 분위기를 바꿨어요.",
    },
    {
      time: "19:00",
      status: "예정" as const,
      stadium: "인천",
      homePitcher: "한재민",
      awayPitcher: "윤서준",
      homeScore: 0,
      awayScore: 0,
      recentFlow: ["패", "패", "승", "승", "승"],
      watchPoint: "상위 타선 출루가 득점 기회를 만들 수 있어요.",
    },
  ];

  const featuredGame: Game = {
    id: "my-team-game",
    homeTeam: selectedTeam,
    awayTeam: opponent,
    time: "18:30",
    status: "예정",
    stadium: "홈 구장",
    homePitcher: "김선우",
    awayPitcher: "박도윤",
    homeScore: 0,
    awayScore: 0,
    recentFlow: ["승", "패", "승", "승", "패"],
    watchPoint:
      "초반 출루와 중심 타선의 연결이 오늘 경기 흐름을 가를 수 있어요.",
  };

  const otherGames = pairings.map(([homeTeam, awayTeam], index) => ({
    id: `game-${index + 2}`,
    homeTeam,
    awayTeam,
    ...gameMeta[index],
  }));

  return [
    featuredGame,
    ...otherGames.filter((game) => game.homeTeam && game.awayTeam),
  ];
}
