import styled from "@emotion/styled";
// import { Component } from "react";
import Slider from "react-slick";

const Wrapper = styled.div`
  height: 500px;
  background-color: pink;
  width: 100%;
  /* font-family: "ChangeFont"; */
`;

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
`;

const CommonSlider = styled.div`
  width: 50%;
  padding: 10px;
  height: 300px;
  overflow: hidden;
`;

export default function SampleBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Container>
        <h2>캐러셀 적용</h2>
        <Slider {...settings}>
          <CommonSlider>
            <img src="/images/quiz/sample01.jpeg" alt="" />
          </CommonSlider>
          <CommonSlider>
            <img src="/images/quiz/sample02.jpeg" alt="" />
          </CommonSlider>
          <CommonSlider>
            <img src="/images/quiz/sample01.jpeg" alt="" />
          </CommonSlider>
          <CommonSlider>
            <img src="/images/quiz/sample03.jpeg" alt="" />
          </CommonSlider>
        </Slider>
      </Container>
    </Wrapper>
  );
}
