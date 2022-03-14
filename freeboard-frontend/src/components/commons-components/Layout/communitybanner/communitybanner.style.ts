import styled from "@emotion/styled/";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const Wrapper = styled.div`
  width: 100%;
  padding: 30px 50px;
  overflow: hidden;
  background: #000;
`;

export const SlickTitle = styled.div`
  padding-left: 20px;
  font-size: 1.5rem;
  color: #fff;
`;

export const SlickTitleH1 = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: 700;
  font-size: 1rem;
`;

export const MainSlick = styled.div`
  padding: 0 20px;
  position: relative;
`;

export const SlickimgBox = styled.div`
  height: 35vh;
`;

export const CommonsText = styled.div`
  margin-top: 5px;
`;

export const ColorImg = styled.img`
  /* filter: brightness(90%); */
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
`;

export const MySlider = styled(Slider)`
  padding-top: 80px;
  .slick-prev,
  .slick-next {
    top: 8%;
    color: #fff;
  }
  .slick-prev {
    left: 2%;
  }
  .slick-next {
    right: 93%;
  }
`;
