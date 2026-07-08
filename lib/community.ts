import { teams, type Team } from "@/lib/teams";

export type CommunityCategory =
  | "자유글"
  | "오늘 경기 이야기"
  | "직관 후기"
  | "뉴스 의견"
  | "밈";

export type CommunityPost = {
  id: string;
  team: Team;
  category: CommunityCategory;
  title: string;
  preview: string;
  author: string;
  createdAt: string;
  likes: number;
  comments: number;
  linkedGameId?: string;
};

export type CommunityTab = "추천" | "경기" | "내 팀" | "직관" | "밈" | "자유";

export const communityTabs: CommunityTab[] = [
  "추천",
  "경기",
  "내 팀",
  "직관",
  "밈",
  "자유",
];

export const postCategories: CommunityCategory[] = [
  "자유글",
  "오늘 경기 이야기",
  "직관 후기",
  "뉴스 의견",
  "밈",
];

export const recommendedSections = [
  {
    title: "🔥 오늘 가장 뜨는 이야기",
    description: "팬들이 가장 빠르게 반응한 장면들을 모았어요.",
  },
  {
    title: "⚾ 경기별 토론",
    description: "오늘 경기 흐름과 승부처를 경기별로 이야기해요.",
  },
  {
    title: "📰 내 팀 이야기",
    description: "응원팀 팬들이 남긴 주요 반응을 먼저 보여드려요.",
  },
  {
    title: "📸 직관 인증",
    description: "현장 분위기와 좌석 시야, 응원 후기를 확인해요.",
  },
  {
    title: "😂 오늘의 밈",
    description: "경기 후에도 계속 생각나는 장면들을 가볍게 즐겨요.",
  },
  {
    title: "🤖 AI 경기 요약",
    description: "놓친 경기의 핵심 장면을 짧게 따라잡아요.",
  },
];

export const initialCommunityPosts: CommunityPost[] = [
  {
    id: "post-1",
    team: teams[0],
    category: "오늘 경기 이야기",
    title: "오늘 6회 수비 위치가 진짜 승부처였어요",
    preview: "한 타자만 더 잡으면 흐름이 완전히 넘어오는 순간이었는데...",
    author: "잠실라인",
    createdAt: "3분 전",
    likes: 128,
    comments: 34,
    linkedGameId: "my-team-game",
  },
  {
    id: "post-2",
    team: teams[1],
    category: "자유글",
    title: "이 팀은 진짜 감정선을 크게 흔드네요",
    preview: "기대했다가 내려놓았다가 다시 기대하게 만드는 힘이 있어요.",
    author: "불꽃팬",
    createdAt: "8분 전",
    likes: 92,
    comments: 19,
  },
  {
    id: "post-3",
    team: teams[2],
    category: "뉴스 의견",
    title: "오늘 콜업 소식은 꽤 의미 있어 보여요",
    preview: "단순 백업이 아니라 후반 운영을 바꿀 수 있는 카드 같아요.",
    author: "타이밍",
    createdAt: "14분 전",
    likes: 76,
    comments: 12,
  },
  {
    id: "post-4",
    team: teams[3],
    category: "직관 후기",
    title: "오늘 3루 쪽 분위기 진짜 좋았습니다",
    preview: "초반부터 응원 텐션이 높아서 경기 몰입감이 훨씬 좋았어요.",
    author: "현장러",
    createdAt: "21분 전",
    likes: 151,
    comments: 27,
  },
  {
    id: "post-5",
    team: teams[4],
    category: "밈",
    title: "감독 표정이 오늘 경기 요약 그 자체",
    preview: "말없이 모든 걸 설명하는 장면이었습니다.",
    author: "짤수집가",
    createdAt: "29분 전",
    likes: 203,
    comments: 41,
  },
  {
    id: "post-6",
    team: teams[5],
    category: "오늘 경기 이야기",
    title: "선발 교체 타이밍은 납득 가능했나요?",
    preview: "기록만 보면 조금 빠른데, 오늘 구위 생각하면 이해도 됩니다.",
    author: "야구노트",
    createdAt: "36분 전",
    likes: 64,
    comments: 22,
    linkedGameId: "game-2",
  },
  {
    id: "post-7",
    team: teams[6],
    category: "자유글",
    title: "응원가 한 번 들으면 하루 종일 맴돕니다",
    preview: "출근길에도 계속 생각나서 혼자 박자 타고 있었네요.",
    author: "랜딩존",
    createdAt: "44분 전",
    likes: 88,
    comments: 9,
  },
  {
    id: "post-8",
    team: teams[7],
    category: "직관 후기",
    title: "처음 가본 좌석인데 시야 꽤 괜찮네요",
    preview: "타구 방향이 잘 보여서 다음에도 이 구역으로 갈 것 같아요.",
    author: "공룡좌석",
    createdAt: "51분 전",
    likes: 119,
    comments: 16,
  },
  {
    id: "post-9",
    team: teams[8],
    category: "오늘 경기 이야기",
    title: "9회 마지막 승부는 다시 봐도 떨립니다",
    preview: "볼카운트 하나하나가 너무 컸고, 포수 리드도 좋았어요.",
    author: "위즈덤",
    createdAt: "1시간 전",
    likes: 137,
    comments: 28,
    linkedGameId: "game-4",
  },
  {
    id: "post-10",
    team: teams[9],
    category: "밈",
    title: "오늘 덕아웃 리액션 너무 웃겼어요",
    preview: "진지한 경기 중에 잠깐 터지는 이런 순간이 좋습니다.",
    author: "히어로짤",
    createdAt: "1시간 전",
    likes: 184,
    comments: 33,
  },
  {
    id: "post-11",
    team: teams[0],
    category: "자유글",
    title: "내일 라인업은 조금 바뀔까요?",
    preview: "상대 선발 유형 생각하면 테이블세터 조합이 궁금합니다.",
    author: "라인업러",
    createdAt: "1시간 전",
    likes: 55,
    comments: 14,
  },
  {
    id: "post-12",
    team: teams[3],
    category: "자유글",
    title: "오늘 같은 경기는 다시보기로도 재밌네요",
    preview: "결과를 알고 봐도 중간 흐름이 꽤 흥미롭습니다.",
    author: "다시보기",
    createdAt: "2시간 전",
    likes: 61,
    comments: 8,
  },
  {
    id: "post-13",
    team: teams[6],
    category: "자유글",
    title: "야구 없는 시간에도 계속 앱을 보게 됩니다",
    preview: "기록이랑 팬 반응을 같이 보니까 하루 흐름이 이어지는 느낌이에요.",
    author: "일상야구",
    createdAt: "2시간 전",
    likes: 47,
    comments: 11,
  },
];
