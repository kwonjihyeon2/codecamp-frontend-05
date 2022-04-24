import * as L from "./productDetail.style";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";
import { MoveToPageHook } from "../../../commons-components/hooks/MoveToPageHook";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { handelError } from "../../../../commons/libraries/uitils";
import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { FiMoreVertical, FiShoppingCart } from "react-icons/fi";
import { RiArrowGoBackLine } from "react-icons/ri";
import ProductBigButton from "../../../commons-components/button/market01/index";
import ProductSmallButton from "../../../commons-components/button/market03";
import { IPropsDetailType, IUserTodayView } from "./productDetail.types";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ItemDetailPageUI(props: IPropsDetailType) {
  // console.log(props.data?.fetchUseditem);

  useEffect(() => {
    if (props.data) {
      const address = props.data?.fetchUseditem.useditemAddress?.address;
      // map api
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false&libraries=services`;
      document.head.appendChild(script);

      script.onload = () => {
        window.kakao.maps.load(function () {
          const mapContainer = document.getElementById("map"); // 지도를 표시할 div

          const mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };

          // 지도를 생성합니다
          const map = new window.kakao.maps.Map(mapContainer, mapOption);

          // 주소-좌표 변환 객체를 생성합니다
          const geocoder = new window.kakao.maps.services.Geocoder();

          // 주소로 좌표를 검색합니다
          geocoder.addressSearch(
            address || "제주특별자치도 제주시 첨단로 242",
            function (result: any, status: string) {
              // 정상적으로 검색이 완료됐으면
              if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(
                  result[0].y,
                  result[0].x
                );
                // 결과값으로 받은 위치를 마커로 표시합니다
                const marker = new window.kakao.maps.Marker({
                  map: map,
                  position: coords,
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                const infowindow = new window.kakao.maps.InfoWindow({
                  content:
                    '<div style="width:150px;text-align:center;padding:6px 0;border-radius: 3px;">거래장소</div>',
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
              }
            }
          );
        });
      };
    }
  }, [props.data]);

  const router = useRouter();
  const { moveToPage } = MoveToPageHook();
  const [isOpen, setIsopen] = useState(false);

  const onClickOpen = () => {
    setIsopen((prev) => !prev);
  };

  return (
    <L.Wrapper>
      <L.WrapperBody>
        <L.SlickBox>
          <L.WrapperContents>
            <div style={{ width: "50%" }}>
              <img
                style={{ width: "100%" }}
                src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images?.[0]}`}
                onError={handelError}
                alt="이미지"
              />
            </div>

            <L.WrapperText>
              <L.productTitle>
                <div>
                  <L.ProductName>
                    {props.data?.fetchUseditem.name}
                  </L.ProductName>
                  <L.ProductRemarks>
                    {props.data?.fetchUseditem.remarks}
                  </L.ProductRemarks>
                </div>
                <L.Icons
                  onClick={props.onClickPicked(props.data?.fetchUseditem._id)}
                >
                  {props.picked ? (
                    <BsSuitHeart />
                  ) : (
                    <BsFillSuitHeartFill style={{ color: "red" }} />
                  )}
                </L.Icons>
              </L.productTitle>
              <L.productTitle>
                <div
                  style={{ display: "flex", width: "35%", flexWrap: "wrap" }}
                >
                  {props.data?.fetchUseditem.tags?.map((el) => (
                    <L.TagStyle key={uuidv4()}>{`# ${el}`}</L.TagStyle>
                  ))}
                </div>
                <L.MoreBox isOpen={isOpen}>
                  <ProductSmallButton
                    style={{ borderRadius: "100%" }}
                    onClick={moveToPage(`/market/${router.query.ItemId}/edit`)}
                    name="수정"
                  />
                  <ProductSmallButton
                    style={{ borderRadius: "100%" }}
                    onClick={props.onClickDeleteItem}
                    name="삭제"
                  />
                </L.MoreBox>
                <L.Icons onClick={onClickOpen}>
                  <FiMoreVertical />
                </L.Icons>
              </L.productTitle>
              <L.ProductPriceBox>
                <div>회원할인가</div>
                <L.ProductPrice>
                  {props.data?.fetchUseditem.price}
                  <L.BasicSpan>원</L.BasicSpan>
                  <L.StyleSpan>12%</L.StyleSpan>
                </L.ProductPrice>
                <L.CancelPrice>
                  {Math.round(Number(props.data?.fetchUseditem.price) * 1.2)}원
                </L.CancelPrice>
              </L.ProductPriceBox>
              <L.TextBox>
                <L.ViewText>
                  상품 거래{" "}
                  <L.BasicSpan>
                    |{" "}
                    {props.data?.fetchUseditem.useditemAddress?.address
                      ? "직거래"
                      : "택배"}
                  </L.BasicSpan>
                </L.ViewText>
                <L.ViewText>
                  상품 수량 <L.BasicSpan>| 1개</L.BasicSpan>
                </L.ViewText>
              </L.TextBox>
              <L.ProductPriceBox style={{ textAlign: "right" }}>
                <L.ProductPrice>
                  <L.BasicSpan>상품금액</L.BasicSpan>{" "}
                  {props.data?.fetchUseditem.price}
                  <L.BasicSpan>원</L.BasicSpan>
                </L.ProductPrice>
              </L.ProductPriceBox>
              <L.buttonBox>
                <L.IButton>
                  <FiShoppingCart />
                </L.IButton>
                <L.IButton onClick={moveToPage("/market")}>
                  <RiArrowGoBackLine />
                </L.IButton>
                <ProductBigButton
                  name="구매하기"
                  onClick={props.onClickBuyItem}
                  style={{
                    width: "78%",
                    padding: "10px 20px",
                    fontSize: "1.2rem",
                  }}
                />
              </L.buttonBox>
            </L.WrapperText>
          </L.WrapperContents>
          <L.WrapperDetail>
            <L.ViewText>상품 설명</L.ViewText>
            {process.browser && (
              <div
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    String(props.data?.fetchUseditem.contents)
                  ),
                }}
              />
            )}
            <div>
              <L.ViewText>거래위치</L.ViewText>
              <div style={{ display: "flex" }}>
                <p>
                  {props.data?.fetchUseditem.useditemAddress?.zipcode && ""}
                </p>
                <p>
                  {props.data?.fetchUseditem.useditemAddress?.address ||
                    "위치가 설정되지않았습니다."}
                </p>
              </div>
              {props.data?.fetchUseditem.useditemAddress?.address && (
                <div id="map" style={{ width: 500, height: 400 }}></div>
              )}
            </div>
          </L.WrapperDetail>
          <L.ViewText>
            판매공지 <br />
            <L.BasicSpan>
              통신판매중개자이며, 통신판매의 당사자가 아닙니다. 거래에 관한
              책임은 판매자에게 있습니다.
            </L.BasicSpan>
          </L.ViewText>
        </L.SlickBox>
      </L.WrapperBody>
      <L.ViewBox>
        <L.ViewText>오늘 본 상품</L.ViewText>
        <L.ContentsBox>
          {props.todayView?.map((el: IUserTodayView) => (
            <div
              onClick={props.onClickMoveItem(el._id)}
              style={{ marginBottom: "10px" }}
              key={uuidv4()}
            >
              <img
                style={{ width: "100%" }}
                src={`https://storage.googleapis.com/${el.images?.[0]}`}
                onError={handelError}
              />
              <L.TextWrap>{el.name}</L.TextWrap>
            </div>
          ))}
        </L.ContentsBox>
      </L.ViewBox>
    </L.Wrapper>
  );
}
