import { handelError } from "../../../../commons/libraries/uitils";
import * as C from "./cart.styled";

interface basketType {
  _id: string;
  tags: string[];
  remarks: string;
  price: number;
  name: string;
  images: string[];
}

export default function CartPageContainer() {
  const myBasket = JSON.parse(localStorage.getItem("todayBasket") || "[]");
  // console.log(myBasket);

  return (
    <C.Wrapper>
      <C.WrapperTitle>총 {myBasket.length} 개</C.WrapperTitle>
      {myBasket.map((el: basketType) => (
        <C.WrapperBody>
          <C.CommonContainer>
            <C.ContainerImg
              src={`https://storage.googleapis.com/${el.images[0]}`}
              onError={handelError}
              alt={el.name}
            />
          </C.CommonContainer>
          <C.TitleContainer>{el.name}</C.TitleContainer>
          <C.CommonContainer>수량 1개</C.CommonContainer>
          <C.CommonContainer>{el.price}원</C.CommonContainer>
        </C.WrapperBody>
      ))}
    </C.Wrapper>
  );
}
