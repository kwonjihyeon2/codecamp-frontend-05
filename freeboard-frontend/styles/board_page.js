import styled from '@emotion/styled'
// import {image} from 'public'

export const NewBody = styled.div`
    width:100%;
    font-family : Noto Sans KR;
`
export const BoardContent = styled.div`
    width:1200px;
    margin : 80px auto;
`

export const Wrapper = styled.div`
    width:100%;
    padding : 80px 100px;
    box-shadow  : 0px 4px 20px rgba(0,0,0,0.2);
`

export const Wrapper_Top = styled.div`
    margin-bottom : 80px;
    border-bottom : 1px solid #bdbdbd;
    padding-bottom : 20px;
    display : flex;
    width : 100%;
    flex-direction : row;
    justify-content : space-between;
`

export const Writer = styled.div`
    display:flex;
    flex-direction : row;
    align-items:center;
    justify-content : space-between;
    width : 100%;
`
export const Profile = styled.div`
    margin-right : 15px;
    width : 50px;
    height : 50px;
    border-radius : 100%;
    background-color : #fff;
    text-align : center;
`

export const WriterBox = styled.div`
    display:flex;
    align-items : center;
`

export const WriteDate = styled.div`
    color : #828282;
    margin-top : 8px;
    font-size : 16px;
`

export const Wrapper_Top_Icon = styled.span`
    color : #ffd600;
    margin-left : 20px;
`

export const BodyTitle = styled.div`
    font-size : 36px;
    font-weight : 700;
`
export const BodyImg = styled.div`
    width:100%;
    height : 480px;
    background-color : #bdbdbd;
    margin : 40px 0;
    background : url('/photo.jpeg');
    background-position : center;
`

export const BodyContents = styled.div`
    white-space: pre-wrap;
`

export const BodyYoutube = styled.div`
    width:486px;
    height : 240px;
    background-color : #bdbdbd;
    margin : 120px auto;
`

export const BodyLikebox = styled.div`
    display : flex;
    justify-content : center;
    margin : 0 auto;
    padding-top : 40px;
`

export const LikeBox = styled.div`
    margin : 0 30px;
    color : #ffd600;
    text-align : center;
`

export const DisLikeText = styled.p`
    color : #828282;
`

export const ButtonBox = styled.div`
    display : flex;
    justify-content : center;
    width: 100%;
    margin : 80px 0;
`

export const CommonBtn = styled.div`
    margin : 0px 15px;
    background-color : #fff;
    padding : 15px 60px;
    border : 1px solid #bdbdbd;
    font-weight : 500;
    cursor : pointer;
`