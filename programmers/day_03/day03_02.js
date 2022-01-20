function countLetter(str){
  //str = str.toLowerCase();
  let count = 0;
  for(let i=0; i < str.length; i++){
    
    if(str[i].includes("a") || str[i].includes("A")){
      count++;
    } 
  } return count
}



//더 간단한 방법 - str자체를 소문자로 변경하고 if()조건값을줄임.
//대문자로 바꾸기 : toUpperCase -> 이 두가지는 문자열에서만 사용가능.