import { useMutation, gql } from '@apollo/client'
import axios from 'axios'
import { Fragment, useState } from 'react'


const CREATE_PRODUCT = gql`
    mutation createProduct($seller:String, $createProductInput:CreateProductInput!){
        createProduct(seller: $seller, createProductInput:$createProductInput){
            _id
            number
            message
        }
    }
`

export default function graphqlMutationProduct(){

    const [seller, setSeller] = useState("")
    const [product, setProduct] = useState("")
    const [productContent, setProductContent] = useState("")
    const [productPrice, setProductPrice] = useState("")


    const [createProduct] = useMutation(CREATE_PRODUCT)

    //화살표 함수 호이스팅 막기 위해 사용 기본 함수보다 성능은 조금 느릴 수 있음. 속도는 리액트의 추가적인 기능으로 보완함 추후 예정
    const onClickSubmit = async () =>{
        await createProduct({
            variables : {
                seller:seller, createProductInput : {
                   name : product,
                   detail  : productContent,
                   price : Number(productPrice) 
                }
            }
        })
    
    }

    const onChangeSeller = (event)=>{
        setSeller(event.target.value)
    }

    const onChangeProduct = (event)=>{
        setProduct(event.target.value)
    }

    const onChangeContents = (event) =>{
        setProductContent(event.target.value)
    }

    const onChangePrice = (event) =>{
        setProductPrice(event.target.value)
    }

    
    return(
        <>
            판매자 : <input type ="text" onChange={onChangeSeller}/><br />
            상품명 : <input  type="text" onChange={onChangeProduct}/><br />
            상품내용 : <input type="text" onChange={onChangeContents}/><br />
            상품가격 : <input type="text" onChange={onChangePrice}/><br />
            <button onClick={onClickSubmit}>상품 등록하기</button>
        </>
    )

}