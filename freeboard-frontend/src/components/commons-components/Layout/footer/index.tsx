import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  background-color: #F7F7F7;
  border-top : 1px solid #bdbdbd;
  /* color: white; */
  padding: 50px 0;
  margin-top: 30px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export default function LayOutDesignFooter() {
  return (
    <Wrapper>
      <Container>로고 / 회사정보 / 전화번호 ...</Container>
    </Wrapper>
  );
}
