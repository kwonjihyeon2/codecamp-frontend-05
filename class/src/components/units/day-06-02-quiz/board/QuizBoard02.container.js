import {useRouter} from 'next/router'
import {useQuery} from '@apollo/client'
import QuizDetailBoardUI from './QuizBoard02.presenter'
import {FETCH_BOARD} from './QuizBoard02.queries'


export default function QuizDetailBoard(){

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables : {number : Number(router.query.qqq)}
    })

    //{안의 내용} 변경불가 useMutation 은 실행시킬 함수명이었지만
    //Mutation - 우리가원하는 시점에서 동작을 실행시킬수있었지만 Query는 페이지가 실행될 때 자동으로 요청됨(조회이기때문에)
    
    console.log(router.query.qqq,data)

   

    return(
        <QuizDetailBoardUI 
            writer={data?.fetchBoard.writer}
            title={data?.fetchBoard.title}
            content={data?.fetchBoard.contents}
        />
    )
}