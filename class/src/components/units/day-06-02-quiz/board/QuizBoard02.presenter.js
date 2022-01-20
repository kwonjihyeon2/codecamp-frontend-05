import {} from "./QuizBoard02.styles"
import { useRouter } from "next/router"

export default function QuizDetailBoardUI(props){

    const router = useRouter()

    // console.log(data)

    return(
        <div>
            <div>{router.query.qqq}번 게시글 페이지 이동 완료 !!</div>
            <div> 작성자 : {props.writer}</div>
            <div> 제목 : {props.title}</div>
            <div> 내용 : {props.content}</div>
        </div>
    )
}