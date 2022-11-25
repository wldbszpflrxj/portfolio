export const projectList = [
  {
    title: "영화, TV 홈페이지 제작",
    desc: [
      "api를 모듈화하고 react-query로 데이터 패칭",
      "반복되는 카드 영역은 코드 재사용을 위해 컴포넌트 분리",
      "mui의 Rating 컴포넌트를 사용하여 간편하게 별점 구현",
    ],
    stack: [
      "React",
      "Typescript",
      "Axios",
      "React-Query",
      "emotion",
      "mui",
      "react-icons",
    ],
    homepage: "https://watcha-pedia.netlify.app/",
    git: "https://github.com/wldbszpflrxj/typescript-watcha-pedia",
  },
  {
    title: "React Router 기능 구현",
    desc: [
      "context API를 사용하여 하위 컴포넌트에서 주소 변경이 일어날 경우 렌더링 될 수 있도록 전역상태관리 ",
      "History API를 사용하여 React-router-dom 기능을 구현",
    ],
    stack: ["React", "Javascript", "context Api"],
    homepage: "https://spa-router.netlify.app/",
    git: "https://github.com/wldbszpflrxj/react-router",
  },
  {
    title: "투자 관리 서비스의 관리자 기능 구현",
    desc: [
      "server json의 search api를 사용하여 검색 기능을 구현",
      "query string으로 데이터를 전달하여 사용자의 편의성 고려",
      "ID 기반으로 데이터 매칭이 필요한 값은 재사용성을 위해 hook 생성",
    ],
    stack: [
      "React",
      "Json-server Api",
      "Axios",
      "Redux",
      "Chakra UI",
      "emotion",
    ],
    git: "https://github.com/wldbszpflrxj/6th_investment-admin",
  },
  {
    title: "깃헙 레파지토리 이슈 관리",
    desc: [
      "react-markdown을 사용하여 마크다운 렌더링",
      "mui 컴포넌트를 사용하여 반응형 대응",
    ],
    stack: ["React", "github Api", "Axios", "context Api", "mui"],
    homepage: "https://github-issue-viewer-team2.netlify.app/",
    git: "https://github.com/wldbszpflrxj/4th_github-issue-viewer/",
  },
  {
    title: "댓글 목록 CRUD",
    desc: [
      "useState를 사용하여 페이지네이션 구현",
      "page와 limit 값을 활용하여 api 호출",
    ],
    stack: ["React", "Json-server Api ", "Axios", "Redux thunk", "emotion"],
    git: "https://github.com/wldbszpflrxj/5th_comments-list",
  },
  {
    title: "프루떼 스토어 리뉴얼",
    desc: [
      "Redux-persist 기능을 Api 대체 기능으로 사용하여 로컬스토리지에 데이터를 저장",
      "Redux를 통해 상품 관리, 주문 상태 관리 ",
    ],
    stack: ["React", "Axios", "Redux", "mui", "emotion"],
    homepage: "https://fruitte-renewal.netlify.app/",
    git: "https://github.com/wldbszpflrxj/2nd_fruitte",
  },
];
