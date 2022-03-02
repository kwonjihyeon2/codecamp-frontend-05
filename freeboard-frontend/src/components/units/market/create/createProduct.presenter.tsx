import MarketUploadfile from "../../../commons-components/Upload/marketimage/Uploadcomponent";
import { v4 as uuidv4 } from "uuid";
import { IpropsCreateUI } from "./createProduct.types";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import { MdClose } from "react-icons/md";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function CreateProductUI(props: IpropsCreateUI) {
  return (
    <div>
      <h1>상품 {`${props.isEdit ? "수정" : "등록"}`}하기</h1>
      <div>
        상품명{" "}
        <input
          type="text"
          defaultValue={props.isEdit ? props.fetchItem?.fetchUseditem.name : ""}
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
        상품설명 <ReactQuill onChange={props.onChangeContents} />
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
      <div style={{ display: "flex" }}>
        태그{" "}
        {props.tag.map((el, index) => (
          <div
            onClick={props.onDeleteTag(index)}
            key={uuidv4()}
            style={{
              display: "flex",
            }}
          >
            {el}
            <span
              style={{ margin: "0 5px", display: "flex", alignItems: "center" }}
            >
              <MdClose />
            </span>
          </div>
        ))}
      </div>
      <input type="text" onKeyPress={props.onChangeTag} />
      <div>
        <h4>거래 지역</h4>
        <div>
          <input
            type="text"
            placeholder="07250"
            readOnly
            value={
              props.zonecode ||
              props.fetchItem?.fetchUseditem.useditemAddress?.zipcode
            }
          />
          <button onClick={props.onToggleModal}>우편번호검색</button>
          {props.isModal && (
            <Modal
              visible={true}
              onOk={props.onToggleModal}
              onCancel={props.onToggleModal}
            >
              <DaumPostcode onComplete={props.onPostcode} />
              <div></div>
            </Modal>
          )}
          <input type="text" readOnly value={props.Address} />
        </div>
      </div>
      이미지
      {props.uploadfile.map((el, index: number) => (
        <MarketUploadfile
          key={uuidv4()}
          index={index}
          fileUrl={el}
          onChangefile={props.onChangefile}
        />
      ))}
      <form
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickEdit : props.onClickSubmit
        )}
      >
        <button>{props.isEdit ? "수정하기" : "등록하기"}</button>
      </form>
    </div>
  );
}
