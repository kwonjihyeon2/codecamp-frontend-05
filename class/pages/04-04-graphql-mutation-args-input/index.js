import { useMutation, gql } from '@apollo/client'
import axios from 'axios'
import { Fragment, useState } from 'react'

const CREATE_BOARD = gql`
    mutation createBoard($writer:String, $title : String, $contents: String) {

        createBoard(writer : $writer, title: $title, contents : $contents) {
            _id
            message
            number
        }
    }
` //이모션 가져온 것과 비슷

export default function graphqlMutationArgsInput(){

    const [myWriter,setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")

    const [aaa,setAaa] = useState("")
    const [qqq] = useMutation(CREATE_BOARD)

    //화살표 함수 호이스팅 막기 위해 사용 기본 함수보다 성능은 조금 느릴 수 있음. 속도는 리액트의 추가적인 기능으로 보완함 추후 예정
    const zzz = async () =>{
        const result = await qqq({
            variables : {
                writer : myWriter ,title :myTitle,contents :myContents
            }
        })
        console.log(result.data.createBoard.message)
        setAaa(result.data.createBoard.message)
        
        // const result = await axios.get("https://koreanjson.com/posts/1") -> REST
        //graphql - 주소x,함수형식으로 작성 : const 상수명 = 실행함수() 이렇게 해주면 벡엔드로 요청이 되는 것. 이때 응답 후 다음 단계 진행하게하려면 async/await 해주기
        //const result = qqq()에 새로운 값을 추가하면 값이 바뀐 새 게시물이 등록됨.
        //웹상에서 내가 작성한 것 등록하려면 variables 에 state를 설정해줘야함.
    }

    const onChangeMyWriter = (event) =>{
        setMyWriter(event.target.value)
    }

    const onChangeTitle = (event) =>{
        setMyTitle(event.target.value)
    }
    
    const onChangeContents = (event) =>{
        setMyContents(event.target.value)
    }

    return(
        <>
            작성자 : <input type ="text" onChange={onChangeMyWriter}/><br />
            제목 : <input  type="text" onChange={onChangeTitle}/><br />
            내용 : <input type="text" onChange={onChangeContents}/><br />
            <button onClick={zzz}>Graphql-API 요청하기</button>
            <div>{aaa}</div>
        </>
    )

}