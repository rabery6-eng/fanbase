import { teams, type Team } from "@/lib/teams";

export type TeamRecommendation = {
  team: Team;
  strength: string;
  description: string;
};

const recommendationCopy: Record<Team["id"], Omit<TeamRecommendation, "team">> =
  {
    "lg-twins": {
      strength: "세련된 도시 야구와 탄탄한 전력",
      description:
        "강한 전력과 큰 팬덤, 잠실의 분위기를 함께 즐기고 싶다면.",
    },
    "hanwha-eagles": {
      strength: "뜨거운 낭만과 폭발적인 응원",
      description: "오래 기다린 만큼 더 크게 터지는 감정을 좋아한다면.",
    },
    "kia-tigers": {
      strength: "전통의 강호와 우승 DNA",
      description: "역사와 자부심, 강한 팬심을 함께 느끼고 싶다면.",
    },
    "lotte-giants": {
      strength: "야구장 전체를 흔드는 응원 문화",
      description: "승패를 넘어 야구장 분위기 자체를 즐기고 싶다면.",
    },
    "doosan-bears": {
      strength: "끈질긴 경기력과 승부사 기질",
      description: "쉽게 무너지지 않는 팀 컬러를 좋아한다면.",
    },
    "samsung-lions": {
      strength: "왕조의 기억과 푸른 전통",
      description: "찬란했던 역사와 새로운 도약을 함께 보고 싶다면.",
    },
    "ssg-landers": {
      strength: "화끈한 공격과 스타성",
      description: "강한 타선과 임팩트 있는 야구를 좋아한다면.",
    },
    "nc-dinos": {
      strength: "젊고 역동적인 신흥 강자",
      description: "새로운 흐름과 빠른 성장을 응원하고 싶다면.",
    },
    "kt-wiz": {
      strength: "조용하지만 강한 실속 야구",
      description: "화려함보다 안정적인 강팀의 매력을 좋아한다면.",
    },
    "kiwoom-heroes": {
      strength: "성장 스토리와 유망주의 매력",
      description: "선수가 커가는 과정을 함께 지켜보는 재미를 원한다면.",
    },
  };

export const teamRecommendations: TeamRecommendation[] = teams.map((team) => ({
  team,
  ...recommendationCopy[team.id],
}));
