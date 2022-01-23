//수정페이지

//01.20 수업 : 여기(수정페이지)는 default값잇어야,,
//1.router.query.mynumber로 게시글 fetchboard
//2.받아온데이터를 props로넘겨줌
//3.데이터를 받아오려면 Query로 조회해줘야함
//4.Query는 자동으로 실행되니 variables를 같이 적어야
//5.넘버는 타입이 인트기 때문에 숫자값으로 바꿔줘야함(HTML에서 가져온것이기때문에 문자열로 받아온 상태)
//presenter 가 ui기 때문에 거기까지 props해줘야함

import { useQuery , gql } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/10-write/BoardWrite.container";

const FETCH_BOARD = gql`
    query fetchBoard($number : Int){
        fetchBoard(number : $number){
            writer
            title
            contents
        }
    }
`

export default function BoardsEditPage(){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD,{
        variables : { number : Number(router.query.mynumber) }
    })

    return <BoardWrite isEdit={true} data={data}/>
    
}