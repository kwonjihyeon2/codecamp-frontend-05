import { Fragment, useState } from "react";
import * as S from "./paginationComponents/paginationStyled";

export default function PaginationSample(props) {
  // 페이지네이션 분리
  const [pageNumber, setPageNumber] = useState(1);
  const [BtnId, setBtnId] = useState(1);

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
    setBtnId(Number(event.target.id));
    console.log(BtnId);
  };

  const [isActive, setIsActive] = useState(true);
  const [nextActive, setNextActive] = useState(false);

  const onClickPrevPage = () => {
    if (pageNumber === 1) {
      setIsActive(true);
      return;
    }
    console.log(pageNumber);
    setPageNumber((prev) => prev - 10);
    props.refetch({ page: pageNumber - 10 });
    setNextActive(false);
  };

  const onClickNextPage = () => {
    if (props.LastPage <= 10 + pageNumber) {
      setNextActive(true);
      return;
    }
    setPageNumber((prev) => prev + 10);
    props.refetch({ page: pageNumber + 10 });
    setIsActive(false);
  };

  return (
    <S.Wrapper>
      <S.PrevButton
        onClick={onClickPrevPage}
        disabled={isActive ? true : false}
      >
        {"<< "}
      </S.PrevButton>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + pageNumber <= props.LastPage && (
            <Fragment key={String(index + pageNumber)}>
              <S.NumberStyle
                className={String(BtnId)}
                onClick={onClickPage}
                id={String(index + pageNumber)}
                style={{
                  color: BtnId === index + pageNumber ? "green" : "#000",
                }}
              >
                {` ${index + pageNumber} `}
              </S.NumberStyle>
            </Fragment>
          )
      )}
      <button
        onClick={onClickNextPage}
        disabled={nextActive ? true : false}
      >{` >>`}</button>
    </S.Wrapper>
  );
}
