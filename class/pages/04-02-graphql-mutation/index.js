import { useMutation, gql } from '@apollo/client'
import axios from 'axios'
import { Fragment, useState } from 'react'

const CREATE_BOARD = gql`
    mutation{
        createBoard(
        writer :"권지현23"
        title :"제목입니다"
        contents :"내용입니다~"
        ) {
            _id
            message
            number
        }
    }
` //이모션 가져온 것과 비슷

export default function graphqlMutation(){

    const [aaa,setAaa] = useState("")
    const [qqq] = useMutation(CREATE_BOARD)

    //화살표 함수 호이스팅 막기 위해 사용 기본 함수보다 성능은 조금 느릴 수 있음. 속도는 리액트의 추가적인 기능으로 보완함 추후 예정
    const zzz = async() =>{
        const result = await qqq()
        console.log(result.data.createBoard.message)
        setAaa(result.data.createBoard.message)
        
        // const result = await axios.get("https://koreanjson.com/posts/1") -> REST
        //graphql - 함수형식으로 작성 : 실행함수() 이렇게 해주면 벡엔드로 요청이 되는 것
        //이렇게 하면 권지현23만 동일하게 등록 -> 03파일 참고!
    }

    return(
        <>
            <button onClick={zzz}>Graphql-API 요청하기</button>
            <div>{aaa}</div>
        </>
    )

}