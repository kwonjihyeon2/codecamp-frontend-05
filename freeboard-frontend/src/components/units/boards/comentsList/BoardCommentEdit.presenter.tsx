import * as S from './BoardCommentList.styles'
import {IPropsEditComment} from './BoardCommentList.types'
import { FaUserCircle , FaStar,FaPencilAlt } from 'react-icons/fa'
// import { BiLike,BiDislike } from 'react-icons/bi'

// 버튼 클릭하면 이쪽 컴포넌트랑 연결

export default function FreeBoardCommentsEditUI(props:IPropsEditComment){

    return(

        <S.CommentInfo>
            {props.data?.fetchBoardComments.map((el:any)=>(
                
                <div key={el._id}>
                    <S.CommentDiv>
                        <div><FaUserCircle size={50}/></div>
                        <S.CommentWriterBox>
                            <S.WriterRating>
                                <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                <div><input type="text" defaultValue={el.writer}/></div>
                                <div><input type="text" placeholder="비밀번호를 입력하세요." onChange={props.onChangePassword}/></div>
                            </S.WriterRating>
                            <S.OnComments>
                                <textarea  placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." onChange={props.onChangeContents} maxLength={100}/>
                            </S.OnComments>
                            <S.DateColor>{"어제"}</S.DateColor>
                        </S.CommentWriterBox>
                        <div>
                            <button onClick={props.UpdateComment}>등록하기<FaPencilAlt /></button>
                        </div>
                    </S.CommentDiv>

                </div>

            ))}

            {/* 사용자 div */}      
        </S.CommentInfo>
    )
    
}