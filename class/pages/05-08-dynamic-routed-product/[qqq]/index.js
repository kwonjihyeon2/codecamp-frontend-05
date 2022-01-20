import {useRouter} from 'next/router'
import { useQuery,gql} from '@apollo/client'

const FETCH_PRODUCT = gql`
    query fetchProduct($productId : ID){
        fetchProduct(productId : $productId){
            seller
            name
            detail
            price
        }
    }
`

export default function DynamicRoutedPage(){

    const router = useRouter()

    const {data} = useQuery(FETCH_PRODUCT,{
        variables : {productId : router.query.qqq}
    })
    
    console.log(router.query.qqq, data)
    
    return(
        <div>
            <div>작성자 : {data && data.fetchProduct.seller}</div>
            <div>설명 : {data && data.fetchProduct.name}</div>
            <div>내용 : {data && data.fetchProduct.detail}</div>
            <div>가격 : {data && data.fetchProduct.price}</div>
        </div>
    )
}