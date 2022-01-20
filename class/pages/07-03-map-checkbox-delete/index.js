import{gql,useMutation,useQuery} from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            number
            writer
            title
            createdAt
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number : Int){
        deleteBoard(number : $number){
            message
        }
    }
`

const Row = styled.div`
    display : flex;
`
const Column = styled.div`
    width : 20%;
`

export default function MapCheckBoxDeletePage(){

    const [deleteBoard] = useMutation(DELETE_BOARD)
    
    const { data } = useQuery(FETCH_BOARDS)
    //const {data:comments}이런식으로 가능

    const onClickDelete = (event) =>{
        deleteBoard({
            variables : { number : Number(event.target.id) },
             //HTML에서 가져왔기때문에 String임. }
            refetchQueries : [{query : FETCH_BOARDS}]
        })
        event.target.id
    }
    //새로고침되면 다시 10개를 가져와야함 - refetch

    return(
        <div>
            {data && data.fetchBoards.map((el)=>( //data?.
                <Row key={el.number}>
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.createdAt}</Column>
                    <Column><button id={el.number} onClick={onClickDelete}>삭제</button></Column>
                </Row>
                //key - 고유한 값을 줘야함
            ))}
        </div>
    )
}