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
} from "../../../styles/emotion"
import { useState } from "react"
import { useMutation ,gql} from "@apollo/client"
import {useRouter} from 'next/router'

const CREATE_NEWBOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
            writer
            title
            contents
            youtubeUrl
        }
    }
`

export default function NewBoard() {

    const router = useRouter()

    const [ name, setName ] = useState("")
    const [ ErrorName, setErrorName ] = useState("")
    const [ PW, setPW] = useState("")
    const [ ErrorPw, setErrorPw ] = useState("")
    const [ myTitle, setTitle] = useState("")
    const [ ErrorTitle, setErrorTitle ] = useState("")
    const [ content, setContent ] = useState("")
    const [ Errorcontent, setErrorContent ] = useState("")
    const [ Url, setUrl ] = useState("")

    const [createBoard] = useMutation(CREATE_NEWBOARD)
    const [isActive,setIsActive] = useState(false)

    function User(event){
        setName(event.target.value)
        if( event.target.value ){
            setErrorName("")
        } 
        if( event.target.value && PW.length > 3 && myTitle && content){
            setIsActive(true)
        }
    }

    function UserPw(event){
        setPW(event.target.value)
        if( event.target.value.length > 3 ){
            setErrorPw("")
        } 
    }

    function MainContent(event){
        setContent(event.target.value)
        if( event.target.value ){
            setErrorContent("")
        } 
    }

    function MainTitle(event){
        setTitle(event.target.value)
        if( event.target.value ){
            setErrorTitle("")
        } 
    }

    function MyUrl(event){
        setUrl(event.target.value)
    }
    

    const register = async ()=>{

        if(!name ){
            setErrorName("이름은 필수입력 항목입니다.")
            window.scrollTo(0,0)
        } else{
            setErrorName("")
        }
        
        if(PW === "" || PW.length < 4){
            setErrorPw("비밀번호는 필수입력 항목입니다. 4자리 이상 입력하세요.")
            window.scrollTo(0,0)
        } else{
            setErrorPw("")
        }

        if(myTitle === ""){
            setErrorTitle("제목은 필수입력 항목입니다.")
            window.scrollTo(0,0)
        } else{
            setErrorTitle("")
        }

        if(content === ""){
            setErrorContent("내용은 필수입력 항목입니다.")
        } else{
            setErrorContent("")
        }
        
        if(name && PW.length > 3 && myTitle && content){
            alert("게시물이 등록되었습니다.")
        }

        try{
            const result = await createBoard({
            variables : { createBoardInput : {
                writer : name, password : PW, title : myTitle, contents : content, youtubeUrl:Url
                //키와 값이 같으면 값 생략 가능 = shorthand property
                //여기서 name을 내가 지정해준 state값이고, 이 state값이 키(writer)와 같으면

                //백엔드로 요청하는 부분, catch/try 써주는게 좋음
                }}
            })
            console.log(result.data.createBoard._id)

            const PostId = result.data.createBoard._id

            router.push(`board_new/${PostId}`)

        } catch(error){
            console.log(error)
        }
        
        
    }

    return(

        <NewBody>
            <Main>
                <Title>게시물 등록</Title>

                <Content>
                    <UserInfo>
                        <UserDiv>
                            <div>작성자<UserStar>*</UserStar></div>
                            <CommonInput type="text" placeholder="이름을 입력하세요." onChange={User} />
                            <ErrorMessage>{ErrorName}</ErrorMessage>
                        </UserDiv>
                        <UserDiv>
                            <div>비밀번호</div>
                            <CommonInput type="password" placeholder="비밀번호를 입력하세요." onChange={UserPw}/>
                            <ErrorMessage>{ErrorPw}</ErrorMessage>
                        </UserDiv>
                    </UserInfo>
                
                    <CommonMargin>
                        <div>제목</div>
                        <CommonInput type="text" placeholder="제목을 지정해주세요." onChange={MainTitle}/>
                        <ErrorMessage>{ErrorTitle}</ErrorMessage>
                    </CommonMargin>
                    <CommonMargin>
                        <div>내용</div>
                        <TextArea placeholder="내용을 작성해주세요." onChange={MainContent}></TextArea>
                        <ErrorMessage>{Errorcontent}</ErrorMessage>
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
                        <CommonInput type="text" placeholder="링크를 복사해주세요." onChange={MyUrl}/>
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
                    <FtBtn onClick={register}>등록하기</FtBtn>
                </Footer>
            </Main>
        
        </NewBody>
    )
}


// 3000 포트번호 접속대기번호 중복될 수 없음 0~655535 포트번호를 가진 주소 - 서버프로그램 
//localhost : 내컴퓨터를 의미 내컴퓨터가 접속을 대기중인 프로그램이있다