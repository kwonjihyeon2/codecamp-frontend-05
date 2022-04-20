import * as L from "./LoginStyle";
import { ChangeEvent } from "react";

interface IpropsLogin {
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  userError: String;
  passwordError: String;
  isActive: boolean;
  onClickLogin: () => void;
  onClickJoin: () => void;
}

export default function LoginPageUI(props: IpropsLogin) {
  return (
    <L.Wrapper>
      <L.WrapperBody>
        <L.WrapperContainer>
          <L.Title>로그인</L.Title>
          <L.ChangeInput
            type="text"
            placeholder="이메일을 입력해주세요."
            id="userID"
            onChange={props.onChangeInputs}
          />
          <L.ErrorColor>{props.userError}</L.ErrorColor>
          <L.ChangeInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            id="userPassword"
            onChange={props.onChangeInputs}
          />
          <L.ErrorColor>{props.passwordError}</L.ErrorColor>
          <L.LoginBtn onClick={props.onClickLogin} isActive={props.isActive}>
            로그인
          </L.LoginBtn>
          <div>
            <L.UlButton>
              <L.LiButton onClick={props.onClickJoin}>회원가입</L.LiButton>
              <L.LiButton>이메일 찾기</L.LiButton>
              <L.LiButton>비밀번호 찾기</L.LiButton>
            </L.UlButton>
          </div>
          <L.ButtonLink>
            <L.IconImg src="/icon/google-icon.png" />
            구글로 로그인
          </L.ButtonLink>
        </L.WrapperContainer>
      </L.WrapperBody>
    </L.Wrapper>
  );
}
