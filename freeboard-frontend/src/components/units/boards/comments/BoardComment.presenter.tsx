import * as S from './BoardComment.styles'
import {IPropsComment} from './BoardComment.types' 
import { FaUserCircle , FaStar,FaPencilAlt,FaRegTrashAlt } from 'react-icons/fa'
// import { BiLike,BiDislike } from 'react-icons/bi'


export default function FreeBoardCommentsUI(props:IPropsComment){

    return(
        <S.NewBody>
           <S.Commentcontent>
                <S.CommentTitle>댓글</S.CommentTitle>
                <S.StarIcon>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </S.StarIcon>
                <S.CommentBox>
                    <div>
                        <input type="text" onChange={props.onChangeMywriter}/>
                        <input type="text" placeholder="비밀번호를 입력하세요." onChange={props.onChangePassword}/>
                    </div>
                    <S.CommentsInput placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." onChange={props.onChangeContents} maxLength={100}/>
                    <S.OnComments>
                        <S.CommentsCount >
                            {props.length}/100
                            <S.ChangeBtn isActive={props.isActive} onClick={props.CreateComment}>등록하기</S.ChangeBtn>
                        </S.CommentsCount>
                        
                    </S.OnComments>
                </S.CommentBox>
                    <S.CommentInfo>

                        {props.data?.fetchBoardComments.map((el: any)=>(
                            <S.CommentDiv key={el._id}>
                                <div><FaUserCircle size={50}/></div>
                                <S.CommentWriterBox>
                                    <S.WriterRating>
                                        <div>{el.writer}</div>
                                        <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                    </S.WriterRating>
                                    <div>{el.contents}</div>
                                    <S.DateColor>{el.createdAt}</S.DateColor>
                                </S.CommentWriterBox>
                                <div>
                                    <button id={el._id} onClick={props.UpdateComment}><FaPencilAlt /></button>
                                    <button id={el._id} onClick={props.DeleteCommentBtn}><FaRegTrashAlt /></button>
                                </div>
                            </S.CommentDiv>
                        ))}
                        {/* 사용자 div */}
                            
                    </S.CommentInfo>
                        
            </S.Commentcontent>
        </S.NewBody>
    )
    
}