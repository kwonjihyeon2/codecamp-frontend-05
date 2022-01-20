import * as AAA from './BoardWrite.styles'
//중괄호 - 내가 받을 부분만 골라서 받을 수 있음
//모두 가져오려면 하나의 변수를 설정해 가져올 수 있음

export default function BoardWriteUI(props){

    return(
        <>
            <h1>{props.isEdit ? "수정하기" : "등록하기"}</h1>
            작성자 : <AAA.MyInput type ="text" onChange={props.ddd}/><br />
            제목 : <AAA.MyInput  type="text" onChange={props.eee} /><br />
            내용 : <AAA.MyInput type="text" onChange={props.fff} /><br />
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