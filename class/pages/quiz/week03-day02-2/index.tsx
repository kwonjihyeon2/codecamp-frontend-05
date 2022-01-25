import DaumPostcode from "react-daum-postcode";
import { Modal, Button } from "antd";
import { useState } from "react";

export default function QuizWeekdayThreePage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const [Address, setAddress] = useState("");

  const onCompleteDaumPostcode = (data: any) => {
    console.log(data);
    console.log(data.address);
    setAddress(data.address);
    onToggleModal();
  };

  const [state, setState] = useState(0);

  function sumAll() {
    setState(state + 1);
    setState(state + 2);
    setState(state + 3);
    setState(state + 4);
  }

  return (
    <>
      <Button onClick={onToggleModal}>모달 열기</Button>
      {isModalVisible && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={onCompleteDaumPostcode} />
        </Modal>
      )}
      {Address}

      <div>결과 : {state}</div>
      <button onClick={sumAll}>실행!</button>
    </>
  );
}
