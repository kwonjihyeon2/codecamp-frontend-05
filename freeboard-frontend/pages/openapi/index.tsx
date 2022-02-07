import { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled/";

const Wrapper = styled.div`
  max-width: 1240px;
  margin: 50px auto;
  text-align: center;
`;

const CurrentTable = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
`;

export default function OpenApiPage() {
  const [mydate, setDate] = useState("");
  const [Korea, setKorea] = useState("");
  const [prevKorea, setPrevKorea] = useState("");
  const [Usdollar, setUsdollar] = useState("");
  const [prevUsdollar, setPrevUsdollar] = useState("");
  const [Jpy, setJpy] = useState("");
  const [prevJpy, setPrevJpy] = useState("");

  useEffect(() => {
    async function fetchCurrent() {
      const result = await axios.get(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json"
      );

      const myKorea = Number(result.data.eur.krw).toFixed(2);
      const myusdollar = Number(result.data.eur.usd).toFixed(2);
      const myjpy = Number(result.data.eur.jpy).toFixed(2);
      setDate(result.data.date);
      setKorea(myKorea);
      setUsdollar(myusdollar);
      setJpy(myjpy);
      console.log(myjpy, myKorea);
    }
    fetchCurrent();
  }, []);

  useEffect(() => {
    async function fetchPrev() {
      const result = await axios.get(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2022-02-04/currencies/eur.json"
      );

      const Myprevkorea = Number(result.data.eur.krw).toFixed(2);
      const MyprevUS = Number(result.data.eur.usd).toFixed(2);
      const MyprevJpy = Number(result.data.eur.jpy).toFixed(2);
      setPrevKorea(Myprevkorea);
      setPrevUsdollar(MyprevUS);
      setPrevJpy(MyprevJpy);
      console.log(MyprevJpy, Myprevkorea);
    }
    fetchPrev();
  }, []);

  return (
    <Wrapper>
      <div>{mydate}일 EUR 기준 환율을 확인하세요</div>
      <CurrentTable>
        <li>통화별</li>
        <li>환율</li>
        <li>전일 대비</li>
      </CurrentTable>
      <CurrentTable>
        <li>미국 USD</li>
        <li>{Usdollar}</li>
        <li>{(Number(Usdollar) - Number(prevUsdollar)).toFixed(2)}</li>
      </CurrentTable>
      <CurrentTable>
        <li>한국 KRW</li>
        <li>{Korea}</li>
        <li>{(Number(Korea) - Number(prevKorea)).toFixed(2)}</li>
      </CurrentTable>
      <CurrentTable>
        <li>일본 JPY</li>
        <li>{Jpy}</li>
        <li>{(Number(Jpy) - Number(prevJpy)).toFixed(2)}</li>
      </CurrentTable>
    </Wrapper>
  );
}
