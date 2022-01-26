import { ReactChild } from "react";
import LayoutBanner from "./banner/index";
import LayoutHeader from "./header/index";
import LayoutFooter from "./footer/index";
import LayoutNavigation from "./navigation/index";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const BodyWrapper = styled.div`
  display: flex;
`;

const LayoutBody = styled.div`
  /* width: 100%; */
`;

const LayoutSidebar = styled.div`
  width: 200px;
  height: 1800px;
  background-color: pink;
`;

const HIDDEN_HEADERS = [
  "/12-06-modal-address-refactoring",
  //... 여러 페이지 적으면 됨
];

interface IPropsLayout {
  children: ReactChild;
}

export default function Layout(props: IPropsLayout) {
  //props.children 하면 app에서 component가 들어옴
  //한 폴더 전체 인덱스에 적용된다고 보면 된다

  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  //내가 접속한 주소
  //조건부 랜더링 기재해주면 해당 페이지에서 빠짐

  return (
    <div>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />

      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar />
        <LayoutBody>{props.children}</LayoutBody>
      </BodyWrapper>
      <LayoutFooter />
    </div>
  );
}
