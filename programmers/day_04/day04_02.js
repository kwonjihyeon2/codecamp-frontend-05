//마이페이지 반복문 + 조건문(횟수, 가격의 합)

const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]

let count = 0;
let price = 0;
let grade = "";

function random(){

    for(let i = 0; i < myShopping.length; i++){
        if(myShopping[i].category === "의류"){
            count++;
            price += myShopping[i].price; // 같은 뜻 : price = price + myShopping[i].price
        } 
    }
    if(count >= 5){
        grade = "Gold"
    } else if(count >= 3){
        grade = "Sliver"
    } else{
        grade = "Bronze"
    } 
    return "의류를 구매한 횟수는 총 " + count + "회 금액은 " + price + "원이며 등급은 " + grade + "입니다."  
    //return `의류를 구매한 횟수는 총 ${count}회 금액은 ${price}원이며 등급은 ${grade}입니다.`
    //템플릿 리터럴  : 벡틱 ${} 이용하면 가독성 높일 수 있음 
}

random()


//random()함수 안에 category, mypage("장난감") 넣으면 카테고리도 변수로 이용 가능.