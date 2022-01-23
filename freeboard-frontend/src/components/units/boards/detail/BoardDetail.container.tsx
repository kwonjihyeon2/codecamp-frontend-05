import {useRouter} from 'next/router'
import FreeBoardDetailUI from "./BoardDetail.presenter"
import { useQuery,useMutation } from "@apollo/client"
import { FETCH_BOARD,FETCH_DELETE_BOARD } from "./BoardDetail.queries"


export default function FreeBoardDetail() {

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD,{
        variables : {boardId : router.query.board_Id}
    })
    // console.log(data.fetchboard.title)
    
    const GoList = ()=>{
        router.push("/boards")
    }

    const GoEditPage = () =>{
        router.push(`/boards/${router.query.board_Id}/edit`)
    }

    const [deleteBoard] = useMutation(FETCH_DELETE_BOARD)
    const DeleteDetailBoard = async () =>{
        try{
            await deleteBoard({
                variables : {boardId : String(router.query.board_Id)}
            })
            console.log(router.query.board_Id)
            alert("게시물이 삭제되었습니다.")
            router.push("/boards")
        } catch(error){
            console.log(error.message)
        }
    }


    return(

        <FreeBoardDetailUI
            GoList={GoList}
            GoEditPage={GoEditPage}
            deleteBoard={DeleteDetailBoard}

            data={data}
        />
    )
} 