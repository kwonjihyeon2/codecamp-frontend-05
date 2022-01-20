import {MyTitle,DivTitle,InputDiv,CommonsInput} from '../../styles/emotion'
// import { DivTitle } from '../../styles/emotion' 
// import { InputDiv } from '../../styles/emotion'

export default function EmotionPage(){

    return (
            <DivTitle>
                <MyTitle>
                    로그인
                </MyTitle>
                <InputDiv>
                    <div>아이디</div>
                    <CommonsInput type="text" />
                </InputDiv>
                <InputDiv>
                    <div>비밀번호</div>
                    <CommonsInput type="password" />
                </InputDiv>
            
                {/* <img src="/images/lotto.png" /> */}
            </DivTitle>
        
        // 반드시 한 태그 안에 내용이 들어가야함 <div></div><div></div> 안됨
    )
}