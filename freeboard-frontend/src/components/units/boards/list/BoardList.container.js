import BoardListPageUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import{FETCH_BOARDS} from './BoardList.queries'

export default function BoardListPage(){

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARDS)

    const CreateNewBoard = ()=>{
        router.push("/boards/new")
    }
    //클릭했을때 상세페이지로 가는 것 props onclick으로 연결

    const GoToDetailPage = (event) => {
       console.log(event.target.id)
        router.push(`boards/${event.target.id}`)
    }
    return(
        <BoardListPageUI 
            CreateNew={CreateNewBoard}
            GoToDetail={GoToDetailPage}
            data={data}
        />
    )
}