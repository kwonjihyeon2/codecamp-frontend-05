import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 80px auto;
  /* display: flex;
  flex-direction: column;
  position: relative;
  align-self: flex-start;
  height: unset; */
`;

export const BannerStyle = styled.div`
  width: 100%;
  margin: 100px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgb(188, 175, 149);
  cursor: pointer;
`;

export const WrapperBox = styled.div`
  width: 100%;
`;

export const WrapperTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  display: flex;
  text-align: center;
`;

export const WrapperListBox = styled.div`
  margin: 50px 0;
  cursor: pointer;
  .slick-next {
    right: 10px;
    top: 35%;
  }
  .slick-next:before {
    font-size: 2.5rem;
    color: black;
  }
`;

export const WrapperList = styled.div`
  position: fixed;
  top: 40%;
  right: 3%;
  width: 100px;
  border: 1px solid #000;
`;

export const SlickBox = styled.div`
  padding-right: 20px;
`;

export const ListBox = styled.div`
  width: 100%;
  height: 40vh;
  margin-bottom: 10px;
`;

export const ListImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductName = styled.span`
  font-size: 1rem;
  font-weight: 700;
`;

export const ArrayBox = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
