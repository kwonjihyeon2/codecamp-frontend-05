import * as S from './BoardDetail.styles'
import { FaUserCircle , FaLink, FaLocationArrow,FaStar } from 'react-icons/fa'
import { BiLike,BiDislike } from 'react-icons/bi'


export default function FreeBoardDetailUI(props){
    


    return(
        <S.NewBody>
            <S.BoardContent>
                <S.Wrapper>
                    <S.Wrapper_Top>
                        <S.Writer>
                            <S.WriterBox>
                                <S.Profile><FaUserCircle size={50} color="#bdbdbd"/></S.Profile>
                                <div>
                                    <div>{props.data?.fetchBoard.writer}</div>
                                    <S.WriteDate>Date : 2021.02.18</S.WriteDate>
                                </div>
                            </S.WriterBox>
                            
                            <div>
                                <S.Wrapper_Top_Icon><FaLink /></S.Wrapper_Top_Icon>
                                <S.Wrapper_Top_Icon><FaLocationArrow /></S.Wrapper_Top_Icon>
                            </div>
                        </S.Writer>
                    </S.Wrapper_Top>
                    <div>
                        <S.BodyTitle>{props.data?.fetchBoard.title}</S.BodyTitle>
                        <S.BodyImg></S.BodyImg>
                        <S.BodyContents>{props.data?.fetchBoard.contents}</S.BodyContents>
                        <S.BodyYoutube>{props.data?.fetchBoard.youtubeUrl}</S.BodyYoutube>
                        <S.BodyLikebox>
                            <S.LikeBox>
                                <BiLike />
                                <p>1920</p>
                            </S.LikeBox>
                            <S.LikeBox>
                                <BiDislike color="#828282"/>
                                <S.DisLikeText>1920</S.DisLikeText>
                            </S.LikeBox>
                        </S.BodyLikebox>
                    </div>
                </S.Wrapper>
                <S.ButtonBox>
                    <S.CommonBtn onClick={props.GoList}>목록으로</S.CommonBtn>
                    <S.CommonBtn onClick={props.GoEditPage}>수정하기</S.CommonBtn>
                    <S.CommonBtn onClick={props.deleteBoard}>삭제하기</S.CommonBtn>
                </S.ButtonBox>
            </S.BoardContent>
        </S.NewBody>
    )
    
}