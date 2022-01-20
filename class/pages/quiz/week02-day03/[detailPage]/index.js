//물품 상세 페이지 - id값 받아오는 페이지
import { useRouter } from "next/router"
import { useQuery,gql } from "@apollo/client"

const FETCH_PRODUCT = gql`
    query fetchProduct($productId : ID){
        fetchProduct(productId : $productId){
            _id
            seller
            name
            detail
            price
        }
    }
`

export default function ProductDetailPage() {

    const router = useRouter()
    const { data } = useQuery(FETCH_PRODUCT,{
        variables : {
            productId : (router.query.detailPage)
        }
    })
    console.log(data, data?.fetchProduct._id)

    const MoveToEditPage =()=>{
        router.push(`/quiz/week02-day03/${router.query.detailPage}/edit`)
    }

    return(
        <div>
            <div>상품 상세 페이지</div>
            <div>판매자 : {data?.fetchProduct.seller}</div>
            <div>상품명 : {data?.fetchProduct.name}</div>
            <div>가격 : {data?.fetchProduct.price}</div>
            <div>상품내용 : {data?.fetchProduct.detail}</div>
            <div>
                <button onClick={MoveToEditPage}>수정하기</button>
            </div>
            <div>{router.query.detailPage}로 이동완료</div>
        </div>
    )
}