import ProductSmallButton from "../../../commons-components/button/market03";
import { IoCartOutline, IoTicketOutline } from "react-icons/io5";
import { BsSuitHeart } from "react-icons/bs";
import { useState } from "react";
import SoldItemContainer from "../soldItem-list/soldItem.container";
import BuyListContainer from "../buyItem-list/buyItemlist.container";
import ChargeListContainer from "../charge-list/chargelist.container";
import * as P from "./profilepage.style";

export default function ProfileContainer() {
  const [buylist, setBuylist] = useState(true);
  const [soldlist, setSoldlist] = useState(false);
  const [chargelist, setChargelist] = useState(false);
  //   const [setting, setSetting] = useState();

  const onClickSoldList = () => {
    setBuylist(false);
    setSoldlist(true);
    setChargelist(false);
  };

  const onClickBuyList = () => {
    setBuylist(true);
    setSoldlist(false);
    setChargelist(false);
  };

  const onClickChargeList = () => {
    setBuylist(false);
    setSoldlist(false);
    setChargelist(true);
  };

  return (
    <P.Wrapper>
      <P.WrapperBody>
        <P.WrapperUl>
          <P.NaviList onClick={onClickBuyList}>구매 내역</P.NaviList>
          <P.NaviList onClick={onClickSoldList}>판매 내역</P.NaviList>
          <P.NaviList onClick={onClickChargeList}>충전 내역</P.NaviList>
          <P.NaviList>설정</P.NaviList>
        </P.WrapperUl>

        <P.WrapperContents>
          <P.WrapperProfile>
            <div>
              <P.ProfileImg src="/mypage/profile.jpeg" />
            </div>
            <P.ProfileName>유저네임</P.ProfileName>
            <p>포인트 | 9670</p>
            <ProductSmallButton
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
            <P.ProfileChoice>
              <P.ProfileChoiceul>
                <li>
                  <P.IconStyle>
                    <IoCartOutline />
                  </P.IconStyle>
                  장바구니
                </li>
                <li>
                  <P.IconStyle>
                    <BsSuitHeart />
                  </P.IconStyle>
                  좋아요 0
                </li>
                <li>
                  <P.IconStyle>
                    <IoTicketOutline />
                  </P.IconStyle>
                  내 쿠폰 0
                </li>
              </P.ProfileChoiceul>
            </P.ProfileChoice>
          </P.WrapperProfile>
          <P.WrapperList>
            {soldlist && <SoldItemContainer />}
            {buylist && <BuyListContainer />}
            {chargelist && <ChargeListContainer />}
          </P.WrapperList>
        </P.WrapperContents>
      </P.WrapperBody>
    </P.Wrapper>
  );
}
