import {
    Wrapper,
    AppBox,
    AppName,
    InputBox,
    InputLine,
    InputStyle,
    ErrorMassage,
    PinkRadius,
    LoginText,
    Account,
    YellowRadius,
    KakaoText
} from '../../../styles/quiz/02-faq'
import { useState } from 'react'


export default function EatsRoad(){

    const [email, setEmail] = useState("")
    const [ErrorEmail, setErrorEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState("")

    function CheckEmail(event){
        setEmail(event.target.value)
        if(event.target.value.includes("@")){
            setErrorEmail("")
        }
    }

    function CheckPw(event){
        setPassword(event.target.value)
        if(event.target.value.length > 7){
            setErrorPassword("")
        }
    }

    function LoginBtn(){
        if(!email.includes("@") || !email){
            setErrorEmail("이메일 주소를 다시 확인해주세요.")
        }

        if(password.length < 8){
            setErrorPassword("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.")
        }
    }
    return(
        <Wrapper>
            <AppBox>
                <img src="/images/quiz02/img-100-logo-white.png" alt="로고이미지"/>
                <AppName>잇츠로드</AppName>
            </AppBox>
            <div>
                <InputBox>
                    <InputLine>
                    <InputStyle type="text" placeholder="이메일을 입력하세요." onChange={CheckEmail}/> 
                    <img src="/images/quiz02/ic-20-delete-white.png" alt="삭제 버튼"/>
                    </InputLine>
                    <ErrorMassage>{ErrorEmail}</ErrorMassage>
                </InputBox>
                <InputBox>
                    <InputLine>
                    <InputStyle type="text" placeholder="비밀번호를 입력하세요." onChange={CheckPw}/> 
                    <img src="/images/quiz02/ic-20-delete-white.png" alt="삭제 버튼"/>
                    </InputLine>
                    <ErrorMassage>{errorPassword}</ErrorMassage>
                </InputBox>
                <PinkRadius>
                    <LoginText onClick={LoginBtn}>로그인</LoginText>
                </PinkRadius>
                <Account>
                    <li>이메일</li>
                    <li>비밀번호 찾기</li>
                    <li>회원가입</li>
                </Account>
                <YellowRadius>
                    <img src="/images/quiz02/ic-40-kakao.png" alt="카카오톡 버튼"/>
                    <KakaoText>로그인</KakaoText>
                </YellowRadius>
            </div>
        </Wrapper>
    )
}