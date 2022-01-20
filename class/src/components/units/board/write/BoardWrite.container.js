import { useMutation } from '@apollo/client'
import { useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
//defalut전체를 가져온 것 {}필요하지않음 이름은 개별설정 후 jsx값에 넣어주면 됨
//default 값 외에 export된 값을 가져오려면,{}써주면 됨
import { CREATE_BOARD } from './BoardWrite.queries' 


export default function BoardWrite(){

    const [isActive,setIsActive] = useState(false)

    const [myWriter,setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")

    const [aaa,setAaa] = useState("")
    const [qqq] = useMutation(CREATE_BOARD)

    const zzz = async () =>{
        const result = await qqq({
            variables : {
                writer : myWriter ,title :myTitle,contents :myContents
            }
        })
        console.log(result.data.createBoard.message)
        setAaa(result.data.createBoard.message)

    }

    const onChangeMyWriter = (event) =>{
        setMyWriter(event.target.value)
        if(myWriter&&myTitle&&myContents){
            setIsActive(true)
        }
    }

    const onChangeTitle = (event) =>{
        setMyTitle(event.target.value) 
        if(myWriter&&myTitle&&myContents){
            setIsActive(true)
        }
    }
    
    const onChangeContents = (event) =>{
        setMyContents(event.target.value)   
        if(myWriter&&myTitle&&myContents){
            setIsActive(true)
        }   
    }

    return(
        <BoardWriteUI //presenter파일 연결해준것
            bbb={aaa}
            ccc={zzz}
            ddd={onChangeMyWriter}
            eee={onChangeTitle}
            fff={onChangeContents}
            isActive={isActive}
            //props 객체{bbb:"",ccc:async함수,...}
            
        />
    )
}