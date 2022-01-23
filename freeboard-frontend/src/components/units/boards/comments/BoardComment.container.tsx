
import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import React, { useState } from "react"
import FreeBoardCommentsUI from "./BoardComment.presenter"
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENT, CREATE_BOARD_COMMENT,UPDATE_BOARD_COMMENT } from "./BoardComment.queries"
// import { IBoardCommentProps } from "./BoardComment.types"

export default function FreeBoardComments() {

    const router = useRouter()

    const [CreateComment] = useMutation(CREATE_BOARD_COMMENT)
    const [myWriter,setMywriter] = useState("")
    const [myPassword,setMyPassword] = useState("")
    const [myContents,setMyContents] = useState("")
    const [isActive,setIsActive] = useState(false)
    const [length, setLength] = useState(0)

    const { data } = useQuery(FETCH_BOARD_COMMENT,{
        variables : { page : 1, boardId : String(router.query.board_Id)}
    })
    
    // console.log(data?.fetchBoardComments.writer)

    const onChangeMywriter = (event:React.ChangeEvent<HTMLInputElement>) => {
        setMywriter(event.target.value)
        if(event.target.value){
            setIsActive(true)
        }
    }
    const onChangePassword = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setMyPassword(event.target.value)
        let myPw = event.target.value

        if(myPw.length > 4){
            setIsActive(true)
        }
    }

    const onChangeContents = (event:React.ChangeEvent<HTMLTextAreaElement>) =>{
        setMyContents(event.target.value)
        let maxLength = event.target.value.length
        if(maxLength){
            setIsActive(true)
        }
        setLength(maxLength)
        if(maxLength >= 100){
            alert("댓글 작성은 100자까지 가능합니다.")
        }
    }

    const CreateCommentBtn = async () => {

        try{
            await CreateComment({
                variables : {createBoardCommentInput : {
                    writer : myWriter, password : myPassword, contents : myContents, rating : 1
                }, boardId : String(router.query.board_Id)},
                refetchQueries : [{
                    variables : { page : 1, boardId : router.query.board_Id},
                    query : FETCH_BOARD_COMMENT
                }] 
            })
        } catch(error){
            console.log(error.message);
        }
        
    }

    const [DeleteComment] = useMutation(DELETE_BOARD_COMMENT)

    const DeleteCommentBtn = (event : any) =>{
        try{
            const InputPassword = prompt("비밀번호를 입력하세요.")

            DeleteComment({
                variables : {password : InputPassword, boardCommentId : event.target.id},
                refetchQueries : [{
                    variables : { page : 1, boardId : router.query.board_Id},
                    query : FETCH_BOARD_COMMENT
                }]
            }) 
            console.log(event.target.id)
            console.log(InputPassword)

        } catch(error){
            console.log(error.message)
        }

    }

    const [UpdateComment] = useMutation(UPDATE_BOARD_COMMENT)
    const [isEdit, setIsEdit] = useState(false)

    const UpdateCommentBtn = async (event:any)=>{
        setIsEdit(true)

        try{
            const UpdatePassword = prompt("비밀번호를 입력하세요.")
            const Updateresult = await UpdateComment({
                variables : {updateBoardCommentInput : {
                    contents : "철수" , rating : 1
                },password : UpdatePassword, boardCommentId : event.target.id}
            })
           console.log(Updateresult.data.updateBoardComment._id)
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
            CreateComment={CreateCommentBtn}
            length={length}
            UpdateComment={UpdateCommentBtn}
            isEdit={isEdit}
            // UpdateId={UpdateId}
        />
    )
} 