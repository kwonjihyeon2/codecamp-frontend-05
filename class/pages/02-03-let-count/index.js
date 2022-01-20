export default function LetCount(){
    
    let count = 0;

    function zzz(){
        count = count + 1;
        console.log("현재" + count)
        document.getElementById("qqq").innerText = count; //바뀐 값이 들어갈 장소를 지정해줘야함
    }

    return(
        <div>
            <div id="qqq">0</div>
            <button onClick={zzz}>카운트 증가</button>
        </div>
    )
    
}