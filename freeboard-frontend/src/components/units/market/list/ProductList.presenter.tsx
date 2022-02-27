import { v4 as uuidv4 } from "uuid";
import * as L from "./ProductList.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ItemListUI(props) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
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
      <div>
        <h1>목록</h1>
        {props.data?.fetchUseditems.map((el) => (
          <div key={uuidv4()} onClick={props.MoveToDetail(el)}>
            <span>{el.name}</span>
            <span>{el.remarks}</span>
          </div>
        ))}
      </div>
      <L.WrapperList>
        <h1>오늘 본 상품</h1>
        <L.ListSide>
          <Slider {...settings}>
            {props.viewToday.map((el) => (
              <L.ListBox key={uuidv4()}>
                {/* <div>{el.images[0]}</div> */}
                <img
                  style={{ width: "80px" }}
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
                {/* <div>{el.name}</div> */}
              </L.ListBox>
            ))}
          </Slider>
        </L.ListSide>
      </L.WrapperList>
    </L.Wrapper>
  );
}
