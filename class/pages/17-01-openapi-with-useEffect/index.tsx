import { useState, useEffect } from "react";
import axios from "axios";

export default function OpenApiPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    //useEffect async 사용x 함수만들어줘야함 , axios -> state 변경되어 재실행 방지 -> didmount역할하는(,[]) useEffect안에 넣은것
    async function fetchDog() {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      //   console.log(result.data.message);
      setDogUrl(result.data.message);
    }
    fetchDog();
  }, []);

  return (
    <div>
      <div>오픈 API 연습</div>
      <img src={dogUrl} />
    </div>
  );
}
