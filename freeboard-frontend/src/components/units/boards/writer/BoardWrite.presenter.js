import { NewBody,
    Main,
    Title,
    Content,
    CommonInput,
    UserInfo,
    UserDiv,
    UserStar,
    ErrorMessage,
    CommonMargin,
    PostBox,
    PostNum,
    PostBtn,
    TextArea,
    LoadImg,
    GetImg,
    MainChoice,
    Footer,
    FtBtn
} from './BoardWrite.styles'

export default function FreeBoardWriteUI(props){
    return(
        <NewBody>
            <Main>
                <Title>게시물 {props.isEdit ? "수정" : "등록"}</Title>

                <Content>
                    <UserInfo>
                        <UserDiv>
                            <div>작성자<UserStar>*</UserStar></div>
                            <CommonInput type="text" placeholder="이름을 입력하세요." onChange={props.WriterName} />
                            <ErrorMessage>{props.ErrorName}</ErrorMessage>
                        </UserDiv>
                        <UserDiv>
                            <div>비밀번호</div>
                            <CommonInput type="password" placeholder="비밀번호를 입력하세요." onChange={props.WriterPassword}/>
                            <ErrorMessage>{props.ErrorPassword}</ErrorMessage>
                        </UserDiv>
                    </UserInfo>
                
                    <CommonMargin>
                        <div>제목</div>
                        <CommonInput type="text" placeholder="제목을 지정해주세요." onChange={props.WriterTitle}/>
                        <ErrorMessage>{props.ErrorTitle}</ErrorMessage>
                    </CommonMargin>
                    <CommonMargin>
                        <div>내용</div>
                        <TextArea placeholder="내용을 작성해주세요." onChange={props.WriterContent}></TextArea>
                        <ErrorMessage>{props.ErrorContent}</ErrorMessage>
                    </CommonMargin>
                    <CommonMargin>
                        <div>주소</div>
                        <PostBox>
                            <PostNum type="text" placeholder="07250"/>
                            <PostBtn>우편번호 검색</PostBtn>
                        </PostBox>
                        <CommonInput type="text" /><br />
                        <CommonInput type="text" />
                    </CommonMargin>

                    <CommonMargin>
                        <div>유튜브</div>
                        <CommonInput type="text" placeholder="링크를 복사해주세요."/>
                    </CommonMargin>
                    <CommonMargin>
                        <div>사진 첨부</div>
                        <LoadImg>
                            <GetImg>+<br/>Upload</GetImg>
                            <GetImg>+<br/>Upload</GetImg>
                            <GetImg>+<br/>Upload</GetImg>
                        </LoadImg>
                    </CommonMargin>
                    <CommonMargin>
                        <div>메인 설정</div>
                        <LoadImg>
                            <MainChoice type="radio" name="choice" />유튜브
                            <MainChoice type="radio" name="choice" />사진
                        </LoadImg>
                    </CommonMargin>
                </Content>
                <Footer>
                    <FtBtn onClick={props.isEdit ? props.EditBtn : props.register} isActive={props.isActive}>{props.isEdit ? "수정하기" : "등록하기"} </FtBtn>
                </Footer>
            </Main>
    
        </NewBody>
    )
    
}