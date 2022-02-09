import { MouseEvent, useState } from "react";
import PaginationUI from "./pagination.presenter";
import { IProsPage } from "./pagination.type";

export default function Pagination(props: IProsPage) {
  const [startPage, setStartpage] = useState(1);
  const [matchPage, setMatchPage] = useState(1);

  const onClickMovePage = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof Element)
      props.refetch({ page: Number(event.target.id) });

    const active = Number(event.target.id);
    setMatchPage(active);
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
    <PaginationUI
      startPage={startPage}
      matchPage={matchPage}
      LastPage={props.LastPage}
      onClickMovePage={onClickMovePage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
    />
  );
}
