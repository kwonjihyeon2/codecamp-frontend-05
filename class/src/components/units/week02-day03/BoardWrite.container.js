import ProductWritePageUI from "./BoardWrite.presenter"
import { useMutation } from "@apollo/client"
import {CREATE_PRODUCT, UPDATE_PRODUCT} from './BoardWrite.queries'
import { useState } from "react"
import { useRouter } from "next/router"

export default function ProductWritePage(props) {

    const router = useRouter()
    const [NewProduct] = useMutation(CREATE_PRODUCT)
    const [UpdateProduct] = useMutation(UPDATE_PRODUCT)

    const [ProductSeller, setSeller] = useState("")
    const [ProductName, setName] = useState("")
    const [ProductPrice, setPrice] = useState("")
    const [ProductDetail, setDetail] = useState("")

    const WriteNewProduct = async ()=>{
       const result = await NewProduct({
            variables : {
                seller : ProductSeller, createProductInput : {
                    name : ProductName, price : Number(ProductPrice), detail : ProductDetail
                }
            } 
        }) 
        console.log(result.data.createProduct.message)
        
        router.push(`/quiz/week02-day03/${result.data.createProduct._id}`)
    }

    //추가된 수정 버튼
    const ToEditPage = ()=>{

        const editresult = UpdateProduct({
            variables : { 
                productId : (router.query.detailPage), updateProductInput : {
                    name : ProductName, price :Number(ProductPrice), detail : ProductDetail
                }
            }
        })
        // console.log(editresult.data.updateProduct.message)
        router.push(`/quiz/week02-day03/${router.query.detailPage}`)
    }

    const onChangeSeller = (event)=>{
        setSeller(event.target.value)
    }

    const onChangeName = (event) =>{
        setName(event.target.value)
    }

    const onChangePrice = (event) =>{
        setPrice(event.target.value)
    }

    const onChangeDetail = (event) =>{
        setDetail(event.target.value)
    }

    
    return(
        <ProductWritePageUI 
            mySeller={onChangeSeller}
            myProductName={onChangeName}
            myProductPrice={onChangePrice}
            myProductDetail={onChangeDetail}
            SubmitBtn={WriteNewProduct}
            EditBtn={ToEditPage}
            isEdit={props.isEdit}
        />
    )
}