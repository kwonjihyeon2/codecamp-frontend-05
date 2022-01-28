import * as S from "./BoardList.styles";
import { FaPencilAlt } from "react-icons/fa";

export default function BoardListPageUI(props) {
  return (
    <S.NewBody>
      <S.Wrapper>
        <S.WrapperList>
          <S.DataTitleBox>
            <S.NumberBox>번호</S.NumberBox>
            <S.TitleBox>제목</S.TitleBox>
            <S.WriterDate>작성자</S.WriterDate>
            <S.WriterDate>날짜</S.WriterDate>
          </S.DataTitleBox>
          <div>
            {/* index값 번호로 넣어줄 수 있음 */}
            {props.data?.fetchBoards.map((el, index) => (
              <S.DataListBox key={el._id}>
                <S.NumberBox>{index + 1}</S.NumberBox>
                <S.TitleBox id={el._id} onClick={props.GoToDetail}>
                  {el.title}
                </S.TitleBox>
                <S.WriterDate>{el.writer}</S.WriterDate>
                <S.WriterDate>{el.createdAt}</S.WriterDate>
              </S.DataListBox>
            ))}
          </div>
        </S.WrapperList>
        <S.ListBottom>
          <S.CreateBtn onClick={props.CreateNew}>
            <S.PencilIcon>
              <FaPencilAlt />
            </S.PencilIcon>
            게시물 등록하기
          </S.CreateBtn>
        </S.ListBottom>
      </S.Wrapper>
    </S.NewBody>
  );
}
