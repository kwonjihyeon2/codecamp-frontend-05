import MarketUploadfile from "../../../commons-components/Upload/marketimage/Uploadcomponent";
import { v4 as uuidv4 } from "uuid";
import { IpropsCreateUI } from "./createProduct.types";

export default function CreateProductUI(props: IpropsCreateUI) {
  return (
    <div>
      <h1>상품 {`${props.isEdit ? "수정" : "등록"}`}하기</h1>
      <form
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickEdit : props.onClickSubmit
        )}
      >
        <div>
          상품명{" "}
          <input
            type="text"
            defaultValue={
              props.isEdit ? props.fetchItem?.fetchUseditem.name : ""
            }
            // readOnly={!!props.fetchItem?.fetchUseditem.name}
            {...props.register("name")}
          />
        </div>
        <div>
          간단설명{" "}
          <input
            type="text"
            defaultValue={
              props.isEdit ? props.fetchItem?.fetchUseditem.remarks : ""
            }
            // readOnly={!!props.fetchItem?.fetchUseditem.name}
            {...props.register("remarks")}
          />
        </div>
        <div>
          상품설명{" "}
          <input
            type="text"
            defaultValue={
              props.isEdit ? props.fetchItem?.fetchUseditem.contents : ""
            }
            // readOnly={!!props.fetchItem?.fetchUseditem.name}
            {...props.register("contents")}
          />
        </div>
        <div>
          판매가격{" "}
          <input
            type="text"
            defaultValue={
              props.isEdit ? props.fetchItem?.fetchUseditem.price : ""
            }
            {...props.register("price")}
          />
        </div>
        <div>
          태그 <input type="text" />
        </div>
        <div>거래위치</div>
        이미지
        {props.uploadfile.map((el, index: number) => (
          <MarketUploadfile
            key={uuidv4()}
            index={index}
            fileUrl={el}
            onChangefile={props.onChangefile}
          />
        ))}
        <button>{props.isEdit ? "수정하기" : "등록하기"}</button>
      </form>
    </div>
  );
}
