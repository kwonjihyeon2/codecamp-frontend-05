
import {Wrapper,
    WrapperTop,
    SearchIcon,
    UserInfo,
    UserMy,
    UserMenu,
    MenuSize,
    MenuColor,
    ProFile,
    Name,
    WrapperBody,
    BodyBox,
    QuesColor,
    ListColor,
    WrapperFooter,
    FooterBox,
    MenuText,
    MenuTextColor} from "../../../styles/quiz/01-faq"

export default function QuizFaq(){

    return(
        <Wrapper>
            <WrapperTop>
                <SearchIcon><img src="/images/quiz/ic-58-main-search-black.png"/></SearchIcon>
                <UserInfo>
                    <UserMy>마이</UserMy>
                    <ProFile>
                    <img src="/images/quiz/img-60-profile-image.png"/>
                        <Name>
                            <div>임정아</div>
                            <div><img src="/images/quiz/ic-28-arrow.png"/></div>
                        </Name>
                    </ProFile>
                </UserInfo>
                <UserMenu>
                    <MenuSize>공지사항</MenuSize>
                    <MenuSize>이벤트</MenuSize>
                    <MenuColor>FAQ</MenuColor>
                    <MenuSize>Q&A</MenuSize>
                </UserMenu>
            </WrapperTop>
            <WrapperBody>
                <BodyBox>
                    <div>
                        <ListColor>Q. 01</ListColor>
                        <QuesColor>리뷰 작성은 어떻게 하나요?</QuesColor>
                    </div>
                    <img src="/images/quiz/ic-70-arrow-right.png"/>
                </BodyBox>
                <BodyBox>
                    <div>
                        <ListColor>Q. 02</ListColor>
                        <QuesColor>리뷰 수정/삭제는 어떻게 하나요?</QuesColor>
                    </div>
                    <img src="/images/quiz/ic-70-arrow-right.png"/>
                </BodyBox>
                <BodyBox>
                    <div>
                        <ListColor>Q. 03</ListColor>
                        <QuesColor>아이디/비밀번호를 잊어버렸어요.</QuesColor>
                    </div>
                    <img src="/images/quiz/ic-70-arrow-right.png"/>
                </BodyBox>
                <BodyBox>
                    <div>
                        <ListColor>Q. 04</ListColor>
                        <QuesColor>회원탈퇴를 하고싶어요.</QuesColor>
                    </div>
                    <img src="/images/quiz/ic-70-arrow-right.png"/>
                </BodyBox>
                <BodyBox>
                    <div>
                        <ListColor>Q. 05</ListColor>
                        <QuesColor>출발지 설정은 어떻게 하나요?</QuesColor>
                    </div>
                    <img src="/images/quiz/ic-70-arrow-right.png"/>
                </BodyBox>
                <BodyBox>
                    <div>
                        <ListColor>Q. 06</ListColor>
                        <QuesColor>비밀번호를 변경하고 싶어요.</QuesColor>
                    </div>
                    <img src="/images/quiz/ic-70-arrow-right.png"/>
                </BodyBox>
            </WrapperBody>
            <WrapperFooter>
                <FooterBox>
                    <img src="/images/quiz/ic-58-main-home-unselected.png"/>
                    <MenuText>홈</MenuText>
                </FooterBox>
                <FooterBox>
                    <img src="/images/quiz/ic-58-main-location-unselected.png"/>
                    <MenuText>잇츠로드</MenuText>
                </FooterBox>
                <FooterBox>
                    <img src="/images/quiz/ic-58-main-like-unselected.png"/>
                    <MenuText>마이찜</MenuText>
                </FooterBox>
                <FooterBox>
                    <img src="/images/quiz/ic-58-main-my-selected.png"/>
                    <MenuTextColor>마이</MenuTextColor>
                </FooterBox>
            </WrapperFooter>
        </Wrapper>
    )
}