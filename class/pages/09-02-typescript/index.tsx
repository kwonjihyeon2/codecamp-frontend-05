export default function TypescriptPage(){

    //타입스크립트
    // let aaa = "안녕하세요"
    // aaa = "반갑습니다."
    //타입 추론 : 변수에 데이터를 담으면 자동으로 타입을 추론해서 지정함. 다른 타입이 들어가면 에러

    //let bbb:string;
    //bbb = ""
    //bbb= 3

    // let ccc = 5
    //타입추론으로 숫자타입으로 지정함

    //boolean
    // let ddd : boolean
    // ddd = 123
    // ddd = "asdf"
    // ddd = true

    //타입추론 - 숫자가들어간배열
    let eee: number[] = [1, 2, 3, 4, 5, 6]
    let fff: string[] = ["철수","영희"]
    let ggg: (string | number)[] = ["훈이",2,3,4,"철수"] //추론도되고 지정도되고

    // | : or & : and ,,이제 다 올수있음, 하지만 인덱스끼리의 탸입은 같아야함 타입을 지정해줬음
    let hhh:(string[] | number[]) = [1, 2, 3]
    hhh = ["철수" ,"영희"]

    //지정하지않았지만 추론으로 처음 들어간 타입이 지정됨 -> profile.name = 123 안됨 

    interface IProfile{
        name : string,
        age : number | string
        school  :string
    }
    const profile:IProfile = {
        name  :"철수",
        age : 8,
        school : "다람쥐초등학교"
    }
    profile.age = "8살"



    return <div>타입스크립트 연습!</div>
}