import axios from 'axios'
import { Fragment, useState } from 'react'

export default function RestGet(){

    const [aaa,setAaa] = useState("")

    // async function zzz(){
    //     const result = await axios.get("https://koreanjson.com/posts/1")
    //     console.log(result.data.title)
    //     setAaa(result.data.title)
    // }

    // function zzz(){
    //     console.log("aaaa")
    // }
    

    //화살표 함수 호이스팅 막기 위해 기본 함수보다 성능은 조금 느릴 수 있음. 속도는 리액트의 추가적인 기능으로 보완함 추후 예정
    const zzz = async() =>{
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result.data.title)
        setAaa(result.data.title)
    }

    // zzz()

    return(
        <>
            <button onClick={zzz}>REST-API 요청하기</button>
            <div>{aaa}</div>
        </>
    )

}

