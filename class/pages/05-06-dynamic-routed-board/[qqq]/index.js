import QuizDetailBoard from "../../../src/components/units/day-06-02-quiz/board/QuizBoard02.container";


export default function QuizDynamicRoutedPage(){
    

    return(
        <QuizDetailBoard />
    )
}

// JSX 에서 && - 데이터가있으면 오른쪽, 없으면 왼쪽 조건부렌더링
//데이터를 받아올동안 잠시 비어있다가 데이터를 받아오면 표출
//?. - 옵셔널체이닝 