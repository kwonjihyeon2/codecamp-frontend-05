import axios from "axios";
import { useState } from "react";

export default function QuizRest(){

    const [result, setResult] = useState([])

    async function Submit(){

        
        const api = await axios.get("https://koreanjson.com/users")
        
        let newArr = api.data;
        

        console.log(Array.isArray(api.data))
        console.log(newArr)
        // console.log(result.concat(newArr))
        console.log(api.data[0])
        setResult(newArr[0].name)
    }
    

    return(
        <div>
            <button onClick={Submit}>REST-API 요청하기</button>
            <div>{result}</div>
            
        </div>
    )
}