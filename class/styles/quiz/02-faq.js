import styled from '@emotion/styled'

export const Wrapper = styled.div`
    width : 640px;
    margin : 50px auto;
    box-sizing : border-box;
    background-color : #000;
    padding: 80px 50px;
`

export const AppBox = styled.div`
    text-align : center;
    padding : 100px 0 150px 0;
`

export const AppName = styled.div`
    color : #fff;
    font-size : 60px;
    letter-spacing : -2px;
    font-weight : bold;
    margin-top : 27px;
`

export const InputBox = styled.div`
    margin : 10px 0 20px 0;
`
export const InputLine = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
    border-bottom : 1px solid #fff;
    padding-bottom : 15px;
`
export const InputStyle = styled.input`
    width : 100%;
    background-color : transparent;
    border : none;
    color : #fff;
    font-size : 24px;
    /* 인풋속성 */
    ::placeholder{
        color : #bdbdbd;
    }
`

export const ErrorMassage = styled.div`
    font-size : 18px;
    color : #ff1d6d;
    margin-top : 10px;
`

export const PinkRadius = styled.div`
    background-color : #ff1d6d;
    border-radius : 38px;
    width : 100%;
    text-align : center;
    cursor : pointer;
`

export const LoginText = styled.div`
    font-size : 26px;
    color : white;
    font-weight : bold;
    padding : 25px 0;
`

export const YellowRadius = styled.div`
    border : 2px solid #fae100;
    border-radius : 38px;
    width : 100%;
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    cursor : pointer;
`

export const Account = styled.ul`
    margin : 45px auto;
    padding-bottom : 15px;
    display : flex;
    flex-direction : row;
    justify-content : space-around;
    align-items : center;
    color : #fff;
    font-size : 20px;
    cursor : pointer;
`

export const KakaoText = styled.div`
    font-size : 26px;
    color : #fae100;
    font-weight : bold;
    padding : 25px 0;
    margin-left : 20px;
`