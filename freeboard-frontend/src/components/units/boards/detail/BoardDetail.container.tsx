import {useRouter} from 'next/router'
import FreeBoardDetailUI from "./BoardDetail.presenter"
import { useQuery,useMutation } from "@apollo/client"
import { FETCH_BOARD,FETCH_DELETE_BOARD, LIKE_BOARD,DIS_LIKE_BOARD} from "./BoardDetail.queries"
import { useState } from 'react'
// import ReactPlayer from 'react-player'

export default function FreeBoardDetail() {

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD,{
        variables : {boardId : String(router.query.board_Id)}
    })
    // console.log(data?.fetchBoard.likeCount)
    
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

    const [Like,setLike] = useState(0)
    const [LikeBoard] = useMutation(LIKE_BOARD)
    const LikeBtn = async () => {
        try{
            await LikeBoard({
                variables : {boardId : String(router.query.board_Id)},
                refetchQueries : [{
                    variables : { boardId : String(router.query.board_Id)},
                    query : FETCH_BOARD
                }]
            })

            console.log(Like,data?.likeBoard)
            setLike(data?.likeBoard)
        } catch(error){
            console.log(error.message)
        }
    }

    const [DisLike,setDisLike] = useState(0)
    const [DisLikeBoard] = useMutation(DIS_LIKE_BOARD)
    const DisLikeBtn = async () => {
        try{
            await DisLikeBoard({
                variables : {boardId : String(router.query.board_Id)},
                refetchQueries : [{
                    variables : { boardId : String(router.query.board_Id)},
                    query : FETCH_BOARD
                }]
            })

            console.log(DisLike,data?.fetchBoard.dislikeCount)
            setDisLike(data?.fetchBoard.dislikeBoard)
        } catch(error){
            console.log(error.message)
        }
    }
    

    return(

        <FreeBoardDetailUI
            GoList={GoList}
            GoEditPage={GoEditPage}
            deleteBoard={DeleteDetailBoard}
            LikeBtn={LikeBtn}
            DisLikeBtn={DisLikeBtn}
            data={data}

        />
    )
} 