import DaumPostcode from "react-daum-postcode";
import { Modal, Button } from "antd";
import { useState } from "react";

export default function QuizWeekdayThreePage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onCompleteDaumPostcode = (data: any) => {
    console.log(data);
    onToggleModal();
  };

  //모달
  const [unModalVisible, setUnModalVisible] = useState(false);

  const onToggleOpenModal = () => {
    setUnModalVisible((prev) => !prev);
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
      <br />
      <br />

      <Button onClick={onToggleOpenModal}>모달 열기</Button>
      <Modal
        title="게시글 등록"
        visible={unModalVisible}
        onOk={onToggleOpenModal}
        onCancel={onToggleOpenModal}
      >
        <p>게시글이 등록되었습니다.</p>
      </Modal>
    </>
  );
}
