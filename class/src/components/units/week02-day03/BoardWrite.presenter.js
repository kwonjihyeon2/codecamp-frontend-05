export default function ProductWritePageUI(props) {
    
    return(
        <div>
            <div>상품 {props.isEdit ? "수정" : "등록"}페이지</div>
            <div>판매자 : <input type="text" onChange={props.mySeller}/></div>
            <div>상품명 : <input type="text" onChange={props.myProductName}/></div>
            <div>가격 : <input type="text" onChange={props.myProductPrice}/></div>
            <div>상품내용 : <input type="text" onChange={props.myProductDetail}/></div>
            <div>
                <button onClick={props.isEdit ? props.EditBtn : props. SubmitBtn}>{props.isEdit ? "수정" : "등록"}하기</button>
            </div>
        </div>
    )
}