# Share-ground 개인 프로젝트

<img width="50" src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img width="43" src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
<img width="80" src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img width="55" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img width="63" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"> <img width="80" src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img width="65" src="https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=GraphQL&logoColor=white"> <img width="40" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
<img width="60" src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white"> <img width="60" src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">
<br />

에어비엔비 사이트 UI를 클론하고 유저들의 자유 커뮤니티를 컨셉으로 개인 프로젝트를 만들어보았습니다.<br />
유저들끼리 자유롭게 소통할 수 있는 커뮤니티를 제공하고 회원들끼리 중고 거래를 가능하도록 구현했습니다.<br />
현재는 현재 프로젝트에서 구현된 내용을 보강하거나 다양한 OPEN-API를 구현을 목표로 공부 중입니다.

> [https://hyunswork.shop](https://hyunswork.shop)

## 테스트 계정

> ID : kjh2747@gmail.com <br />
> PW : 123qwe!!<br />
<br />

- ### 회원가입 및 로그인
  - 회원가입 및 로그인 시 정규표현식을 사용해서 정보 입력 기본 검증 처리
  - accessToken, refreshToken으로 일정 기간동안 로그인 유지<br/>

![회원가입 및 로그인](https://user-images.githubusercontent.com/90013333/170430140-ad08bce2-387c-42b4-b22a-5f9ae11965dc.gif)

- ### 권한 분기
  - useContext에 담은 accessToken을 기준으로 권한 분기 처리<br/>
  ![권한분기](https://user-images.githubusercontent.com/90013333/169223779-7dd48a36-4959-4f7b-a7fe-c043a74c12e8.gif)

- ### 마이페이지
  - 무한 스크롤 라이브러리를 활용해서 내역 조회
  - GraphQL을 이용하여 회원 정보 수정
  - localStorage를 활용해서 장바구니 기능 구현
  - 아임 포트를 이용한 결제 기능 구현<br/>
  ![정보 수정](https://user-images.githubusercontent.com/90013333/169223476-c863a1a1-1d0c-4bc8-bd18-57275083adb0.gif)

- ### 게시물 조회 및 검색
  - 페이지네이션을 활용한 데이터 조회
  - Debounce를 이용해서 키워드 기준으로 검색 결과 자동 표출되게 구현하였으며 결과 조회와 함께 해당 키워드 컬러 변경<br />
 ![검색과 페이지네이션](https://user-images.githubusercontent.com/90013333/170435883-ad780033-fdff-4856-86d9-40e964f04608.gif)
  
- ### 댓글 기능 구현
  - 카카오맵 API를 이용한 위치 조회
  - 무한스크롤을 이용한 댓글 조회 <br />

- ### Query Parameter를 이용한 검색 기능
  - Header Layout에서 검색한 키워드를 url로 저장 후 해당 키워드를 기준으로 데이터 조회 
  ![검색](https://user-images.githubusercontent.com/90013333/169232811-3e155910-b042-43d9-a8e9-8b21c17dae8c.gif)
