export default function LetHello(){

    let qqq = "안녕하세요."

    //javaScript 구간
    function zzz(){
        document.getElementById("qqq").innerText = "반갑습니다."
    }

    return(
        //html 구간 JSX(javaScript XML)
        <div>
            <div id="qqq">{ qqq }</div>
            <button onClick={zzz}>클릭!!</button>
        </div>
    )
}