import { ChangeEvent, useState } from "react"
import { useMutation} from "@apollo/client"
import {useRouter} from 'next/router'
import FreeBoardWriteUI from "./BoardWrite.presenter"
import { CREATE_NEWBOARD,UPDATE_BOARD } from "./BoardWrite.queries"


interface IWriteConProps{
    isEdit : boolean
    ToPre ?: any
}

export default function FreeBoardWrite(props:IWriteConProps) {

    const router = useRouter()

    const [ name, setName ] = useState<string>("")
    const [ ErrorName, setErrorName ] = useState<string>("")
    const [ PW, setPW] = useState<string>("")
    const [ ErrorPw, setErrorPw ] = useState<string>("")
    const [ myTitle, setTitle] = useState<string>("")
    const [ ErrorTitle, setErrorTitle ] = useState<string>("")
    const [ content, setContent ] = useState<string>("")
    const [ Errorcontent, setErrorContent ] = useState<string>("")

    const [createBoard] = useMutation(CREATE_NEWBOARD)
    const [isActive,setIsActive] = useState(false)
    const [MyYoutubeUrl,setYouTube] = useState("")


    const [EditBoard] = useMutation(UPDATE_BOARD)

    function WriterName(event:ChangeEvent<HTMLInputElement>){
        setName(event.target.value)
        if( event.target.value ){
            setErrorName("")
        } 
        if( event.target.value && PW.length>3 && myTitle && content){
            setIsActive(true)
        } else{
            setIsActive(false)
        }
    }

    function UserPw(event:ChangeEvent<HTMLInputElement>){
        setPW(event.target.value)
        if( event.target.value.length > 3 ){
            setErrorPw("")
        } 
        if( name && event.target.value.length > 3 && myTitle && content){
            setIsActive(true)
        } else{
            setIsActive(false)
        }
    }

    function MainContent(event:ChangeEvent<HTMLInputElement>){
        setContent(event.target.value)
        if( event.target.value ){
            setErrorContent("")
        } 
        if( name && PW.length>3  && myTitle && event.target.value){
            setIsActive(true)
            console.log(PW.length)
        } else{
            setIsActive(false)
        }
        
    }

    function MainTitle(event:ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value)
        if( event.target.value ){
            setErrorTitle("")
        } 
        if( name && PW.length>3 && event.target.value && content){
            setIsActive(true)
        } else{
            setIsActive(false)
        }
    }

    function MyYoutube (event:ChangeEvent<HTMLInputElement>){
        setYouTube(event.target.value)
    }
    

    const register = async ()=>{
        try{
            if(!name ){
                setErrorName("이름은 필수입력 항목입니다.")
                window.scrollTo(0,0)
            } else{
                setErrorName("")
            }
            
            if(!PW || PW.length < 4){
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
            
                const result = await createBoard({
                variables : { createBoardInput : {
                    writer : name, password : PW, title : myTitle, contents : content, youtubeUrl : MyYoutubeUrl
                    // 키와 값이 같으면 값 생략 가능 = shorthand property
                    // 여기서 name을 내가 지정해준 state값이고, 이 state값이 키(writer)와 같으면

                    // 백엔드로 요청하는 부분, catch/try 써주는게 좋음
                    }}
                })
            
                console.log(result.data.createBoard._id)
                console.log(PW.length)
                const PostId = result.data.createBoard._id

                router.push(`/boards/${PostId}`)
            }
        } catch(error){
            console.log(error.message)
            
        }
    }

    const EditBtn = async ()=>{
        console.log("수정되었습니다")

        try{
            const MyVariables = { title : myTitle, contents : content }
            if(myTitle !== "" ) MyVariables.title = myTitle
            if(content !== "") MyVariables.contents = content 


            const EditResult = await EditBoard({
                variables :{updateBoardInput : MyVariables, password : PW, boardId : router.query.board_Id}
            })

            console.log(EditResult.data.updateBoard._id) 
            router.push(`/boards/${router.query.board_Id}`)
        } catch(error){
            console.log(error.message)
        }

        
    }

    return(

        <FreeBoardWriteUI 
            ErrorName={ErrorName}
            WriterName={WriterName}
            WriterPassword={UserPw}
            ErrorPassword={ErrorPw}
            WriterTitle={MainTitle}
            ErrorTitle={ErrorTitle}
            WriterContent={MainContent}
            ErrorContent={Errorcontent}
            isActive={isActive}
            register={register}
            EditBtn={EditBtn}
            isEdit={props.isEdit}
            ToPre={props.ToPre}
            MyYoutube={MyYoutube}
        />
    )
} 