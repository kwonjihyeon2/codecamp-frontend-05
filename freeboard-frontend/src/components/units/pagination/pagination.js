import { useState } from "react";

export default function Pagination(props) {
  const [startPage, setStartpage] = useState(1);

  const onClickMovePage = (event) => {
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
    <div>
      <span onClick={onClickPrev}>{`<<`}</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= props.LastPage && (
            <span
              key={index + startPage}
              onClick={onClickMovePage}
              id={String(index + startPage)}
            >
              {` ${index + startPage} `}
            </span>
          )
      )}
      <span onClick={onClickNext}>{`>>`}</span>
    </div>
  );
}
