import { v4 as uuidv4 } from "uuid";
import * as L from "./ProductList.style";

export default function ItemListUI(props) {
  return (
    <L.Wrapper>
      <div>
        <h1>목록</h1>
        {props.data?.fetchUseditems.map((el) => (
          <div key={uuidv4()} onClick={props.MoveToDetail(el)}>
            <span>{el.name}</span>
            <span>{el.remarks}</span>
          </div>
        ))}
      </div>
      <div>
        <h1>오늘 본 상품</h1>
        <div>
          {props.todayView.map((el) => (
            <div key={uuidv4()}>
              <span>{el.name}</span>
            </div>
          ))}
        </div>
      </div>
    </L.Wrapper>
  );
}
