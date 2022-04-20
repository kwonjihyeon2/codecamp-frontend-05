import * as S from "../src/commons/styles/LandingStyle";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const MoveToMain = () => {
    router.push("/mainpage");
  };
  const MoveToLogin = () => {
    router.push("/Login");
  };

  return (
    <div>
      <S.Wrapper>
        <S.MainContent>
          <div>지금 로그인하시고</div>
          <div>
            구매 패턴, 취향에 기반한 <br /> 쇼핑 정보를 만나보세요.
          </div>
          <S.BtnBox>
            <S.WelcomeBtn onClick={MoveToLogin}>로그인하기</S.WelcomeBtn>
            <S.WelcomeBtn onClick={MoveToMain}>구경하기</S.WelcomeBtn>
          </S.BtnBox>
        </S.MainContent>
      </S.Wrapper>
      <S.WrapperBody>유튜브 영상 공간으로..</S.WrapperBody>
    </div>
  );
}
