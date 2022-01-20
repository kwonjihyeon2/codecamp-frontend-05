import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput : CreateBoardInput!){
        createBoard(createBoardInput : $createBoardInput){
            _id
            writer
            title
            contents
        }
    }
`

export default function GraqhqlPage(){

    const [create] = useMutation(CREATE_BOARD)

    const Submit = async ()=>{
        await create({
            variables : {
                writer : "권지현", title : "5일차 연습", contents : "연습입니다~"
            }
        })
        
    }
    console.log(createBoard._id)
    
    

    return(
        <div>
            <div> 작성자 : 권지현</div>
            <div> 제목 : 5일차 연습</div>
            <div> 내용 : 연습입니다~</div>
            <button onClick={Submit}>graphql-api 요청하기</button>
        </div>
    )
}