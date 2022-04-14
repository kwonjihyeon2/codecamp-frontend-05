import ProductCommentItem from "../EditComments/ProductEditComment.container";
import { v4 as uuidv4 } from "uuid";
import CommentAnswerItem from "../commentsAnswer/commentsAnswer.container";
import * as PC from "./Product.comment.style";
import { IUseditemQuestion } from "../../../../commons/types/generated/types";
import { ICommentUI } from "./Product.comment.types";
import ProductClickButton from "../../../commons-components/button/market04";

export default function ProductCommentUI(props: ICommentUI) {
  return (
    <PC.Wrapper>
      <PC.WrapperBox>
        <PC.ProductPrice>PRODUCT QUESTIONS</PC.ProductPrice>
        <PC.BasicSpan>상품에 대한 문의를 남기는 공간입니다.</PC.BasicSpan>
        <PC.WrapperComment>
          <PC.CommentInput
            placeholder="해당 게시판의 성격과 다른 글은
          사전동의 없이 담당 게시판으로 이동될 수 있습니다."
            type="text"
            {...props.register("contents")}
          />

          <PC.CommentForm onSubmit={props.handleSubmit(props.onClickSubmit)}>
            <div>/100</div>
            <ProductClickButton name="등록하기" />
          </PC.CommentForm>
        </PC.WrapperComment>
        <div>
          {props.data?.fetchUseditemQuestions.map((el: IUseditemQuestion) => (
            <PC.CommentQna key={uuidv4()}>
              <ProductCommentItem
                el={el}
                data={props.data}
                onClickDelete={props.onClickDelete}
              />
              <div style={{ marginLeft: "50px" }}>
                <PC.MoreStyle onClick={props.onClickOpen(el._id)}>
                  댓글 더보기...
                </PC.MoreStyle>
                <CommentAnswerItem
                  el={el}
                  isOpenComment={props.isOpenComment}
                />
              </div>
            </PC.CommentQna>
          ))}
        </div>
      </PC.WrapperBox>
    </PC.Wrapper>
  );
}
