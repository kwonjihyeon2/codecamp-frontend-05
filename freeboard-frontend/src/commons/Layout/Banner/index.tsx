import * as S from "./BannerStyles";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function SampleBanner() {
  const MySliderList = [
    {
      imageSrc: "/layout/slide1.jpg",
      title: "첫번째 슬라이드",
      firstContents: "백엔드 모집",
      secondContents: "3년 이상",
    },
    {
      imageSrc: "/layout/slide.jpg",
      firstContents: "백엔드 모집",
      secondContents: "3년 이상",
      title: "두번째 슬라이드",
    },
    {
      imageSrc: "/layout/bannerimg03.jpeg",
      firstContents: "프론트엔드 모집",
      secondContents: "3년 이상",
      title: "세번째 슬라이드",
    },
    {
      imageSrc: "/layout/slide1.jpg",
      firstContents: "백엔드 모집",
      secondContents: "3년 이상",
      title: "네번째 슬라이드",
    },
  ];

  const settings = {
    dots: false,
    speed: 500,
    autoplay: false,
    autoplayspeed: 800,
    centerMode: true,
    centerPadding: "60px",
    Infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
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
                <S.CommonsText>{el.secondContents}</S.CommonsText>
              </S.TextBox>
            </S.SlickBox>
          </div>
        ))}
      </S.StyledSlider>
    </S.Wrapper>
  );
}
