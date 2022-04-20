import { useState } from "react";
import * as P from "./profilepage.style";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_IPICKED_COUNT, FETCH_USER_LOGGED_IN } from "./profilepage.query";
import SoldItemContainer from "../soldItem-list/soldItem.container";
import BuyListContainer from "../buyItem-list/buyItemlist.container";
import ChargeListContainer from "../charge-list/chargelist.container";
import ChargePageContainer from "../chargeProfile/chargeProfile.container";
import CartPageContainer from "../cart/cart.container";
import ProductSmallButton from "../../../commons-components/button/market03";
import { IoCartOutline, IoTicketOutline } from "react-icons/io5";
import { BsSuitHeart } from "react-icons/bs";

export default function ProfileContainer() {
  const [listIndex, setListIndex] = useState<number>(0);
  const listArr = [
    { index: 0, contents: <BuyListContainer /> },
    { index: 1, contents: <SoldItemContainer /> },
    { index: 2, contents: <ChargeListContainer /> },
  ];

  const onClickMove = (id: number) => () => {
    console.log(id);
    setListIndex(id);
  };

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const { data: IpickData } =
    useQuery<Pick<IQuery, "fetchUseditemsCountIPicked">>(FETCH_IPICKED_COUNT);

  return (
    <P.Wrapper>
      <P.WrapperBody>
        <P.WrapperUl>
          <P.NaviList onClick={onClickMove(0)}>구매 내역</P.NaviList>
          <P.NaviList onClick={onClickMove(1)}>판매 내역</P.NaviList>
          <P.NaviList onClick={onClickMove(2)}>충전 내역</P.NaviList>
          <P.NaviList onClick={onClickMove(3)}>장바구니</P.NaviList>
          <P.NaviList onClick={onClickMove(4)}>설정</P.NaviList>
        </P.WrapperUl>
        {listIndex === 3 || listIndex === 4 ? (
          <>
            {listIndex === 3 && <CartPageContainer />}
            {listIndex === 4 && <ChargePageContainer />}
          </>
        ) : (
          <P.WrapperContents>
            <P.WrapperProfile>
              <P.ProfileLeft>
                <P.ProfileLeftInfo>
                  <div>
                    {data?.fetchUserLoggedIn.picture ? (
                      <P.ProfileImg
                        src={`https://storage.googleapis.com/${data?.fetchUserLoggedIn.picture}`}
                      />
                    ) : (
                      <P.ProfileImg src="/mypage/profile.jpeg" />
                    )}
                  </div>
                  <P.InfoName>
                    <P.ProfileName>
                      {data?.fetchUserLoggedIn.name}
                    </P.ProfileName>
                    <p>포인트 | {data?.fetchUserLoggedIn.userPoint?.amount}</p>
                    <ProductSmallButton
                      onClick={onClickMove(4)}
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
                    <li style={{ cursor: "pointer" }} onClick={onClickMove(3)}>
                      <P.IconStyle>
                        <IoCartOutline />
                      </P.IconStyle>
                      장바구니
                    </li>
                    <li>
                      <P.IconStyle>
                        <BsSuitHeart />
                      </P.IconStyle>
                      좋아요 {IpickData?.fetchUseditemsCountIPicked}
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
                {listIndex === listArr[listIndex].index ? (
                  <>{listArr[listIndex].contents}</>
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
