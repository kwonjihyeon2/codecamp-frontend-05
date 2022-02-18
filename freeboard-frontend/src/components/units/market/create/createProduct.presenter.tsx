import MarketUploadfile from "../../../commons-components/Upload/marketimage/Uploadcomponent";
import { v4 as uuidv4 } from "uuid";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

interface IpropsCreateUI {
  register: any;
  onClickSubmit: (data) => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onChangefile: (file: string, index: number) => void;
  uploadfile: string[];
}

export default function CreateProductUI(props: IpropsCreateUI) {
  return (
    <div>
      <h1>상품 등록하기</h1>
      <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <div>
          상품명 <input type="text" {...props.register("name")} />
        </div>
        <div>
          간단설명 <input type="text" {...props.register("remarks")} />
        </div>
        <div>
          상품설명 <input type="text" {...props.register("contents")} />
        </div>
        <div>
          판매가격 <input type="text" {...props.register("price")} />
        </div>
        <div>
          태그 <input type="text" />
        </div>
        <div>거래위치</div>
        <div>
          이미지
          {props.uploadfile.map((el, index: number) => (
            <MarketUploadfile
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangefile={props.onChangefile}
            />
          ))}
        </div>
        <button onClick={props.onClickSubmit}>등록하기</button>
      </form>
    </div>
  );
}
