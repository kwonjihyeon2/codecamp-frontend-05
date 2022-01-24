import { Rate } from 'antd';
import { useState } from 'react';


export default function LibraryRatePage(){
    
    const [value, setValue] = useState(3)
    //여기 value는 setValue에 의해 값이 바뀜
    //컴포넌트가 다시 그려짐 -> value(키,속성)={value} (=state) : 5가됨.

    const handelChange = (value) =>{
        //const value = 123 === 괄호안의 value {value}
        setValue(value)

        //{value}가 있으니 setValue가 그 값을 가져옴
    }
    
    
    return <Rate value={value} onChange={handelChange}/>
}