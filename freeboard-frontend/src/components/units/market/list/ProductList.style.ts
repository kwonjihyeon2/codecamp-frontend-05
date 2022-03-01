import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 50px auto;
  /* display: flex;
  flex-direction: column;
  position: relative;
  align-self: flex-start;
  height: unset; */
`;

export const WrapperBox = styled.div`
  width: 100%;
  /* display: flex;
  align-self: flex-start; */
`;

export const WrapperListBox = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
`;

export const WrapperList = styled.div`
  position: fixed;
  top: 40%;
  right: 3%;
  width: 100px;
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
