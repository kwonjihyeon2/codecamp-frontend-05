import * as S from "./communitybanner.style";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { handelError } from "../../../../commons/libraries/uitils";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      writer
      contents
      title
      images
    }
  }
`;

export default function LayOutDesignSubBanner() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  //   console.log(data?.fetchBoards);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <S.Wrapper>
      <S.SlickTitle>
        <S.SlickTitleH1>인기 게시물의 주인공이 되어보세요</S.SlickTitleH1>
        <div>게시물 등록에 도움이 되는 자료입니다</div>
      </S.SlickTitle>
      <S.MySlider {...settings}>
        {data?.fetchBoards.map((el, index) => (
          <S.MainSlick key={index}>
            <S.SlickimgBox>
              <S.ColorImg
                src={`https://storage.googleapis.com/${el.images?.[0]}`}
                onError={handelError}
                alt={el.title}
              />
            </S.SlickimgBox>
            <S.TextBox>
              <S.CommonsText>{el.title}</S.CommonsText>
              <S.CommonsText>{el.writer}</S.CommonsText>
            </S.TextBox>
          </S.MainSlick>
        ))}
      </S.MySlider>
    </S.Wrapper>
  );
}
