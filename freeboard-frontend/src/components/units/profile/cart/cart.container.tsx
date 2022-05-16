import { handelError } from "../../../../commons/libraries/uitils";
import ProductMiddleButton from "../../../commons-components/button/market02";
import * as C from "./cart.styled";
import { basketType, IPropsCart } from "./cart.types";

export default function CartPageContainer(props: IPropsCart) {
  const myBasket = JSON.parse(localStorage.getItem("todayBasket") || "[]");

  return (
    <C.Wrapper>
      <C.WrapperTitle>
        <div>{props.data?.fetchUserLoggedIn.name} 님의 장바구니</div>
        <C.TitleBox>
          <input style={{ marginRight: 10 }} type="checkbox" /> 전체 선택 (
          <C.TitleSpan> 3 </C.TitleSpan> / {myBasket.length} )
        </C.TitleBox>
      </C.WrapperTitle>
      {myBasket.map((el: basketType) => (
        <C.WrapperBody>
          <C.CommonContainer>
            <C.ContainerImg
              src={`https://storage.googleapis.com/${el.images[0]}`}
              onError={handelError}
              alt={el.name}
            />
          </C.CommonContainer>
          <C.TitleContainer>
            {el.name}
            <C.TitleRemark>{el.remarks}</C.TitleRemark>
          </C.TitleContainer>
          <C.CommonContainer>수량 1개</C.CommonContainer>
          <C.CommonContainer style={{ textAlign: "right" }}>
            {el.price}원
          </C.CommonContainer>
        </C.WrapperBody>
      ))}
      <C.PaymentBox>
        <ProductMiddleButton name="결제하기" />
      </C.PaymentBox>
    </C.Wrapper>
  );
}
