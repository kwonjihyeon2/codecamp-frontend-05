import * as P from "./profilepage.style";
import CartPageContainer from "../cart/cart.container";
import ChargePageContainer from "../chargeProfile/chargeProfile.container";
import ProductSmallButton from "../../../commons-components/button/market03";
import { IoCartOutline, IoTicketOutline } from "react-icons/io5";
import { BsSuitHeart } from "react-icons/bs";
import { propfilType } from "./propfilepage.types";

export default function ProfilepageUI(props: propfilType) {
  return (
    <P.Wrapper>
      <P.WrapperBody>
        <P.WrapperUl>
          <P.NaviList onClick={props.onClickMove(0)}>구매 내역</P.NaviList>
          <P.NaviList onClick={props.onClickMove(1)}>판매 내역</P.NaviList>
          <P.NaviList onClick={props.onClickMove(2)}>충전 내역</P.NaviList>
          <P.NaviList onClick={props.onClickMove(3)}>장바구니</P.NaviList>
          <P.NaviList onClick={props.onClickMove(4)}>설정</P.NaviList>
        </P.WrapperUl>
        {props.listIndex === 3 || props.listIndex === 4 ? (
          <>
            {props.listIndex === 3 && <CartPageContainer data={props.data} />}
            {props.listIndex === 4 && <ChargePageContainer />}
          </>
        ) : (
          <P.WrapperContents>
            <P.WrapperProfile>
              <P.ProfileLeft>
                <P.ProfileLeftInfo>
                  <div>
                    {props.data?.fetchUserLoggedIn.picture ? (
                      <P.ProfileImg
                        src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`}
                      />
                    ) : (
                      <P.ProfileImg src="/mypage/profile.jpeg" />
                    )}
                  </div>
                  <P.InfoName>
                    <P.ProfileName>
                      {props.data?.fetchUserLoggedIn.name}
                    </P.ProfileName>
                    <p>
                      포인트 | {props.data?.fetchUserLoggedIn.userPoint?.amount}
                    </p>
                    <ProductSmallButton
                      onClick={props.onClickMove(4)}
                      style={{
                        borderRadius: "3px",
                        margin: "0",
                        padding: "5px 15px",
                        color: "#000",
                        border: "1px solid #e0e0e0",
                        backgroundColor: "#fff",
                      }}
                      name="설정"
                    />
                  </P.InfoName>
                </P.ProfileLeftInfo>
                <P.ProfileChoice>
                  <P.ProfileChoiceul>
                    <li
                      style={{ cursor: "pointer" }}
                      onClick={props.onClickMove(3)}
                    >
                      <P.IconStyle>
                        <IoCartOutline />
                      </P.IconStyle>
                      장바구니
                    </li>
                    <li>
                      <P.IconStyle>
                        <BsSuitHeart />
                      </P.IconStyle>
                      좋아요 {props.IpickData?.fetchUseditemsCountIPicked}
                    </li>
                    <li>
                      <P.IconStyle>
                        <IoTicketOutline />
                      </P.IconStyle>
                      내 쿠폰 0
                    </li>
                  </P.ProfileChoiceul>
                </P.ProfileChoice>
              </P.ProfileLeft>
            </P.WrapperProfile>
            <P.WrapperList>
              <P.ListContainer>
                {props.listIndex === props.listArr[props.listIndex].index ? (
                  <>{props.listArr[props.listIndex].contents}</>
                ) : (
                  <></>
                )}
              </P.ListContainer>
            </P.WrapperList>
          </P.WrapperContents>
        )}
      </P.WrapperBody>
    </P.Wrapper>
  );
}
