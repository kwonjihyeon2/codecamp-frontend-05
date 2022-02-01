import * as S from "./BoardDetail.styles";
import { FaUserCircle, FaLink, FaLocationArrow } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";
import ReactPlayer from "react-player";
import { getMyDate } from "../../../../commons/libraries/uitils";

interface IDetailProps {
  data?: any;
  GoList: () => void;
  GoEditPage: () => void;
  deleteBoard: () => void;
  LikeBtn: () => void;
  DisLikeBtn: () => void;
}

export default function FreeBoardDetailUI(props: IDetailProps) {
  return (
    <S.NewBody>
      <S.BoardContent>
        <S.Wrapper>
          <S.WrapperTop>
            <S.Writer>
              <S.WriterBox>
                <S.Profile>
                  <FaUserCircle size={50} color="#bdbdbd" />
                </S.Profile>
                <div>
                  <div>{props.data?.fetchBoard.writer}</div>
                  <S.WriteDate>
                    {getMyDate(props.data?.fetchBoard.createdAt)}
                  </S.WriteDate>
                </div>
              </S.WriterBox>

              <div>
                <S.WrapperTopIcon>
                  <FaLink />
                </S.WrapperTopIcon>
                <S.WrapperTopIcon>
                  <FaLocationArrow />
                </S.WrapperTopIcon>
              </div>
            </S.Writer>
          </S.WrapperTop>
          <div>
            <S.BodyTitle>{props.data?.fetchBoard.title}</S.BodyTitle>
            <S.BodyImg></S.BodyImg>
            <S.BodyContents>{props.data?.fetchBoard.contents}</S.BodyContents>
            <S.BodyYouTube>
              <ReactPlayer
                url={props.data?.fetchBoard.youtubeUrl}
                width={480}
                height={props.data?.fetchBoard.youtubeUrl && 250}
              />
            </S.BodyYouTube>
            <S.BodyLikeBox>
              <S.LikeBox>
                <S.LikeBtn onClick={props.LikeBtn}>
                  <BiLike color={"#ffd600"} size={20} />
                </S.LikeBtn>
                <div>{props.data?.fetchBoard.likeCount}</div>
              </S.LikeBox>
              <S.LikeBox>
                <BiDislike
                  onClick={props.DisLikeBtn}
                  color="#828282"
                  size={20}
                />
                <S.DisLikeText>
                  {props.data?.fetchBoard.dislikeCount}
                </S.DisLikeText>
              </S.LikeBox>
            </S.BodyLikeBox>
          </div>
        </S.Wrapper>
        <S.ButtonBox>
          <S.CommonBtn onClick={props.GoList}>목록으로</S.CommonBtn>
          <S.CommonBtn onClick={props.GoEditPage}>수정하기</S.CommonBtn>
          <S.CommonBtn onClick={props.deleteBoard}>삭제하기</S.CommonBtn>
        </S.ButtonBox>
      </S.BoardContent>
    </S.NewBody>
  );
}
