import { useMutation, gql } from '@apollo/client'
import { Fragment, useState } from 'react'
import { IMutation, IMutationCreateBoardArgs } from '../../src/commons/types/generated/types'

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
`

export default function graphqlMutation(){

    const [aaa,setAaa] = useState<string>("")
    const [qqq] = useMutation<Pick<IMutation,"createBoard">,IMutationCreateBoardArgs >(CREATE_BOARD)
    //< pick: 유틸리티 타입<pick<수정인지 조회인지,받아올데이터>,넘겨줄데이터>
    //Omit : 제외 - 유틸리티타입

    const zzz = async() =>{
        const result = await qqq()
        result.data?.createBoard?.message
        console.log(result.data?.createBoard?.message)
        setAaa(result.data?.createBoard?.message || "없으면 이게 들어가게 오류 제거")
        
    }

    return(
        <>
            <button onClick={zzz}>Graphql-API 요청하기</button>
            <div>{aaa}</div>
        </>
    )

}