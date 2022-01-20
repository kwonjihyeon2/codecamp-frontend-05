import { NewBody,
    Wrapper,
    WrapperList,
    DataTitleBox,
    DataListBox,
    NumberBox,
    TitleBox,
    WriterDate,
    CreateBtn,
    PencilIcon,
    ListBottom
 } from "../../styles/Board_List";
import { useQuery, gql } from "@apollo/client";
import {FaPencilAlt} from 'react-icons/fa'
import { useRouter } from 'next/router'

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            _id
            writer
            title
            createdAt
        }
    }
`

export default function BoardListPage(){

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARDS)

    const CreateNewBoard = ()=>{
        router.push("/boards/new")
    }
    //클릭했을때 상세페이지로 가는 것 props onclick으로 연결

    const GoToDetailPage = (event) => {
       console.log(event.target.id)
        router.push(`boards/${event.target.id}`)
    }
    
    return(
        <NewBody>
            <Wrapper>
                <WrapperList>
                    <DataTitleBox>
                        <NumberBox>번호</NumberBox>
                        <TitleBox>제목</TitleBox>
                        <WriterDate>작성자</WriterDate>
                        <WriterDate>날짜</WriterDate>
                    </DataTitleBox>
                    <div>
                        {/* index값 번호로 넣어줄 수 있음 */}
                        {data?.fetchBoards.map((el,index)=>(
                            <DataListBox key={el._id}>
                                <NumberBox>{index+1}</NumberBox>
                                <TitleBox id={el._id} onClick={GoToDetailPage}>{el.title}</TitleBox>
                                <WriterDate>{el.writer}</WriterDate>
                                <WriterDate>{el.createdAt.slice(0,10)}</WriterDate>
                            </DataListBox>
                        ))}
                    </div>
                </WrapperList>
                <ListBottom>
                    <CreateBtn onClick={CreateNewBoard}><PencilIcon><FaPencilAlt /></PencilIcon>게시물 등록하기</CreateBtn>
                </ListBottom>
            </Wrapper>
        </NewBody>
    )
    
}