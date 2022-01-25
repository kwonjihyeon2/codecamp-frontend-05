import { useState } from "react"

export default function StatePrevPage(){

    const [count,setCount] = useState(0)

    const onClickCountUp = () => {
        setCount((prev)=>(prev + 1));
        setCount((prev)=>(prev + 1));
        //임시 저장된 count 값을 반영, 임시 저장값이 없다면 초기값으로 진행
        //state : 변경된 값(setState로 정한 값)을 임시 저장하고 함수가 종료되면 임시 저장 값을 반영해 페이지를 다시 랜더링함.
        setCount((prev)=>(prev + 1));
        setCount((prev)=>(prev + 1));
        setCount((prev)=>(prev + 1));
    }

    return(
        <div>
            <div>현재 카운트 : {count}</div>
            <button onClick={onClickCountUp}>카운트 올리기!!</button>

        </div>
    )
}