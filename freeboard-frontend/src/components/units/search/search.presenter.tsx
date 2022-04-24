import { handelError } from "../../../commons/libraries/uitils";
import { IPropsSearch } from "./search.types";
import * as S from "./search.styles";
import { useState } from "react";
import ReactPlayer from "react-player";

export default function SearchPageUI(props: IPropsSearch) {
  //   console.log(props.router.pathname);
  const [isHover, setIsHover] = useState(false);
  //   console.log(props.data?.fetchBoards);
  return (
    <S.Wrapper>
      <S.WrapperContainer>
        <S.MainText>
          '{props.keyword}'에 대한 통합 검색 결과
          <S.MainSpan>
            {`${
              (props.data?.fetchBoards.length || 0) +
              (props.fetchdata?.fetchUseditems.length || 0)
            }`}
            건
          </S.MainSpan>
        </S.MainText>
        <S.ResultBox>
          <S.TextBox>
            <div>
              COMMUNITY
              <S.MainSpan>{props.data?.fetchBoards.length}</S.MainSpan>
            </div>
            <div style={{ marginRight: "10px" }}>
              {(props.data?.fetchBoards.length || 0) >= 4 ? (
                <div>더보기</div>
              ) : (
                <div></div>
              )}
            </div>
          </S.TextBox>

          <S.DataContainer>
            {props.data?.fetchBoards
              .filter((_, index) => index <= 3)
              .map((el) => (
                <S.DataBox
                  key={el._id}
                  onClick={props.moveToPage(`/boards/${el._id}`)}
                >
                  <S.ImgContainer
                  // onMouseOver={() => setIsHover(true)}
                  // onMouseOut={() => setIsHover(false)}
                  >
                    <S.BoxImg
                      src={`https://storage.googleapis.com/${el.images?.[0]}`}
                      alt={`${el.title}이미지`}
                      onError={handelError}
                    />
                  </S.ImgContainer>
                  <S.TitleText>{el.title}</S.TitleText>
                  <div>{el.writer}</div>
                </S.DataBox>
              ))}
          </S.DataContainer>
        </S.ResultBox>
        <S.ResultBox>
          <S.TextBox>
            <div>
              MARKET
              <S.MainSpan>{props.fetchdata?.fetchUseditems.length}</S.MainSpan>
            </div>

            <div style={{ marginRight: "10px" }}>
              {(props.fetchdata?.fetchUseditems.length || 0) >= 5 ? (
                <div>더보기</div>
              ) : (
                <div></div>
              )}
            </div>
          </S.TextBox>

          <S.DataContainer>
            {props.fetchdata?.fetchUseditems
              .filter((el, index) => index <= 3)
              .map((el) => (
                <S.DataBox
                  key={el._id}
                  onClick={props.moveToPage(`/market/${el._id}`)}
                >
                  <S.ImgContainer>
                    <S.BoxImg
                      src={`https://storage.googleapis.com/${el.images?.[0]}`}
                      alt={`${el.remarks}이미지`}
                      onError={handelError}
                    />
                  </S.ImgContainer>
                  <S.TitleText>{el.name}</S.TitleText>
                  <div>{el.price}원</div>
                </S.DataBox>
              ))}
          </S.DataContainer>
        </S.ResultBox>
      </S.WrapperContainer>
    </S.Wrapper>
  );
}
