import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries' 
import { IBoardWriteProps } from './BoardWrite.types'


export default function BoardWrite(props:IBoardWriteProps){

    const router = useRouter()
    const [isActive,setIsActive] = useState(false)

    const [myWriter,setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")

    const [aaa,setAaa] = useState("")
    const [qqq] = useMutation(CREATE_BOARD)
    const [www] = useMutation(UPDATE_BOARD)

    const zzz = async () =>{
        const result = await qqq({
            variables : {
                writer : myWriter ,title :myTitle,contents :myContents
            }
        })

        console.log(result.data.createBoard.message)
        setAaa(result.data.createBoard.message)

        router.push(`/09-01-boards/${result.data.createBoard.number}`)
    }

    //수정하기 클릭시 실행될 함수
    const xxx = async () => {
        console.log("수정하기를 클릭하셨군요.")
        interface IMyVariables {
            number : number
            writer? : string
            title? : string
            contents?: string
            //?: 잇을수도,없을수도
            
        }
        const myvariables:IMyVariables = {
            number : Number(router.query.mynumber)
        }
        if(myWriter !== "") myvariables.writer = myWriter
        if(myTitle !== "") myvariables.title = myTitle
        if(myContents !== "") myvariables.contents = myContents
        
        const editresult = await www({
            variables : myvariables
        })

        console.log(editresult.data.updateBoard.message)
        router.push(`/09-01-boards/${router.query.mynumber}`)
    }

    //리액트에서 기본 제공하는 타입 <>안에 어떤 요소갸 들어올 지 알려주면 됨
    const onChangeMyWriter = (event : ChangeEvent<HTMLInputElement>) =>{
        setMyWriter(event.target.value)
        if(myWriter&&myTitle&&myContents){
            setIsActive(true)
        }
    }

    const onChangeTitle = (event : ChangeEvent<HTMLInputElement>) =>{
        setMyTitle(event.target.value) 
        if(myWriter&&myTitle&&myContents){
            setIsActive(true)
        }
    }
    
    const onChangeContents = (event : ChangeEvent<HTMLInputElement>) =>{
        setMyContents(event.target.value)   
        if(myWriter&&myTitle&&myContents){
            setIsActive(true)
        }   
    }


    return(
        <BoardWriteUI //presenter파일 연결해준것
            bbb={aaa}
            ccc={zzz}
            xxx={xxx}
            ddd={onChangeMyWriter}
            eee={onChangeTitle}
            fff={onChangeContents}
            isActive={isActive}
            //props 객체{bbb:"",ccc:async함수,...}
            isEdit={props.isEdit}
            data={props.data} //index에서 받아온 값을 presenter에 보내주는 것
        />
    )
}