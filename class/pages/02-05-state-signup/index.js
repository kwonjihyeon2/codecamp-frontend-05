import {useState} from 'react'

export default function StateSignup(){
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ErrorEmail, setErrorEmail] = useState("")
    const [ErrorPassword, setErrorPassword] = useState("")

    function aaa(event){
        // event.target => <input type="text" />태그 전체를 가져옴
        console.log(event.target.value) //=> 해당 태그의 값을 가져옴
        setEmail(event.target.value)
    }

    function bbb(event){
        setPassword(event.target.value)
    }

    function ccc(){
        console.log("email : ",email)
        console.log("password : ",password)

        if(email.includes("@") === false){
            setErrorEmail("잘못된 이메일입니다.")
        } else{
            alert("회원가입을 축하합니다.")
        }

    }

    return(

        <div>
            이메일 : <input type="text" onChange={aaa}/><br /> 
            <span>{ErrorEmail}</span><br/><br/>
            {/* 이벤트핸들러함수 : */}
            비밀번호 : <input type="password" onChange={bbb}/><br />
            <span>{ErrorPassword}</span><br/><br/>
            <button onClick={ccc}>회원가입</button>
        </div>
    )
}