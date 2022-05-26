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
  ![권한분기](https://user-images.githubusercontent.com/90013333/169223779-7dd48a36-4959-4f7b-a7fe-c043a74c12e8.gif)
  - useContext에 담은 accessToken을 기준으로 권한 분기 처리

- ### 회원 정보 수정

  ![정보 수정](https://user-images.githubusercontent.com/90013333/169223476-c863a1a1-1d0c-4bc8-bd18-57275083adb0.gif)

- ### 게시판 CRUD

  ![게시판](https://user-images.githubusercontent.com/90013333/169229301-baa59e69-1a15-4459-9da0-19812dac8903.gif)

- ### 댓글 CRUD

  ![댓글 CRUD](https://user-images.githubusercontent.com/90013333/169233824-43db4cca-7339-4053-a23b-2f2910bf8547.gif)
  게시물 디테일 조회 중 배포 후 카카오맵 API 오류 확인, 로컬로 구현. 수정 예정입니다.

- ### 결제

  ![결제](https://user-images.githubusercontent.com/90013333/169229186-014877b2-f5d0-49e8-bc46-bb9ce6e1b2d7.gif)

- ### 로컬스토리지를 활용한 장바구니 기능

  ![장바구니](https://user-images.githubusercontent.com/90013333/169230388-243fb118-739c-4065-af1e-0c741fa51904.gif)
  <img width="1420" alt="장바구니 로컬 스토리지" src="https://user-images.githubusercontent.com/90013333/169230161-443db999-ccdc-4e33-a038-fd5b02d7d3d5.png" />
- ### Debounce를 이용한 검색 기능
![debounce검색](https://user-images.githubusercontent.com/90013333/170189136-3b1a6399-63b8-430b-af6a-23ef11976ccd.gif)
- ### Query Parameter를 이용한 검색 기능
  ![검색](https://user-images.githubusercontent.com/90013333/169232811-3e155910-b042-43d9-a8e9-8b21c17dae8c.gif)
  
- ### 무한스크롤을 이용한 데이터 조회
![무한스크롤](https://user-images.githubusercontent.com/90013333/170190389-ec7b2d45-c529-477d-ace5-d7d47c25062a.gif)
