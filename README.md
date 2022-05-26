# Share-ground 개인 프로젝트

<img width="50" src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img width="43" src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
<img width="80" src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img width="55" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img width="63" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"> <img width="80" src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img width="65" src="https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=GraphQL&logoColor=white"> <img width="40" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
<img width="60" src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white"> <img width="60" src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">
<br />

웹 에어비앤비 UI를 클론하고 유저들의 자유 커뮤니티를 컨셉으로 개인 프로젝트를 만들어보았습니다.<br />
유저들끼리 자유롭게 소통할 수 있는 커뮤니티를 제공하고 가입된 유저들간 중고 거래가 가능하도록 구현했습니다.<br />
현재는 개인 프로젝트의 코드를 추가 보강하거나 다양한 OPEN-API를 구현을 목표로 공부 중입니다.

## 테스트 계정

> ID : kjh2747@gmail.com <br />
> PW : 123qwe!!<br />
<br />

- ### 회원가입 및 로그인
  - 회원가입 및 로그인 시 정규표현식을 사용해서 정보 입력 기본 검증 처리
  - accessToken, refreshToken으로 일정 기간동안 로그인 유지<br/><br/>
  ![회원가입 및 로그인](https://user-images.githubusercontent.com/90013333/170430140-ad08bce2-387c-42b4-b22a-5f9ae11965dc.gif)

- ### 권한 분기
  - useContext에 담은 accessToken을 기준으로 권한 분기 처리<br/><br/>
   ![권한분기](https://user-images.githubusercontent.com/90013333/170437100-5f127e68-e692-49ab-980e-67b4a129c30a.gif)

- ### 회원 정보 페이지
  - 무한 스크롤 라이브러리를 활용해서 내역 조회
  - GraphQL을 이용하여 회원 정보 수정
  - localStorage를 활용해서 장바구니 기능 구현
  - 아임 포트를 이용한 결제 기능 구현<br/><br/>
  ![회원 정보 수정 및 무한스크롤](https://user-images.githubusercontent.com/90013333/170437292-fb923dc2-1c34-40eb-b0fa-15018b4d45af.gif)


- ### 게시물 조회 및 검색
  - 페이지네이션을 활용한 데이터 조회
  - Debounce를 이용해서 키워드 기준으로 검색 결과 자동 표출되게 구현하였으며 결과 조회와 함께 해당 키워드 컬러 변경<br /><br />
 ![검색과 페이지네이션](https://user-images.githubusercontent.com/90013333/170435883-ad780033-fdff-4856-86d9-40e964f04608.gif)
  
- ### 게시물 상세 조회 및 댓글 기능 구현
  - 카카오맵 API를 이용한 위치 조회
  - localStorage에 저장된 데이터를 불러와 오늘 본 상품 조회
  - 리펙토링 예정 사항 : 배포 시 카카오맵 API를 불러오지 못하는 문제를 확인하여 해당 오류 해결 예정, localStorage에 저장된 데이터의 제한을 두지 않은 상태로 상품을 조회한 만큼 데이터가 들어가는 상황으로, 동일한 데이터 혹은 일정한 갯수만 조회되도록 제한할 예정 <br /><br />
  ![게시물 상세](https://user-images.githubusercontent.com/90013333/170453145-bb72cf53-6837-46d4-8882-d68a5b445f82.gif)
  
- ### Query Parameter를 이용한 검색 기능
  - 레이아웃 헤더에서 검색한 키워드를 url로 저장 후 해당 키워드를 기준으로 데이터 조회 <br /><br />
  ![검색](https://user-images.githubusercontent.com/90013333/169232811-3e155910-b042-43d9-a8e9-8b21c17dae8c.gif)
  
- ### 문화 데이터 광장 OPEN-API로 데이터 조회
  - axios로 api를 요청 후 컨텐츠 제공
  - 리펙토링 예정 사항 : 최근 업데이트된 공공 API를 사용하거나 요청한 데이터를 받아오는 동안 미리 화면에 보여지는 부분이 필요하다고 판단, TOAST UI 등을 활용하는 방향으로 유저 친화적으로 코드 수정 예정<br /><br />
   ![api](https://user-images.githubusercontent.com/90013333/170438276-1a47be63-e4ad-43e8-83cc-6ac300f56639.gif)
