import { v4 as uuidv4 } from "uuid";
import { getMyDate } from "../../../../commons/libraries/uitils";
import * as L from "./BestList.styled";

type IPage = "/market" | "/boards";

interface IPropsData {
  data: any;
  moveToPage: (page: IPage) => () => void;
  BestData: any;
}

export default function BestListPageUI(props: IPropsData) {
  return (
    <L.Wrapper>
      <L.TitleBox>
        <L.TitleText>흥미로운 아이디어 둘러보기</L.TitleText>
        <L.ViewAll onClick={props.moveToPage("/boards")}>전체보기</L.ViewAll>
      </L.TitleBox>
      <L.WrapperList>
        {props.data?.fetchBoardsOfTheBest.map((el: any) => (
          <L.WrapperListBox key={uuidv4()}>
            <div style={{ height: "35vh" }}>
              <L.BestImg
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={
                  el.images[0]
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : "/basic.jpeg"
                }
              />
            </div>
            <L.TitleFont>{el.title}</L.TitleFont>
            <L.ContentStyle>{el.contents}</L.ContentStyle>
            <L.DayTitle>{el.writer}</L.DayTitle>
            <L.DayTitle>{getMyDate(el.updatedAt)}</L.DayTitle>
          </L.WrapperListBox>
        ))}
      </L.WrapperList>
      <L.WrapperList>
        <L.RoutingBox>
          <L.TextBox>인기 상품의 비결이 궁금하신가요?</L.TextBox>
          <L.ButtonBox onClick={props.moveToPage("/market")}>
            보러가기
          </L.ButtonBox>
        </L.RoutingBox>
      </L.WrapperList>
      <L.TitleBox>
        <L.TitleText>합리적인 소비를 위한 추천</L.TitleText>
        <L.ViewAll onClick={props.moveToPage("/market")}>전체보기</L.ViewAll>
      </L.TitleBox>
      <L.WrapperList>
        {props.BestData?.fetchUseditemsOfTheBest.map((el: any) => (
          <L.WrapperListBox key={uuidv4()}>
            <div style={{ height: "35vh" }}>
              <L.BestImg
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                src={
                  el.images[0]
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : "/basic.jpeg"
                }
              />
            </div>
            <L.TitleFont>{el.name}</L.TitleFont>
            <L.ContentStyle>{el.remarks}</L.ContentStyle>
            <L.DayTitle>{el.price}원</L.DayTitle>
            <L.DayTitle>{getMyDate(el.updatedAt)}</L.DayTitle>
          </L.WrapperListBox>
        ))}
      </L.WrapperList>
    </L.Wrapper>
  );
}
