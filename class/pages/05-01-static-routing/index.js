import {useRouter} from 'next/router'

export default function StaticRountingPage(){
    
    const router = useRouter()

    //router - 객체로 부름 객체에서 뭔가를 부를때 profile.name이렇게 쓰니까

    const onClickMove = ()=>{
        router.push("/05-02-static-routed")
    }

    return(
        <button onClick={onClickMove}>페이지 이동하기</button>
    )

}