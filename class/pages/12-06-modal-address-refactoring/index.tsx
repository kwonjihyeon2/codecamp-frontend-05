import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

const ModalCustomPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onCompleteDaumPostcode = (data: any) => {
    // data - event아님 다음라이브러리에서 제공한 data, 타입설정시에는 직접 적기엔 많은 데이터량 - 타입스크립트 제공될땐 같이 import해도되지만 없으면 any
    console.log(data);
    setAddress(data.address);
    setZonecode(data.zonecode);
    onToggleModal();
    //취소선택시 입력값 초기화(모달 자체를 새로 랜더링하는 방법) - modal(모달창은 계속 살아있고 눈에만 안보였던것 그래서 입력데이터가 유지된 것 - 이력서 부분에서는 입력값은 유지하는 게 좋다. 기존 방법 사용) 속성이 아닌 modal 전체를 기준으로 true/false 조건을 걸어줌
  };

  return (
    <>
      <Button type="primary" onClick={onToggleModal}>
        우편번호검색
      </Button>
      {isModalVisible && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={onCompleteDaumPostcode} />
        </Modal>
      )}
    </>
  );
};

export default ModalCustomPage;

//export default function ModalCustomPage(){} 동일
