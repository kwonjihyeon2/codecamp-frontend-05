import { useState } from 'react';
import { Modal, Button } from 'antd'
import DaumPostcode from 'react-daum-postcode'


const ModalCustomPage = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [address,setAddress] = useState("");
    const [zonecode,setZonecode] = useState("");

  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    
    const onCompleteDaumPostcode = (data : any) => {
      // data - event아님 다음라이브러리에서 제공한 data, 타입설정시에는 직접 적기엔 많은 데이터량 - 타입스크립트 제공될땐 같이 import해도되지만 없으면 any
      console.log(data);
      setAddress(data.address)
      setZonecode(data.zonecode)
      setIsModalVisible(false)
      //취소선택시 입력값 초기화
    }

    return (
      <>
        <Button type="primary" onClick={showModal}>우편번호검색        </Button>
        <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <DaumPostcode onComplete={onCompleteDaumPostcode}/>
              <div></div>
        </Modal>
      </>
    );
};

export default ModalCustomPage


//export default function ModalCustomPage(){} 동일