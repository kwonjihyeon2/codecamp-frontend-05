
import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import FreeBoardCommentsUI from "./BoardCommentList.presenter"
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENT,UPDATE_BOARD_COMMENT } from "./BoardCommentList.queries"
// import { IBoardCommentProps } from "./BoardComment.types"

export default function FreeBoardCommentsList() {

    const router = useRouter()

    const [myWriter,setMywriter] = useState("")
    const [myPassword,setMyPassword] = useState("")
    const [myContents,setMyContents] = useState("")
    const [isActive,setIsActive] = useState(false)
    const [length, setLength] = useState(0)

    const { data } = useQuery(FETCH_BOARD_COMMENT,{
        variables : { page : 1, boardId : String(router.query.board_Id)}
    })
    // console.log(data?.fetchBoardComments.writer)

    const onChangeMywriter = (event:ChangeEvent<HTMLInputElement>) => {
        setMywriter(event.target.value)
        if(event.target.value){
            setIsActive(true)
        }
    }
    const onChangePassword = (event:ChangeEvent<HTMLInputElement>) =>{
        setMyPassword(event.target.value)
        const myPw = event.target.value

        if(myPw.length > 4){
            setIsActive(true)
        }
    }

    const onChangeContents = (event:ChangeEvent<HTMLTextAreaElement>) =>{
        setMyContents(event.target.value)
        const maxLength = event.target.value.length
        if(maxLength){
            setIsActive(true)
        }
        setLength(maxLength)
        if(maxLength >= 100){
            alert("댓글 작성은 100자까지 가능합니다.")
        }
    }

    const [DeleteComment] = useMutation(DELETE_BOARD_COMMENT)

    const DeleteCommentBtn = async (event :any) =>{
        try{
            const InputPassword = prompt("비밀번호를 입력하세요.")

            await DeleteComment({
                variables : {password : InputPassword, boardCommentId : String(event.target.id)},
                refetchQueries : [{
                    variables : { page : 1, boardId : String(router.query.board_Id)},
                    query : FETCH_BOARD_COMMENT
                }]
            }) 
            // console.log(event.target.id)
            console.log(InputPassword)

        } catch(error){
            console.log(error.message)
        }

    }

    const [UpdateComment] = useMutation(UPDATE_BOARD_COMMENT)
    const [isEdit, setIsEdit] = useState(false)
    const [EditId,setEditId] = useState()
    const [StarRating,setRating] = useState()

    const StarValue = (value) =>{
        setRating(value)
    }

    const EditCommentBtn = async (event:any)=>{
        const UpdatePassword = prompt("비밀번호를 입력하세요.")
        // setIsEdit(true)
    
        if(!isEdit){
            
            setIsEdit(true)

            try{
                
                const myVariables = {contents : myContents , rating : StarRating}

                if(!myContents){ myVariables.contents = myContents }

                const EditResult = await UpdateComment({
                    variables : {updateBoardCommentInput : myVariables, password : UpdatePassword, boardCommentId : event.target.id},
                    refetchQueries : [{
                        variables : { page : 1, boardId : router.query.board_Id},
                        query : FETCH_BOARD_COMMENT
                    }]
                })
                
                setEditId(EditResult.data.updateBoardComment._id)
                const EditId = EditResult.data.updateBoardComment._id
                console.log(EditId,isEdit,data?.updateBoardComment.rating)
                
            } catch(error){
                console.log(error.message)
            }

            setIsEdit(true)
        } 
        
    }

    const UpdateCommentBtn = async (event:any)=>{

        try{

            const UpdatePassword = prompt("비밀번호를 입력하세요.")
            const myOtherVariables = {contents : myContents , rating : StarRating}

            if(!myContents){ myOtherVariables.contents = myContents }


            const UpdateResult = await UpdateComment({
                variables : {
                    updateBoardCommentInput : myOtherVariables, password : UpdatePassword, boardCommentId : event.target.id},
                refetchQueries : [{
                    variables : { page : 1, boardId : String(router.query.board_Id)},
                    query : FETCH_BOARD_COMMENT
                }]
            })
            
            setEditId(UpdateResult.data.updateBoardComment._id)

            console.log(isEdit, UpdateResult,StarValue)
            setIsEdit(false)
            
        } catch(error){
            console.log(error.message)
        }

    }


    return(

        <FreeBoardCommentsUI 
            data={data}
            DeleteCommentBtn={DeleteCommentBtn}
            onChangeMywriter={onChangeMywriter}
            onChangePassword={onChangePassword}
            onChangeContents={onChangeContents}
            isActive={isActive}
            length={length}
            UpdateComment={UpdateCommentBtn}
            EditComment={EditCommentBtn}
            isEdit={isEdit}
            EditId={EditId}
            StarValue={StarRating}
        />
    )
} 