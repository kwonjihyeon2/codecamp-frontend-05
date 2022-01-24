import { Rate, DatePicker, Space } from 'antd';
import { useState } from 'react';
import styled from '@emotion/styled'
// import moment from 'moment'
import ReactPlayer from 'react-player/youtube'


const CalenderBox = styled.div`
    width :500px;
`

const Flex = styled.div`
    display : flex;
    justify-content : Space-around;
    width : 100%;
`

export default function WeekQuizPage(){
    
    const [value,setRating] = useState(0)
    const [message,setMessage] = useState("")

    const StarRating = (value)=>{

        setRating(value)

        if(value === 3){
            alert("3점입니다.")
        }
        if(value === 2){
            setMessage("2점")
        } else{
            setMessage("")
        }
    }

    // calender
    const [useDate,setDate] = useState()

    function onChange(date, dateString) {
        setDate(dateString)
        console.log(date, dateString);

    }

    return(
        <Flex>
            <div>
                    <Rate onChange={StarRating} value={value}/>
                    <div>{message}</div>
                    
                    <br />
                    <br />
                    <br />
                    <br />
            
                    <CalenderBox>

                        <Space direction="vertical" size={12}>
                        <DatePicker onChange={onChange} />
                            <div >{useDate}</div>
                        </Space>
                    </CalenderBox>

            </div>

            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing={true} muted={true} width={800} height={600}/>   
        </Flex>
    )
}