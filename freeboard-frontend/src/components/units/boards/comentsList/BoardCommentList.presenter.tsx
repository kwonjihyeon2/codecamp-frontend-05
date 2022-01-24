import * as S from './BoardCommentList.styles'
import {IPropsEditComment} from './BoardCommentList.types'
import { FaUserCircle , FaPencilAlt,FaRegTrashAlt } from 'react-icons/fa'
// import { BiLike,BiDislike } from 'react-icons/bi'
import { Rate } from 'antd'


export default function FreeBoardCommentsUI(props:IPropsEditComment){

    return(

        <S.CommentInfo>
            {props.data?.fetchBoardComments.map((el:any)=>(
                
                <div key={el._id}>
                    { props.EditId === el._id && !props.isEdit
                    ?
                    <S.CommentDiv>
                        <div><FaUserCircle size={50}/></div>
                        <S.CommentWriterBox>
                            <S.WriterRating>
                                <div><input type="text" defaultValue={el.writer}/></div>
                                <div><input type="text" placeholder="비밀번호"/></div>
                                <div><Rate allowHalf defaultValue={el.rating} onChange={props.StarValue}/></div>
                            </S.WriterRating>
                            <S.OnComments>
                                <textarea  placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." onChange={props.onChangeContents} maxLength={100}/>
                            </S.OnComments>
                            <S.DateColor>{el.createdAt}</S.DateColor>
                        </S.CommentWriterBox>
                        <div>
                            <button id={el._id} onClick={!props.isEdit ? props.EditComment : props.UpdateComment}>등록<FaPencilAlt /></button>
                            <button id={el._id} onClick={props.DeleteCommentBtn}><FaRegTrashAlt /></button>
                        </div>
                    </S.CommentDiv>
                    :
                    <S.CommentDiv>
                        <div><FaUserCircle size={50}/></div>
                        <S.CommentWriterBox>
                            <S.WriterRating>
                                <div>{el.writer}</div>
                                <div><Rate allowHalf disabled value={el.rating} /></div>
                            </S.WriterRating>
                            <div>{el.contents}</div>
                            <S.DateColor>{el.createdAt}</S.DateColor>
                        </S.CommentWriterBox>
                        <div>
                            <button id={el._id} onClick={!props.isEdit ? props.UpdateComment : props.EditComment}><FaPencilAlt /></button>
                            <button id={el._id} onClick={props.DeleteCommentBtn}><FaRegTrashAlt /></button>
                        </div>
                    </S.CommentDiv>
                    
                    }
                </div>

            ))}

            {/* 사용자 div */}      
        </S.CommentInfo>
    )
    
}