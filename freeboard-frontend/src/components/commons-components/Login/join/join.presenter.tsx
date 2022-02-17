import { ChangeEvent } from "react";
import * as J from "./joinStyle";

interface IPropsJoinUI {
  onClickJoin: () => void;
  onChangeInputs: (
    el: string
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  isActive: boolean;
  nameError: string;
  userError: string;
  passwordError: string;
}

export default function JoinPageUI(props: IPropsJoinUI) {
  return (
    <div>
      <J.Wrapper>
        <J.WrapperContainer>
          <J.Title>회원가입</J.Title>
          <J.ChangeInput
            type="text"
            placeholder="이메일을 입력해주세요."
            onChange={props.onChangeInputs("userID")}
          />
          <J.ErrorColor>{props.userError}</J.ErrorColor>
          <J.ChangeInput
            type="password"
            placeholder="영문, 숫자, 특수문자 조합 8-16자"
            onChange={props.onChangeInputs("userPassword")}
          />
          <J.ErrorColor>{props.passwordError}</J.ErrorColor>
          <J.ChangeInput
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={props.onChangeInputs("userName")}
          />
          <J.ErrorColor>{props.nameError}</J.ErrorColor>
          <J.LoginBtn isActive={props.isActive} onClick={props.onClickJoin}>
            회원가입
          </J.LoginBtn>

          <J.UlButton>
            <J.LiInput>
              <input type="checkbox" /> [필수] 만 14세 이상이며 약관에
              동의합니다.
            </J.LiInput>
            <J.LiInput>
              <input type="checkbox" /> [선택] 광고성 정보 수신에 동의합니다.
            </J.LiInput>
          </J.UlButton>
          <J.ButtonLink>
            <J.IconImg src="/icon/google-icon.png" />
            구글로 회원가입
          </J.ButtonLink>
        </J.WrapperContainer>
      </J.Wrapper>
    </div>
  );
}
