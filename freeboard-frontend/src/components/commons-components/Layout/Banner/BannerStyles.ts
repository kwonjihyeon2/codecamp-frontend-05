import { keyframes } from "@emotion/react";
import styled from "@emotion/styled/";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const Wrapper = styled.div`
  height: 500px;
  width: 100%;
  overflow: hidden;
  /* font-family: "ChangeFont"; */
`;

export const SlickBox = styled.div`
  position: relative;
`;

const slidein = keyframes`
    from{
        opacity : 0%;
        left : 30%;
    }
    to{
        opacity  :100%;
        left : 5%;
    }
`;

export const TextBox = styled.div`
  position: absolute;
  bottom: 25%;
  left: 5%;
  animation-name: ${slidein};
  animation-duration: 2s;
  /* animation-iteration-count: infinite; */
`;

export const CommonsText = styled.div`
  font-size: 32px;
  color: white;
  font-weight: 700;
  transition: all 2s;
`;
export const ColorImg = styled.img`
  filter: brightness(70%);
  &:hover {
    transition: all 1s;
    transform: scale(1.1);
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-list {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }

  .slick-slide > div {
    width: 1240px;
    margin: 0 15px;
    overflow: hidden;
  }

  .slick-slide img {
    width: 100%;
    margin: 0 auto;
    height: 600px;
  }

  @media (max-width: 1239px) {
    .slick-slide > div {
      width: 100%;
      overflow: hidden;
    }
    .slick-slide img {
      width: 100%;
    }
  }
`;
