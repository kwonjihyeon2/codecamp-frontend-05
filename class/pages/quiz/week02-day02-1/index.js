import { useQuery,gql,useMutation } from "@apollo/client";
import styled from '@emotion/styled'

const FETCH_PRODUCTS = gql`
    query fetchProducts{
        fetchProducts{
            _id
            seller
            name
            detail
            price
        }
    }
`
const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId : ID){
        deleteProduct(productId : $productId){
            _id
            number
            message
        }
    }
`

const Row = styled.div`
    display : flex;
    width :70%;
    margin : 30px auto;
`

const Column = styled.div`
    width : 20%;
`

export default function QuizCheckBoxPage(){

    const {data} = useQuery(FETCH_PRODUCTS)
    const [deleteProduct] = useMutation(DELETE_PRODUCT)

    const ClickDelProduct = (event)=>{
        deleteProduct({
            variables : {productId : (event.target.id)},
            refetchQueries : [{query : FETCH_PRODUCTS}]
        })
        console.log(event.target.id)
    }

    
    return(
        <div>
            {data?.fetchProducts.map((el)=>(
                <Row key={el._id}>
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.name}</Column>
                    <Column>{el.detail}</Column>
                    <Column>{el.price}</Column>
                    <Column>{el.seller}</Column>
                    <Column><button id={el._id} onClick={ClickDelProduct}>삭제</button></Column>
                </Row>
            ))}
        </div>
    )
}