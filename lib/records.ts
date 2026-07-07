import { teams, type Team } from "@/lib/teams";

export type PlayerRecord = {
  id: string;
  name: string;
  team: Team;
  position: string;
  battingAverage: string;
  homeRuns: number;
  rbi: number;
  ops: string;
  steals: number;
  war: string;
  era: string;
  strikeouts: number;
  saves: number;
  recentGames: string[];
};

export type TeamRecord = {
  id: string;
  team: Team;
  rank: number;
  winRate: string;
  runsScored: number;
  runsAllowed: number;
  ops: string;
  era: string;
  recentGames: string[];
};

export const playerRecords: PlayerRecord[] = [
  {
    id: "player-1",
    name: "김도현",
    team: teams[0],
    position: "CF",
    battingAverage: ".324",
    homeRuns: 18,
    rbi: 64,
    ops: ".912",
    steals: 17,
    war: "4.8",
    era: "-",
    strikeouts: 0,
    saves: 0,
    recentGames: ["2안타", "홈런", "무안타", "3출루", "도루"],
  },
  {
    id: "player-2",
    name: "박민준",
    team: teams[1],
    position: "SP",
    battingAverage: "-",
    homeRuns: 0,
    rbi: 0,
    ops: "-",
    steals: 0,
    war: "3.9",
    era: "2.71",
    strikeouts: 126,
    saves: 0,
    recentGames: ["7K", "QS", "5이닝", "승", "무실점"],
  },
  {
    id: "player-3",
    name: "이서준",
    team: teams[2],
    position: "1B",
    battingAverage: ".301",
    homeRuns: 22,
    rbi: 78,
    ops: ".886",
    steals: 3,
    war: "4.1",
    era: "-",
    strikeouts: 0,
    saves: 0,
    recentGames: ["타점", "2루타", "홈런", "볼넷", "안타"],
  },
  {
    id: "player-4",
    name: "최현우",
    team: teams[5],
    position: "SS",
    battingAverage: ".287",
    homeRuns: 11,
    rbi: 52,
    ops: ".801",
    steals: 21,
    war: "3.6",
    era: "-",
    strikeouts: 0,
    saves: 0,
    recentGames: ["도루", "안타", "득점", "2안타", "호수비"],
  },
  {
    id: "player-5",
    name: "정우진",
    team: teams[7],
    position: "CL",
    battingAverage: "-",
    homeRuns: 0,
    rbi: 0,
    ops: "-",
    steals: 0,
    war: "2.7",
    era: "1.98",
    strikeouts: 68,
    saves: 24,
    recentGames: ["세이브", "1K", "홀드", "세이브", "무실점"],
  },
];

export const teamRecords: TeamRecord[] = teams.map((team, index) => ({
  id: `team-record-${team.id}`,
  team,
  rank: index + 1,
  winRate: (0.618 - index * 0.018).toFixed(3).replace(/^0/, ""),
  runsScored: 512 - index * 11,
  runsAllowed: 421 + index * 9,
  ops: (0.782 - index * 0.006).toFixed(3).replace(/^0/, ""),
  era: (3.41 + index * 0.08).toFixed(2),
  recentGames:
    index % 3 === 0
      ? ["승", "승", "패", "승", "패"]
      : index % 3 === 1
        ? ["패", "승", "승", "패", "승"]
        : ["승", "패", "패", "승", "승"],
}));
