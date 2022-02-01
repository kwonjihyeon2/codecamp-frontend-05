import { MouseEvent, useState } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const ContainerBox = styled.div`
  width: 50%;
  text-align: center;
`;

const CommonSpan = styled.span`
  margin: 0px 10px;
  cursor: pointer;
  &:hover {
    font-weight: 700;
  }
`;

interface IProsPage {
  refetch: any;
  LastPage: number;
}

export default function Pagination(props: IProsPage) {
  const [startPage, setStartpage] = useState(1);

  const onClickMovePage = (event: MouseEvent<HTMLSpanElement>) => {
    props.refetch({ page: Number(event.target.id) });
  };

  const onClickPrev = () => {
    if (startPage === 1) return;
    setStartpage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNext = () => {
    if (startPage + 10 > props.LastPage) return;
    setStartpage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <Container>
      <ContainerBox>
        <CommonSpan onClick={onClickPrev}>{`<<`}</CommonSpan>
        {new Array(10).fill(1).map(
          (_, index) =>
            index + startPage <= props.LastPage && (
              <CommonSpan
                key={index + startPage}
                onClick={onClickMovePage}
                id={String(index + startPage)}
              >
                {` ${index + startPage} `}
              </CommonSpan>
            )
        )}
        <CommonSpan onClick={onClickNext}>{`>>`}</CommonSpan>
      </ContainerBox>
    </Container>
  );
}
