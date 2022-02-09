import * as P from "./pagination.style";
import { v4 as uuidv4 } from "uuid";
import { IPropsPGUI } from "./pagination.type";

export default function PaginationUI(props: IPropsPGUI) {
  return (
    <P.Container>
      <P.ContainerBox>
        <P.CommonSpan onClick={props.onClickPrev}>{`<<`}</P.CommonSpan>
        {new Array(10).fill(1).map(
          (el, index) =>
            index + props.startPage <= props.LastPage && (
              <P.CommonSpan
                isMatched={props.matchPage === index + props.startPage}
                key={uuidv4()}
                onClick={props.onClickMovePage}
                id={String(index + props.startPage)}
              >
                {` ${index + props.startPage} `}
              </P.CommonSpan>
            )
        )}
        <P.CommonSpan onClick={props.onClickNext}>{`>>`}</P.CommonSpan>
      </P.ContainerBox>
    </P.Container>
  );
}
