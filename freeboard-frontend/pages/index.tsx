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
          <div>지금 로그인하고</div>
          <div>다양한 사람들과 소통해보세요 !</div>
          <S.BtnBox>
            <S.WelcomeBtn onClick={MoveToLogin}>로그인하기</S.WelcomeBtn>
            <S.WelcomeBtn onClick={MoveToMain}>구경하기</S.WelcomeBtn>
          </S.BtnBox>
        </S.MainContent>
      </S.Wrapper>
    </div>
  );
}
