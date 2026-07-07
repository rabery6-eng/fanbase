import { teams, type Team } from "@/lib/teams";

export type TeamRecommendation = {
  team: Team;
  strength: string;
  description: string;
};

const recommendationCopy: Record<Team["id"], Omit<TeamRecommendation, "team">> =
  {
    "lg-twins": {
      strength: "깔끔한 운영과 균형 잡힌 전력",
      description: "공수 밸런스가 좋고 안정적인 경기를 즐기고 싶다면.",
    },
    "hanwha-eagles": {
      strength: "뜨거운 낭만과 폭발적인 응원",
      description: "오래 기다린 만큼 더 크게 터지는 감정을 좋아한다면.",
    },
    "kia-tigers": {
      strength: "큰 경기의 긴장감과 강한 승부욕",
      description: "중요한 순간 더 뜨거워지는 야구에 끌린다면.",
    },
    "lotte-giants": {
      strength: "함께 뛰는 듯한 몰입감 있는 응원",
      description: "승패를 넘어 경기의 에너지 자체를 즐기고 싶다면.",
    },
    "doosan-bears": {
      strength: "끈질긴 경기력과 승부사 기질",
      description: "끝까지 흐름을 놓치지 않는 경기를 좋아한다면.",
    },
    "samsung-lions": {
      strength: "차분한 자부심과 다시 올라서는 힘",
      description: "흔들림 속에서도 다음 장면을 기대하는 마음이 좋다면.",
    },
    "ssg-landers": {
      strength: "화끈한 공격과 선명한 존재감",
      description: "한 번에 분위기를 바꾸는 임팩트 있는 야구를 좋아한다면.",
    },
    "nc-dinos": {
      strength: "빠른 템포와 역동적인 성장세",
      description: "새로운 흐름과 과감한 변화를 응원하고 싶다면.",
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
