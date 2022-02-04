import { createConnection } from "typeorm";

console.log("Hello TypeScript!!");

createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5014,
  host: "34.64.187.209",
  entities: ["./*.postgres.ts"], //어떤 table이 들어갈지("":현재모든파일)
  logging: true, //동기화 되었는지 관련 로그 기록
  synchronize: true, //DB와 Board(entities안의 javascript로만든 파일) 동기화
})
  .then(() => {
    // 연결 성공시 실행
    console.log("접속 완료!");
  })
  .catch((error) => {
    // 연결 실패시 실행
    console.log(error);
  });
