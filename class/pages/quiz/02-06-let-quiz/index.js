export default function Number(){

    function Btn(){
        
        let random = String(Math.floor(Math.random()*1000000)).padStart(0,"6")

        document.getElementById("Num").innerText = random;
    }

    return(
        <div>
            <div id="Num">000000</div>
            <button onClick={Btn}>인증번호 전송</button>
        </div>
    )

}