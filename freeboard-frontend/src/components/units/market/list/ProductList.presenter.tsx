import { v4 as uuidv4 } from "uuid";
import * as L from "./ProductList.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestItemList from "../bestList/Bestlist.container";
import { handelError } from "../../../../commons/libraries/uitils";

export default function ItemListUI(props) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    // beforeChange: function (currentSlide, nextSlide) {
    //   console.log("before change", currentSlide, nextSlide);
    // },
    // afterChange: function (currentSlide) {
    //   console.log("after change", currentSlide);
    // },
  };

  return (
    <L.Wrapper>
      <L.WrapperList>
        <p>오늘 본 상품</p>
        <L.ListSide>
          <Slider {...settings}>
            {props.viewToday.map((el) => (
              <L.ListBox key={uuidv4()}>
                <img
                  style={{ width: "100%" }}
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                  onError={handelError}
                />
                <div>{el.name}</div>
              </L.ListBox>
            ))}
          </Slider>
        </L.ListSide>
      </L.WrapperList>
      <div>
        <BestItemList />
        <L.WrapperBox>
          <div>
            <h1>목록</h1>
            <L.WrapperListBox>
              {props.data?.fetchUseditems.map((el) => (
                <div key={uuidv4()} onClick={props.MoveToDetail(el)}>
                  <div>
                    <img
                      style={{ width: "100px" }}
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                      onError={handelError}
                    />
                  </div>
                  <span>{el.name}</span>
                  <span>{el.remarks}</span>
                </div>
              ))}
            </L.WrapperListBox>
          </div>
        </L.WrapperBox>
      </div>
    </L.Wrapper>
  );
}
