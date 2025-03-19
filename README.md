# 과제: Fetching Shop 프로젝트 🎁

> Frontend Engineer 지원자: 송진태

<br/>

# 1. 프로젝트 개요

Fetching Shop은 다양한 해외 상품을 둘러보고 원하는 조건에 맞는 상품을 찾을 수 있는 서비스입니다. 상품 목록 조회(offset 기반 페이지네이션), 검색, 필터링을 주요 기능으로 제공합니다.

<img src="https://i.imgur.com/lEzA4cE.png" alt="홈 화면" />
<span style="color: gray; font-size: 0.9rem;">구현 화면</span>

<br/>

# 2. 실행 방법

### 2-1. 개발 환경

```bash
- Node.js: v22.14.0 (Active LTS)
```

*본 프로젝트는 Node.js 버전 22.14.0을 사용합니다. 해당 버전이 없으신 경우 설치 후 해당 버전으로 전환하실 수 있습니다.

```bash
nvm install 22.14.0 // 설치
nvm use // 버전 사용
```

### 2-2. 의존성 설치

```bash
npm install
```

### 2-3. 실행

```bash
npm run dev
```

<br/>

# 3. 체크리스트

### 상품 리스트 기본 설정

- [x] Mock 데이터 연결 ([Platzi Fake Store API](https://fakeapi.platzi.com/en/about/introduction/) 연결)
- [x] 상품(Product) 인터페이스 정의
  - [x] 기본 정보 인터페이스 정의 (id, title, price, images)
  - [x] 기본 정보 기반 확장 인터페이스 정의 (discountRate, stock)
  - [x] 필터 인터페이스 정의 (showAllProducts)
- [x] 상품 정보 표시 (할인율, 기존 가격, 할인 가격)
- [x] 품절 상품 처리 (기본적으로 숨김)
  - [x] 품절 상품 opacity로 UI 구분 처리

### 상품 무한 스크롤

- [x] Observer 설정 (라이브러리 [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) 사용)
- [x] 스크롤 시 추가 데이터 로딩 로직
- [x] 로딩 상태 표시
- [x] 마지막 페이지 도달 표시

### 검색

- [x] 검색 입력 필드 UI 구현
- [x] 기본 검색 기능 구현
- [x] 자동완성 기능 구현 (현재 사용자에게 조회된 데이터 기반)

### 필터링

- [x] 필터 UI 컴포넌트 구현 (토글 버튼 중심)
- [x] 품절 상품 표시/숨김 토글 기능
- [x] 필터 적용 시 상품 리스트 업데이트

### SSR

- [x] App Router 기반 서버 컴포넌트, 클라이언트 컴포넌트 분리

### SEO

- [x] 메타 태그 설정 (title, description, keywords, robots)

<br/>

# 4. 기술 스택

- TypeScript
- React
- Next.js(App Router)
- TanStack Query: 데이터 페칭 및 캐싱
- react-infinite-scroll-component: 무한 스크롤 구현
- Tailwind CSS: 스타일링 (Utility first)
- Prettier: 코드 포맷팅
- ESLint: 코드 품질 유지

<br/>

# 5. 회고

24시간이라는 제한된 시간 내에서 상품 리스트 페이지를 구현하면서 다양한 기술적 의사결정을 하며 또 한 번 성장할 수 있었습니다. TypeScript, Next.js, TanStack Query 등 기술을 사용하여 요구사항을 이해하고 구현하고자 했습니다.

챌린지 중 하나였던 것은, 무한 스크롤과 자동완성 검색 기능이었습니다. 무한 스크롤과 검색의 자동완성, 필터링 기능 요구사항을 모두 충족하는 구조를 설계하고 반영하는 것이 어려웠지만 즐겁게 진행했습니다. 자연스러운 무한 스크롤 경험을 위해, 20개로 상품 개수가 적었던 FakeStoreAPI로 구현했던 구조에서 Platzi API로 전환했습니다. 그리고 TanStack Query의 useInfiniteQuery를 활용하여 효율적인 데이터 페칭을 구현했습니다. 이를 통해 상태 관리의 복잡성을 줄이고, 안정성과 유지보수성을 높였습니다.

타입스크립트 인터페이스 설계 시에는 확장성을 고려했습니다. 기존 API 응답에 할인율과 재고 정보를 주입하는 확장 레이어를 구축했습니다. 서버 사이드 렌더링과 메타데이터 최적화를 통해 SEO에 도움 될 수 있는 부분을 고민하고 반영했습니다.

처음부터 완벽한 구현을 목표로 하기보다는 핵심 기능의 안정적 작동에 집중했습니다. 이번 프로젝트를 통해 타입 안전성, 사용자 경험, 성능 최적화 사이의 균형을 맞추는 데 대한 고민을 더 깊이 할 수 있었습니다.

감사합니다.
