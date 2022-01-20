import{ useState } from 'react'

export default function LetCount(){
    
    const [ count, setCount ] = useState(0) //괄호안에 초기에 표출되는 값 기록
    
    function zzz(){
        setCount(count + 1) 
        //괄호 안에 변경될 값 기록(기존 방식의 count = " count + 1 "<- 이 부분)
    }

    return(
        <div>
            <div>{count}</div>
            <button onClick={zzz}>카운트 증가</button>
        </div>
    )
}