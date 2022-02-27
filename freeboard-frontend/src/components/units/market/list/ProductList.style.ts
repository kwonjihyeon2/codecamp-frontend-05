import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const WrapperList = styled.div`
  width: 200px;
  border: 1px solid #000;
`;

export const ListSide = styled.div`
  padding: 20px 0;
  overflow: hidden;
  .slick-slider {
    height: 200px;
    /* overflow: hidden; */
  }
  .slick-prev {
    top: -5%;
    left: 45%;
    &:before {
      content: "<";
      font-size: 16px;
      color: red;
    }
  }
  .slick-next {
    top: 100%;
    left: 45%;
    &:before {
      content: ">";
      font-size: 16px;
      color: red;
    }
  }
  .slick-slide div div {
    width: 100%;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
`;

export const ListBox = styled.div``;
