import { 
    NewBody,
    BoardContent,
    Wrapper,
    Wrapper_Top,
    Writer,
    Profile,
    WriterBox,
    WriteDate,
    Wrapper_Top_Icon,
    BodyTitle,
    BodyImg,
    BodyContents,
    BodyYoutube,
    BodyLikebox,
    LikeBox,
    DisLikeText,
    ButtonBox,
    CommonBtn
} from '../../../styles/board_page'
import { FaUserCircle , FaLink, FaLocationArrow } from 'react-icons/fa'
import { BiLike,BiDislike } from 'react-icons/bi'
import { useRouter } from 'next/router'
import { useQuery,gql,useMutation } from '@apollo/client'


const FETCH_BOARD = gql`
    query fetchBoard($boardId : ID!){
        fetchBoard(boardId : $boardId){
            _id
            writer
            title
            contents
            youtubeUrl
        }
    }
`

const FETCH_DELETE_BOARD = gql`
    mutation deleteBoard($boardId : ID!){
        deleteBoard(boardId : $boardId)
    }
`

export default function BoardPage(){

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD,{
        variables : {boardId : router.query.board_Id}
    })

    console.log(router.query.board_Id)
    const GoList = ()=>{
        router.push("/boards")
    }

    const GoEditPage = () =>{
        router.push(`/boards/${router.query.board_Id}/edit`)
    }

    const [deleteBoard] = useMutation(FETCH_DELETE_BOARD)
    const DeleteDetailBoard = (event) =>{
        deleteBoard({
            variables : {boardId : event.target.id}
        })
        alert("게시물이 삭제되었습니다.")
        router.push("/boards")
    }



    return(
        <NewBody>
            <BoardContent>
                <Wrapper>
                    <Wrapper_Top>
                        <Writer>
                            <WriterBox>
                                <Profile><FaUserCircle size={50} color="#bdbdbd"/></Profile>
                                <div>
                                    <div>{data?.fetchBoard.writer}</div>
                                    <WriteDate>Date : 2021.02.18</WriteDate>
                                </div>
                            </WriterBox>
                            
                            <div>
                                <Wrapper_Top_Icon><FaLink /></Wrapper_Top_Icon>
                                <Wrapper_Top_Icon><FaLocationArrow /></Wrapper_Top_Icon>
                            </div>
                        </Writer>
                    </Wrapper_Top>
                    <div>
                        <BodyTitle>{data?.fetchBoard.title}</BodyTitle>
                        <BodyImg></BodyImg>
                        <BodyContents>{data?.fetchBoard.contents}</BodyContents>
                        <BodyYoutube>{data?.fetchBoard.youtubeUrl}</BodyYoutube>
                        <BodyLikebox>
                            <LikeBox>
                                <BiLike />
                                <p>1920</p>
                            </LikeBox>
                            <LikeBox>
                                <BiDislike color="#828282"/>
                                <DisLikeText>1920</DisLikeText>
                            </LikeBox>
                        </BodyLikebox>
                    </div>
                </Wrapper>
                <ButtonBox>
                    <CommonBtn onClick={GoList}>목록으로</CommonBtn>
                    <CommonBtn onClick={GoEditPage}>수정하기</CommonBtn>
                    <CommonBtn id={router.query.board_Id} onClick={DeleteDetailBoard}>삭제하기</CommonBtn>
                </ButtonBox>
            </BoardContent>
        </NewBody>
    )
}