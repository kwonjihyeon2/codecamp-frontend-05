import { useState } from "react"
import {Wrapper,
    Space,
    Change,
} from "../../../styles/08-quiz-signup"


export default function SignUp(){

    const [ SignEmail , setSignEmail ] = useState("")
    const [ ErrorName , setErrorName] = useState("")
    const [ SignPW1 , setSignPW1 ] = useState("")
    const [ ErrorPW1 , setErrorPW1] = useState("")
    const [ SignPW2 , setSignPW2 ] = useState("")
    const [ ErrorPW2 , setErrorPW2] = useState("")

    function email(event){
        setSignEmail(event.target.value)
    }

    function Check1(event){
        setSignPW1(event.target.value)
    }

    function Check2(event){
        setSignPW2(event.target.value)
    }

    function signBtn(){
        
        if(SignEmail === "" || SignEmail.includes("@") == false){
            setErrorName("이메일을 정확히 입력하세요")
        } else{
            setErrorName("")
        }

        if(SignPW1 === "" || SignPW2 !== SignPW1){
            setErrorPW1("비밀번호를 정확히 입력하세요.")
        } else{
            setErrorPW1("")
        }

        if(SignPW2 === "" || SignPW2 !== SignPW1){
            setErrorPW2("비밀번호를 정확히 입력하세요.")
        } else{
            setErrorPW2("")
        }
    }
    return(
        <Wrapper>
            <Space> 이메일 : <input type="text" placeholder="이메일을 입력하세요." onChange={email}/><br />
                <Change>{ ErrorName }</Change>
            </Space>
            <Space> 비밀번호 : <input type="password" placeholder="비밀번호를 입력하세요." onChange={Check1}/><br />
                <Change>{ ErrorPW1 }</Change>
            </Space>
            <Space> 비밀번호 확인 : <input type="password" placeholder="비밀번호를 다시 입력하세요." onChange={Check2}/><br />
                <Change>{ ErrorPW2 }</Change>
            </Space>
            <Space><button onClick={signBtn}>가입하기 !</button></Space>
        </Wrapper>
    )
}