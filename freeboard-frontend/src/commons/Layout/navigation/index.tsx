import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  padding: 10px 0;
`;

const WrapperDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const WrapperUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

export default function LayOutDesignNavi() {
  return (
    <Wrapper>
      <WrapperDiv>
        <WrapperUl>
          <li>SHOP</li>
          <li>STYLE</li>
          <li>Q&A</li>
          <li>[공지사항]설 연휴 배송 공지</li>
        </WrapperUl>
      </WrapperDiv>
    </Wrapper>
  );
}
