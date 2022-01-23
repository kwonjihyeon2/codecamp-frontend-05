import * as AAA from './BoardWrite.styles'
import {IBoardWriteUIProps} from './BoardWrite.types' 


export default function BoardWriteUI(props : IBoardWriteUIProps){

    return(
        <>
            <h1>{props.isEdit ? "수정하기" : "등록하기"}</h1>
            작성자 : <AAA.MyInput type ="text" onChange={props.ddd} defaultValue={props.isEdit ? props.data?.fetchBoard.writer : ""}/><br />
            제목 : <AAA.MyInput  type="text" onChange={props.eee} defaultValue={props.isEdit ? props.data?.fetchBoard.title : ""}/><br />
            내용 : <AAA.MyInput type="text" onChange={props.fff} defaultValue={props.isEdit ? props.data?.fetchBoard.contents : ""}/><br />
            <AAA.MyButton onClick={props.isEdit ? props.xxx : props.ccc}
                ggg={props.isActive}>

                {props.isEdit ? "수정하기" : "등록하기"}
            </AAA.MyButton>
            

            {/* {props.isEdit ? (
                <AAA.MyButton onClick={props.xxx}
                    ggg={props.isActive}>
                
                    수정하기
                </AAA.MyButton>
            ) : (
                <AAA.MyButton onClick={props.ccc}
                    ggg={props.isActive}>
                
                    등록하기
                </AAA.MyButton>
            )}

            {props.isEdit && <AAA.MyButton onClick={props.xxx } ggg={props.isActive}>수정하기</AAA.MyButton>}
            {!props.isEdit && <AAA.MyButton onClick={props.ccc} ggg={props.isActive}>등록하기</AAA.MyButton>} */}
            <div>{props.bbb}</div>

            {/* 삼항연산자는 읽기쉽게 사용하는 것을 추천 */}
        </>
    )
}