import styled from "@emotion/styled";
// import { Component } from "react";
import Slider from "react-slick";

const Wrapper = styled.div`
  height: 600px;
  background-color: pink;
  width: 100%;
  /* font-family: "ChangeFont"; */
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
`;

const CommonSlider = styled.div`
  height: 100%;
`;

const BannerImg = styled.img`
  width: inherit;
`;

export default function SampleBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplayspeed: 800,
    Infinity: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Container>
        <Slider {...settings}>
          <CommonSlider>
            <BannerImg src="/layout/bannerImg04.jpeg" alt="" />
          </CommonSlider>
          <CommonSlider>
            <BannerImg src="/layout/bannerImg02.jpeg" alt="" />
          </CommonSlider>
          <CommonSlider>
            <BannerImg src="/layout/bannerImg03.jpeg" alt="" />
          </CommonSlider>
          <CommonSlider>
            <BannerImg src="/layout/bannerImg04.jpeg" alt="" />
          </CommonSlider>
        </Slider>
      </Container>
    </Wrapper>
  );
}
