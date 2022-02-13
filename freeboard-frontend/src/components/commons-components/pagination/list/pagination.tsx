import { MouseEvent } from "react";
import PaginationUI from "./pagination.presenter";
import { IProsPage } from "./pagination.type";

export default function Pagination(props: IProsPage) {
  const onClickMovePage = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof Element) {
      props.refetch({ page: Number(event.target.id) });
    }

    const active = Number(event.target.id);
    props.setMatchPage(active);
  };

  const onClickPrev = () => {
    if (props.startPage === 1) return;
    props.setStartpage((prev: number) => prev - 10);
    props.refetch({ page: props.startPage - 10 });
  };

  const onClickNext = () => {
    if (props.startPage + 10 > props.LastPage) return;
    props.setStartpage((prev: number) => prev + 10);
    props.refetch({ page: props.startPage + 10 });
  };

  return (
    <PaginationUI
      startPage={props.startPage}
      matchPage={props.matchPage}
      LastPage={props.LastPage}
      onClickMovePage={onClickMovePage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
    />
  );
}
