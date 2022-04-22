import { MoveToPageHook } from "../../hooks/MoveToPageHook";
import { FaSearch, FaUserShield } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import ProductMyInput from "../../input/market/index";
import * as H from "./header.styled";
import { MakeGlobalContext } from "../../../../../pages/_app";
import { useRouter } from "next/router";
import _ from "lodash";

interface IpropsHeader {
  openNavi: boolean;
  setOpenNavi: Dispatch<SetStateAction<boolean>>;
}

export default function LayOutDesignMainHead(props: IpropsHeader) {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const { moveToPage } = MoveToPageHook();

  const onClickOpenNavi = () => {
    props.setOpenNavi((prev) => !prev);
  };
  // console.log(props.openNavi);
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  // console.log(scrollPosition);

  // const { setSearch } = useContext(MakeGlobalContext);
  // const getDebounce = _.debounce((data) => {
  //   if (setKeyword) setKeyword(data);
  // }, 1000);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const onClickSearch = () => {
    // if (setSearch) setSearch(keyword);
    router.push({
      pathname: "/search/index",
      query: {
        keyword: keyword,
      },
    });
  };
  // console.log(keyword, router.query.keyword);

  return (
    <H.Wrapper scrollPosition={scrollPosition}>
      <H.HeaderList>
        <H.HeaderLogo
          scrollPosition={scrollPosition}
          onClick={moveToPage("/mainpage")}
        >
          로고
        </H.HeaderLogo>
        {scrollPosition > 100 ? (
          <H.SearchBox>
            <ProductMyInput
              type="text"
              placeholder="검색어를 입력하세요"
              onChange={onChangeSearch}
            />
            <H.SearchIconSpan onClick={onClickSearch}>
              <FaSearch />
            </H.SearchIconSpan>
          </H.SearchBox>
        ) : (
          <H.NavList>
            <H.NavLi>OPEN-API</H.NavLi>
            <H.NavLi onClick={moveToPage("/boards")}>COMMUNITY</H.NavLi>
            <H.NavLi onClick={moveToPage("/market")}>MARKET</H.NavLi>
            <H.NavLi onClick={moveToPage("/mypage")}>MY</H.NavLi>
          </H.NavList>
        )}
        <H.UserBox>
          {scrollPosition > 100 ? (
            <div>
              <H.FaSearchIcon />
            </div>
          ) : (
            <div>
              <FaSearch style={{ color: "#fff" }} />
            </div>
          )}
          <H.UserIcon onClick={onClickOpenNavi}>
            <FiMenu />
            <FaUserShield style={{ fontSize: "1.5rem" }} />
          </H.UserIcon>
        </H.UserBox>
      </H.HeaderList>
    </H.Wrapper>
  );
}
