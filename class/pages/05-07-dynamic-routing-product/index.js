import { useMutation, gql } from '@apollo/client'
import axios from 'axios'
import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller : String, $createProductInput : CreateProductInput!){
        createProduct(seller : $seller, createProductInput : $createProductInput){
            _id
        }
    }
`


export default function DynamicMutationProduct(){

    const router = useRouter()
    
    const [NewProduct] = useMutation(CREATE_PRODUCT)
    const [Seller,setSeller] = useState("")
    const [Name, setName] = useState("")
    const [Contents, setContents] = useState("")
    const [Price,setPrice] = useState("")

    const onChangeSeller = (event) =>{
        setSeller(event.target.value)
    }

    const onChangeProduct = (event) =>{
        setName(event.target.value)
    }

    const onChangeContents = (event)=>{
        setContents(event.target.value)
    }

    const onChangePrice = (event) =>{
        setPrice(event.target.value)
    }

    async function onClickSubmit(){

       
        const result = await NewProduct({
            variables : {
                seller : Seller, createProductInput : {
                    name : Name, detail : Contents, price : Number(Price)
                }
            }
        }) //5378a00b-2bce-4b4d-9ef5-fae7a68edd4e
        
        console.log(result.data.createProduct._id)

        const PostId = result.data.createProduct._id
        
        
        router.push(`05-08-dynamic-routed-product/${PostId}`)
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