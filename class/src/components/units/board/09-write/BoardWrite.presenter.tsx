import * as AAA from './BoardWrite.styles'
//중괄호 - 내가 받을 부분만 골라서 받을 수 있음
//모두 가져오려면 하나의 변수를 설정해 가져올 수 있음

//01.20 수업 : 수정하기
//페치보드로 가져온 데이터가 defaultvalue에 들어가야함
//props로 받아온데이터 값의 페치보드 안의 title/writer/contents를 가져온다 = 값해석
//값이 있는 지 데이터를 받아온 후 값을 넣어줘야하니까 조건부렌더링(옵셔널체이닝)해줘야함
//여기서 주의 ! 옵셔널 체이닝과 if문의 삼항연산자가 같이 적혀져있음.
//등록페이지는 어짜피 데이터가 안나오니까 삼항연산자를 뺴주어도됨 
//렌더링 된 state값이 빈칸이기때문에(초기값) 적어주지않으면 빈칸으로 적용됨
//해결법 1. 자동적으로 defaultvalue를 state 초기값으로 설정해주기
//**해결법 2. mutation할떄 변경된 값만 보내주기(제목만 바꾸려면 제목만 보내주기)

export default function BoardWriteUI(props){

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