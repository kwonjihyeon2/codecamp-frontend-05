import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 50px 0;
`;

export const WrapperList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function BoardsSample(props) {
  // 게시물 목록 분리

  return (
    <Wrapper>
      {props.data?.fetchBoards?.map((el, index) => (
        <WrapperList key={el._id}>
          <div>{index + 1}</div>
          <div>{el.title}</div>
          <div> {el.writer}</div>
        </WrapperList>
      ))}
    </Wrapper>
  );
}
