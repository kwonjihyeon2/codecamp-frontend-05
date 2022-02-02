import * as S from "./BoardComment.styles";
import { IPropsComment } from "./BoardComment.types";
import { Rate } from "antd";

export default function FreeBoardCommentsUI(props: IPropsComment) {
  return (
    <S.NewBody>
      <S.CommentContent>
        <S.CommentTitle>의견 남기기</S.CommentTitle>
        <S.CommentBox>
          <div>
            <S.CommonsInput
              type="text"
              id="writer"
              onChange={props.onChangeInputs}
            />
            <S.CommonsInput
              type="text"
              id="password"
              placeholder="비밀번호를 입력하세요."
              onChange={props.onChangeInputs}
            />
            <Rate
              value={props.StarValue}
              onChange={props.handelChange}
              style={{ fontSize: 16 }}
            />
          </div>
          <S.CommentsInput
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
            maxLength={100}
          />
          <S.OnComments>
            <S.CommentsCount>
              {props.length}/100
              <S.ChangeBtn
                isActive={props.isActive}
                onClick={props.CreateComment}
              >
                등록하기
              </S.ChangeBtn>
            </S.CommentsCount>
          </S.OnComments>
        </S.CommentBox>
      </S.CommentContent>
    </S.NewBody>
  );
}
