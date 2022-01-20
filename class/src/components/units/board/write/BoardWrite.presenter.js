import * as AAA from './BoardWrite.styles'
//중괄호 - 내가 받을 부분만 골라서 받을 수 있음
//모두 가져오려면 하나의 변수를 설정해 가져올 수 있음

export default function BoardWriteUI(props){

    return(
        <>
            작성자 : <AAA.MyInput type ="text" onChange={props.ddd}/><br />
            제목 : <AAA.MyInput  type="text" onChange={props.eee} /><br />
            내용 : <AAA.MyInput type="text" onChange={props.fff} /><br />
            <AAA.MyButton onClick={props.ccc} ggg={props.isActive}>Graphql-API 요청하기</AAA.MyButton>
            <div>{props.bbb}</div>
        </>
    )
}