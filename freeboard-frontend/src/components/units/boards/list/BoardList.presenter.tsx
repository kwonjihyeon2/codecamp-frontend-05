import * as S from "./BoardList.styles";
import { FaPencilAlt } from "react-icons/fa";
import { ChangeEvent, MouseEvent } from "react";
import { getMyDate } from "../../../../commons/libraries/uitils";

interface IPropsListUI {
  data: any;
  GoToDetail: (event: MouseEvent<HTMLDivElement>) => void;
  CreateNew: () => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function BoardListPageUI(props: IPropsListUI) {
  return (
    <S.NewBody>
      <S.WrapperTop>
        <div>
          총 <S.BoardCount>100</S.BoardCount>건
        </div>
        <div>
          <S.Selection>
            <option selected>제목 + 내용</option>
            <option>제목</option>
            <option>내용</option>
            <option>작성자</option>
          </S.Selection>
          <S.SearchInput
            onChange={props.onChangeSearch}
            type="text"
            placeholder="검색어를 입력하세요."
          />
          <S.SearchButton>검색</S.SearchButton>
        </div>
      </S.WrapperTop>
      <S.WrapperList>
        <S.DataTitleBox>
          <S.NumberBox>번호</S.NumberBox>
          <S.TitleTopBox>제목</S.TitleTopBox>
          <S.WriterDate>작성자</S.WriterDate>
          <S.WriterDate>날짜</S.WriterDate>
        </S.DataTitleBox>
        <div>
          {props.data?.fetchBoards.map((el: any, index: number) => (
            <S.DataListBox key={el._id}>
              <S.NumberBox>{index + 1}</S.NumberBox>
              <S.TitleBox id={el._id} onClick={props.GoToDetail}>
                {el.title}
              </S.TitleBox>
              <S.WriterDate>{el.writer}</S.WriterDate>
              <S.WriterDate>{getMyDate(el.createdAt)}</S.WriterDate>
            </S.DataListBox>
          ))}
        </div>
      </S.WrapperList>
      <S.ListBottom>
        <S.CreateBtn onClick={props.CreateNew}>
          게시물 등록하기
          <S.PencilIcon>
            <FaPencilAlt />
          </S.PencilIcon>
        </S.CreateBtn>
      </S.ListBottom>
    </S.NewBody>
  );
}
