import * as S from "./BannerStyles";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function LayOutDesignBanner() {
  const MySliderList = [
    {
      imageSrc: "/layout/slickimg03.jpeg",
      title: "첫번째 슬라이드",
      firstContents: "오스트레일리아 최애 캐릭터 블루이처럼 살아보기",
      secondContents: "구경해보기",
    },
    {
      imageSrc: "/layout/slickimg02.jpeg",
      firstContents: "내일 아침 떠나요, 랜선 미식 여행",
      secondContents: "구경해보기",
      title: "두번째 슬라이드",
    },
    {
      imageSrc: "/layout/slickimg01.jpeg",
      firstContents: "여행 중 만나는 이색적인 즐길 거리",
      secondContents: "구경해보기",
      title: "세번째 슬라이드",
    },
    {
      imageSrc: "/layout/slickimg04.jpeg",
      firstContents: "지속 가능한 건강관리 팁 알아보기",
      secondContents: "구경해보기",
      title: "네번째 슬라이드",
    },
  ];

  const settings = {
    dots: false,
    speed: 500,
    autoplay: true,
    autoplayspeed: 2000,
    centerMode: true,
    centerPadding: "60px",
    Infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { centerPadding: "0px" },
      },
    ],
  };

  return (
    <S.Wrapper>
      <S.StyledSlider {...settings}>
        {MySliderList.map((el, index) => (
          <div key={index}>
            <S.SlickBox>
              <S.ColorImg src={el.imageSrc} alt={el.title} />
              <S.TextBox>
                <S.CommonsText>{el.firstContents}</S.CommonsText>
                <S.CommonSubText>{el.secondContents}</S.CommonSubText>
              </S.TextBox>
            </S.SlickBox>
          </div>
        ))}
      </S.StyledSlider>
    </S.Wrapper>
  );
}
