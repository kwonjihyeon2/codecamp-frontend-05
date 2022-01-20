import { ChangeBtn,CommonInput } from './QuizBoard.styles'

export default function QuizBoardWriteUI(props){

    return(
        <div>
            <div>이름 : <CommonInput type="text" onChange={props.ChangeName}/></div>
            <div>비밀번호 : <CommonInput type="text" onChange={props.ChangePassword}/></div>
            <div>제목 : <CommonInput type="text" onChange={props.ChangeTitle}/></div>
            <div>내용 : <CommonInput type="text" onChange={props.ChangeContent}/></div>
            <ChangeBtn isActive={props.isActive}>등록하기</ChangeBtn>
        </div>
    )
    
}