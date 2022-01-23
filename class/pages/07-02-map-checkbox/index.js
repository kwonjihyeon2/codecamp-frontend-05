import{gql,useQuery} from '@apollo/client'
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

const Row = styled.div`
    display : flex;
`
const Column = styled.div`
    width : 20%;
`

export default function MapCheckBoxPage(){
    
    const { data } = useQuery(FETCH_BOARDS)
    //const {data:comments}이런식으로 가능

    return(
        <div>
            {data && data.fetchBoards.map((el)=>( //data?.
                <Row key={el._id}>
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.createdAt}</Column>
                </Row>
            ))}
        </div>
    )
}