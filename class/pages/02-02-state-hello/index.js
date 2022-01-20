import { useState } from 'react'


export default function StateHello(){

    const [ qqq, setQqq ] = useState("안녕하세요")
    
    function zzz(){
        setQqq("반갑습니다")
    }

    return(
        <div>
            <div>{ qqq }</div>
            <button onClick={zzz}>클릭!!</button>
        </div>

        //변경될 값 위치에 함수를 넣어준다. 초기값은 useState()에 있으니까
        //화면과 함수가 동일하게 바뀜(자동으로 연결됨)
    )
}