// import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  //window 안에 카카오 넣어주는 것
  kakao: any;
};

export default function KakaoMapPage() {
  const aaa = {
    width: 500,
    height: 400,
  };

  useEffect(() => {
    //2. useEffect에서 맵 다운받고 -> 그 이후에 화면 렌더되도록
    const script = document.createElement("script"); //<script>생성
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=7c386a558be041dd6a3536203ece273f&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);

  return (
    <>
      <div id="map" style={aaa}></div>
    </>
  );
}
