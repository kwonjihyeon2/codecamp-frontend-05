import { ChangeEvent, useState } from "react";
import { Modal, Button } from "antd";

const ModalCustomPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [password, setPassword] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    console.log(event.target.value);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>
          비밀번호 입력 : <input type="password" onChange={onChangePassword} />
        </p>
        <p>{password}</p>
      </Modal>
    </>
  );
};

export default ModalCustomPage;

//export default function ModalCustomPage(){} 동일
