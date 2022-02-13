import { v4 as uuidv4 } from "uuid";
import { getMyDate } from "../../../../commons/libraries/uitils";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 50px auto;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const WrapperList = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: flex-end; */
`;

const ViewAll = styled.p`
  color: #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  cursor: pointer;
`;

interface IPropsData {
  data: any;
  MoveToAll: () => void;
}

export default function BestListPageUI(props: IPropsData) {
  return (
    <Wrapper>
      <TitleBox>
        <h2>이번주 인기 게시물</h2>
        <ViewAll onClick={props.MoveToAll}>전체보기</ViewAll>
      </TitleBox>
      <WrapperList>
        {props.data?.fetchBoardsOfTheBest.map((el: any) => (
          <div key={uuidv4()}>
            <div>
              <img
                style={{ width: "300px" }}
                src={
                  el.images[0]
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : "/basic.jpeg"
                }
              />
            </div>
            <h4>{el.writer}</h4>
            <div>{el.title}</div>
            <div>{getMyDate(el.updatedAt)}</div>
          </div>
        ))}
      </WrapperList>
    </Wrapper>
  );
}
