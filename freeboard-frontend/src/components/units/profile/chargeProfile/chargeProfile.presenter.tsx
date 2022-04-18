import UserInfoInput from "../../../commons-components/input/userInfo";
import * as C from "./chargeProfile.style";
import { IPropsCharge } from "./chargeProfile.types";

export default function ChargePageUI(props: IPropsCharge) {
  return (
    <C.Wrapper>
      <C.WrapperBody>
        <C.MypageBox>
          <C.SettingTxt>회원정보</C.SettingTxt>
          <div>
            <C.UserName>
              <span>이메일</span>
              <div style={{ width: "85%" }}>
                <UserInfoInput value={props.data?.fetchUserLoggedIn.email} />
                <div style={{ marginTop: "5px", color: "#bbb" }}>
                  이메일을 변경하시려면 운영자에게 메일을 보내주세요
                </div>
              </div>
            </C.UserName>
            <C.UserName>
              <span>닉네임</span>
              <UserInfoInput
                defaultValue={props.data?.fetchUserLoggedIn.name}
              />
            </C.UserName>
            <C.UserName>
              <span>프로필 이미지</span>
              <C.Picture>{props.data?.fetchUserLoggedIn.picture}</C.Picture>
              <input type="file" />
            </C.UserName>
            <C.UserName>
              <span>포인트</span>
              <UserInfoInput
                value={String(props.data?.fetchUserLoggedIn.userPoint?.amount)}
              />
              <C.ChargeBtn onClick={props.onClickPayment}>충전하기</C.ChargeBtn>
            </C.UserName>
            <C.UserName>
              <C.OpenMoney isShow={props.isShow}>
                <C.ButtonColor
                  changeMount={props.changeMount}
                  onClick={props.onClickAmount(100)}
                >
                  100
                </C.ButtonColor>
                <C.ButtonColor
                  changeMount={props.changeMount}
                  onClick={props.onClickAmount(20000)}
                >
                  20000
                </C.ButtonColor>
                <C.ButtonColor
                  changeMount={props.changeMount}
                  onClick={props.onClickAmount(30000)}
                >
                  30000
                </C.ButtonColor>
                <C.ButtonColor
                  changeMount={props.changeMount}
                  onClick={props.onClickAmount(40000)}
                >
                  40000
                </C.ButtonColor>
                <C.ButtonColor
                  changeMount={props.changeMount}
                  onClick={props.onClickAmount(50000)}
                >
                  50000
                </C.ButtonColor>
                <div>원하는 충전 금액을 클릭하고 충전하기를 </div>
              </C.OpenMoney>
            </C.UserName>
          </div>

          <C.SubmitInfo>회원정보 수정</C.SubmitInfo>
        </C.MypageBox>
      </C.WrapperBody>
    </C.Wrapper>
  );
}
