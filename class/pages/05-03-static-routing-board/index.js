import {useRouter} from 'next/router'

export default function StaticRountingPage(){
    
    const router = useRouter()

    //router - 객체로 부름 객체에서 뭔가를 부를때 profile.name이렇게 쓰니까

    const onClickMove1 = ()=>{
        router.push("/05-04-static-routed-board/1")
    }
    const onClickMove2 = ()=>{
        router.push("/05-04-static-routed-board/2")
    }
    const onClickMove3 = ()=>{
        router.push("/05-04-static-routed-board/3")
    }

    return(
        // <button onClick={onClickMove}>페이지 이동하기</button>
        <div>
            <button onClick={onClickMove1}>1번 게시글로 이동하기</button>
            <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
            <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
        </div>
    )

}