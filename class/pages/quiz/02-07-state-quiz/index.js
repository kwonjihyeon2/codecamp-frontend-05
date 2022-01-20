import { useState } from "react";

export default function ClickNum(){

    const [ sendnum, setSendNum] = useState("000000") 
    //useState : 초기값 입력

    function Btn(){
        
        setSendNum( String(Math.floor(Math.random()*1000000)).padStart(6,"0") )
        //setState() : 변경될 수식 입력
    }
    return(
        <div>
            <div>
                {sendnum}
                {/* state 변수 이름 넣기 */}
            </div>
            <button onClick={Btn}>인증번호 전송</button>
        </div>
    )
}