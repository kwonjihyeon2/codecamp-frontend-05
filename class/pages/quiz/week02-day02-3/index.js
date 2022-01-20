import { Wrapper,WrapperList,Table,Title,List,CommonTd,Row } from "./styles"
import { useState } from "react"


export default function ListCodePage(){


    const [ischeck, setChecked ] = useState()


    // const [topCheck, setTopCheck] = useState(false)

    const TopCheck = (event)=>{
        setChecked(true)

        if(event.target.checked === false){
            setChecked(false)
        }
    }


    return(
        <Wrapper>
            <WrapperList>
                <Table>
                    <Title>
                        <CommonTd><input type="checkbox" onClick={TopCheck}/></CommonTd>
                        <CommonTd>번호</CommonTd>
                        <Row>제목</Row>
                        <CommonTd>작성일</CommonTd>
                    </Title>
                    <List>
                        <CommonTd><input type="checkbox" checked={ischeck}/></CommonTd>
                        <CommonTd>1</CommonTd>
                        <Row>9월달 시스템 점검 안내입니다.</Row>
                        <CommonTd>2020.09.19</CommonTd>
                    </List>
                    <List>
                        <CommonTd><input type="checkbox" checked={ischeck}/></CommonTd>
                        <CommonTd>2</CommonTd>
                        <Row>안녕하세요! 공지사항 전달드립니다.</Row>
                        <CommonTd>2020.09.17</CommonTd>
                    </List>
                    <List>
                        <CommonTd><input type="checkbox" checked={ischeck}/></CommonTd>
                        <CommonTd>3</CommonTd>
                        <Row>개인정보 처리방침 변경 사전 안내</Row>
                        <CommonTd>2020.09.12</CommonTd>
                    </List>
                    <List>
                        <CommonTd><input type="checkbox" checked={ischeck}/></CommonTd>
                        <CommonTd>4</CommonTd>
                        <Row>iOS 10.0 이하 지원 중단 안내</Row>
                        <CommonTd>2020.08.10</CommonTd>
                    </List>
                    <List>
                        <CommonTd><input type="checkbox" checked={ischeck}/></CommonTd>
                        <CommonTd>5</CommonTd>
                        <Row>이용약관 변경 사전 안내</Row>
                        <CommonTd>2020.08.01</CommonTd>
                    </List>
                    <List>
                        <CommonTd><input type="checkbox" checked={ischeck}/></CommonTd>
                        <CommonTd>6</CommonTd>
                        <Row>개인정보 처리방침 변경 사전 안내</Row>
                        <CommonTd>2020.07.19</CommonTd>
                    </List>
                </Table>
            </WrapperList>

        </Wrapper>
    )
}