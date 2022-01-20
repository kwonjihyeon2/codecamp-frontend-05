import QuizBoardWriteUI from './QuizBoard.presenter'
import { useState } from 'react'


export default function QuizBoardWrite(){

    const [Myname, SetMyname] = useState("")
    const [MyPassword,SetMyPassword] = useState("")
    const [MyTitle,SetMytitle] = useState("")
    const [MyContent,SetMyContent] = useState("")
    const [isActive, setIsActive] = useState(false)

    const Changename = (event)=>{
        SetMyname(event.target.value)
        if(event.target.value && MyPassword && MyTitle && MyContent){
            setIsActive(true)
        } else{
            setIsActive(false)
        }
    }

    const ChangePassword = (event)=>{
        SetMyPassword(event.target.value)
        if(event.target.value && event.target.value && MyTitle && MyContent){
            setIsActive(true)
        } else{
            setIsActive(false)
        }
    }
    const ChangeTitle = (event)=>{
        SetMytitle(event.target.value)
        if(event.target.value && MyPassword && event.target.value && MyContent){
            setIsActive(true)
        } else{
            setIsActive(false)
        }
    }
    const ChangeContent = (event)=>{
        SetMyContent(event.target.value)
        if(Myname && MyPassword && MyTitle && event.target.value){
            setIsActive(true)
        } else{
            setIsActive(false)
        }
    }

    

    return(
        <QuizBoardWriteUI 
            ChangeName={Changename}
            ChangePassword={ChangePassword}
            ChangeTitle={ChangeTitle}
            ChangeContent={ChangeContent}
            isActive={isActive}
        />
    )
}