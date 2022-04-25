import { keyframes } from "@emotion/react";
import styled from "@emotion/styled/";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const Wrapper = styled.div`
  /* height: 500px; */
  width: 100%;
  padding: 30px 0;
  overflow: hidden;
  /* font-family: "ChangeFont"; */
  background: linear-gradient(180deg, #000 50%, #ffffff 50%);
`;

export const SlickBox = styled.div`
  position: relative;
`;

const slidein = keyframes`
    from{
        opacity : 0%;
        top: 50%;
    }
    to{
        opacity  :100%;
        top: 70%;
    }
`;

export const TextBox = styled.div`
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: ${slidein};
  animation-duration: 2s;
  color: white;
  font-weight: 700;
  /* animation-iteration-count: infinite; */
`;

export const CommonsText = styled.div`
  font-size: 2.5rem;
  transition: all 2s;
`;

export const CommonSubText = styled.div`
  background: #fff;
  color: #bc196d;
  padding: 15px 20px;
  width: 150px;
  margin-top: 30px;
  font-size: 1rem;
  background-color: #fff;
  border-radius: 30px;
`;

export const ColorImg = styled.img`
  filter: brightness(70%);
  &:hover {
    transition: all 1s;
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
    border-radius: 30px;
    margin: 0 15px;
    overflow: hidden;
  }

  .slick-slide img {
    width: 100%;
    margin: 0 auto;
    height: 80vh;
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
