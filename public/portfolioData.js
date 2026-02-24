const profile = {
  name: "박정훈 / Park Junghoon",
  target: "株式会社Ｌｅｃｃ 제출용 백엔드/풀스택 포트폴리오",
  intro:
    "Node.js 기반 REST API 개발 경험과 React 프론트엔드 협업 경험을 바탕으로, 안정적인 서비스 운영과 기능 개선에 기여할 수 있는 개발자입니다.",
  contact: {
    email: "junghoon.dev@example.com",
    github: "https://github.com/xoxokss",
  },
};

const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "반응형 UI 구성"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "JWT 인증", "RESTful API 설계"],
  },
  {
    title: "DevOps / Collaboration",
    items: ["Git / GitHub", "AWS (EC2, S3)", "API 문서화", "코드리뷰", "애자일 협업"],
  },
];

const projects = [
  {
    name: "7week Danggeun Clone API",
    period: "2024",
    stack: ["Node.js", "Express", "MongoDB", "JWT"],
    summary:
      "당근마켓 클론 서비스의 게시글/좋아요/회원 기능 API를 구현하고, 미들웨어 기반 인증 및 유효성 검사를 적용했습니다.",
    achievements: [
      "JWT 기반 로그인 인증 플로우 구현",
      "좋아요 및 게시글 CRUD API 분리로 유지보수성 향상",
      "요청 로깅 미들웨어로 디버깅 생산성 향상",
    ],
  },
  {
    name: "React 상품 피드 UI",
    period: "2024",
    stack: ["React", "JavaScript", "CSS"],
    summary:
      "재사용 가능한 컴포넌트 구조로 카드형 피드 UI를 구현하고 API 연동을 고려한 상태 관리 흐름을 구성했습니다.",
    achievements: [
      "컴포넌트 단위 스타일링으로 화면 확장 용이",
      "목록/상세 전환 UX 패턴 정리",
      "공통 레이아웃과 섹션 모듈화로 유지보수 비용 절감",
    ],
  },
  {
    name: "AWS 배포 자동화 실습",
    period: "2024",
    stack: ["AWS EC2", "Nginx", "GitHub Actions"],
    summary:
      "Git 기반 배포 자동화 파이프라인을 구성하여 배포 시간을 단축하고 운영 안정성을 개선했습니다.",
    achievements: [
      "브랜치 전략(main/dev) 적용",
      "배포 체크리스트 문서화",
      "운영 로그 확인 루틴 구축",
    ],
  },
];

const strengths = [
  "요구사항을 API 명세와 작업 단위로 빠르게 분해합니다.",
  "Git 기반 협업에서 브랜치 전략과 코드리뷰 문화를 중요하게 생각합니다.",
  "문제를 기록하고 재발 방지 문서로 남기는 습관이 있습니다.",
];
