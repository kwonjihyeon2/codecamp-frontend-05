import * as L from "./productDetail.style";
import ProductMyInput from "../../../commons-components/input/market/index";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";
import { MoveToPageHook } from "../../../commons-components/hooks/MoveToPageHook";
import { useRouter } from "next/router";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ItemDetailPageUI(props) {
  useEffect(() => {
    if (props.data) {
      // map api
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=7c386a558be041dd6a3536203ece273f&autoload=false&libraries=services";
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
            `${
              props.data?.fetchUseditem.useditemAddress?.address ||
              "제주특별자치도 제주시 첨단로 242"
            }`,
            function (result, status: string) {
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
                // const infowindow = new window.kakao.maps.InfoWindow({
                //   content:
                //     '<div style="width:150px;text-align:center;padding:6px 0;">ㅇㅇㅇㅇㅇㅇ</div>',
                // });
                // infowindow.open(map, marker);

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

  return (
    <L.Wrapper>
      <L.WrapperBody>
        <div>
          <L.WrapperContents>
            <div>
              {props.data?.fetchUseditem.images.map((_: any, index: number) => (
                <div key={uuidv4()}>
                  <div>
                    <img
                      style={{ width: "80%" }}
                      src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[index]}`}
                      alt="이미지"
                    />
                  </div>
                </div>
              )) && (
                <div>
                  <img
                    style={{ width: "80%" }}
                    src="/basic.jpeg"
                    alt="이미지"
                  />
                </div>
              )}
            </div>
            <div>
              <h1>
                상품명{" "}
                <ProductMyInput
                  type="text"
                  dafaultValue={props.data?.fetchUseditem.name || ""}
                />
              </h1>
              <div>
                간단설명{" "}
                <ProductMyInput
                  type="text"
                  dafaultValue={props.data?.fetchUseditem.remarks || ""}
                />
              </div>
              <div>
                판매가격{" "}
                <input
                  type="text"
                  defaultValue={props.data?.fetchUseditem.price || ""}
                />
                {/* 이걸로 할인가격 나타내보자 */}
              </div>
              <div>
                태그 <input type="text" />
              </div>

              <button onClick={moveToPage("/market")}>목록으로</button>
              <button
                onClick={moveToPage(`/market/${router.query.ItemId}/edit`)}
              >
                수정하기
              </button>
              <button onClick={props.onClickDeleteItem}>삭제하기</button>
              <div>
                <button>찜</button>
                <button>장바구니 담기</button>
              </div>
            </div>
          </L.WrapperContents>
          <L.WrapperDetail>
            상품 설명
            {process.browser && (
              <div
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    String(props.data?.fetchUseditem.contents)
                  ),
                }}
              />
            )}
          </L.WrapperDetail>
          <div>
            <h4>거래위치</h4>
            <div id="map" style={{ width: 500, height: 400 }}></div>
            <input
              type="text"
              defaultValue={
                props.data?.fetchUseditem.useditemAddress?.zipcode || "63309"
              }
            />
            <input
              type="text"
              defaultValue={
                props.data?.fetchUseditem.useditemAddress?.address ||
                "제주특별자치도 제주시 첨단로 242"
              }
            />
          </div>
        </div>

        <L.ViewBox>
          <h1>오늘 본 상품</h1>
          <div>
            {props.todayView?.map((el) => (
              <div key={uuidv4()}>
                <span>{el.name}</span>
                <span>{el.remarks}</span>
                <span>{el.price}</span>
              </div>
            ))}
          </div>
        </L.ViewBox>
      </L.WrapperBody>
    </L.Wrapper>
  );
}
