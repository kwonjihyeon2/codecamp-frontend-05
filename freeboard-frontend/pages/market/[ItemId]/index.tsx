import { useQuery } from "@apollo/client";
import request from "graphql-request";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../src/commons/types/generated/types";
import { withAuth } from "../../../src/components/commons-components/hoc/withAuth";
import ProductComment from "../../../src/components/units/market/comments/Product.comment.container";
import ItemDetailContainer from "../../../src/components/units/market/detail/productDetail.container";
import { FETCH_USED_ITEM } from "../../../src/components/units/market/detail/productDetail.queries";

// interface IPropsMarket {
//   data: {
//     remarks: string;
//     contents: string;
//     images: string[];
//   };
// }

export const ItemDetailPage = (props: any) => {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.ItemId) },
  });
  console.log(data);
  // if (loading) return "loading";

  return (
    <>
      <Head>
        <meta property="og:title" content={props.data.remarks} />
        <meta property="og:description" content={props.data.contents} />
        <meta
          property="og:image"
          content={
            props.data.images.length
              ? `https://storage.googleapis.com/${props.data.images[0]}`
              : "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
          }
        />
      </Head>
      <ItemDetailContainer data={data} />
      <ProductComment />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const result = await request(
    "https://backend05.codebootcamp.co.kr/graphql03",
    FETCH_USED_ITEM,
    { useditemId: context.query.ItemId }
  );

  return {
    props: {
      data: {
        remarks: result.fetchUseditem.remarks,
        contents: result.fetchUseditem.contents,
        images: result.fetchUseditem.images,
      },
    },
  };
};

export default withAuth(ItemDetailPage);
