import { v4 as uuidv4 } from "uuid";
import * as L from "./ProductList.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestItemList from "../bestList/Bestlist.container";
import { handelError } from "../../../../commons/libraries/uitils";
import InfiniteScroll from 'react-infinite-scroller';

export default function ItemListUI(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "20px",
  };

  const MoreLoadData = () => {
    if (!props.moreData) return;

    props.fetchMore({
      variables: {
        page: Math.ceil(props.moreData?.fetchUseditems.length / 10) + 1,
        search: "",
      },
      updateQuery: ( prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    })
  }

  return (
    <L.Wrapper>
      <BestItemList />
      <L.BannerStyle>
        <img style={{ width: "350px" }} src="/main/banner.png" />
      </L.BannerStyle>
      <L.WrapperBox>
        <div>
          <L.WrapperTitle>오늘 등록 상품 TOP10</L.WrapperTitle>
          <L.WrapperListBox>
            <Slider {...settings}>
              {props.data?.fetchUseditems.map((el) => (
                <L.SlickBox key={uuidv4()} onClick={props.MoveToDetail(el)}>
                  <L.ListBox>
                    <L.ListImg
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                      onError={handelError}
                    />
                  </L.ListBox>

                  <L.ProductName>{el.name}</L.ProductName>
                  <p style={{ color: "#bdbdbd" }}>{el.remarks}</p>
                  <p>
                    <L.ProductName>{el.price}</L.ProductName>원
                  </p>
                </L.SlickBox>
              ))}
            </Slider>
          </L.WrapperListBox>
        </div>
        <div >
        <L.WrapperTitle>마켓의 모든 상품을 만나보세요</L.WrapperTitle>
        <InfiniteScroll
            pageStart={0}
            loadMore={MoreLoadData}
            hasMore={true}
            // useWindow={false}
        >
        <div style={{margin : "50px 0",display : "flex", justifyContent:"space-between" ,flexWrap:"wrap"}}>
        {props.moreData?.fetchUseditems.map((el) => (
          <div style={{width : "23%"}} key={uuidv4()} onClick={props.MoveToDetail(el)}>
            <L.ListBox>
              <L.ListImg
                src={`https://storage.googleapis.com/${el.images[0]}`}
                onError={handelError}
              />
            </L.ListBox>

            <L.ProductName>{el.name}</L.ProductName>
            <p style={{ color: "#bdbdbd" }}>{el.remarks}</p>
            <p>
              <L.ProductName>{el.price}</L.ProductName>원
            </p>
          </div>
        ))}</div>
         </InfiniteScroll>
        </div>
      </L.WrapperBox>
    </L.Wrapper>
  );
}
