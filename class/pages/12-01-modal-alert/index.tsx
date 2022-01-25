import { Modal } from 'antd'

export default function ModalAlertPage(){

    const onClickSuccessButton = () => {
        Modal.success({content : "게시물 등록에 성공했습니다."})
    }

    const onClickFailButton = ()=>{
        Modal.error({content : "비밀번호가 틀렸습니다."})
    }

    return (
        <div>
            <button onClick={onClickSuccessButton}>알림창 메세지 나타나기(성공!)</button>
            <button onClick={onClickFailButton}>알림창 메세지 나타나기(실패)</button>
        </div>
    )
}