import { Modal } from "antd";
import EditCommentItem from "./EditCommentItem";
import { IPropsEdit } from "./EditDeleteComment.types";
import InfiniteScroll from "react-infinite-scroller";
import styled from "@emotion/styled/";

const StyleComment = styled.div`
  height: 300px;
  overflow: auto;
`;

export default function EditBoardCommentListUI(props: IPropsEdit) {
  return (
    <div>
      {props.isModalVisible && (
        <Modal
          title="댓글 삭제 확인"
          visible={true}
          onOk={props.DeleteCommentBtn}
          onCancel={props.ToggleSetting}
        >
          <p>댓글을 삭제하시려면 비밀번호를 입력하세요.</p>
          <input type="password" onChange={props.ModalPasswordEvent} />
        </Modal>
      )}
      <StyleComment>
        {props.data?.fetchBoardComments && (
          <InfiniteScroll
            pageStart={0}
            loadMore={props.LoadComment}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchBoardComments.map((el: any) => (
              <EditCommentItem
                key={el._id}
                el={el}
                data={props.data}
                ToggleOpen={props.ToggleOpen}
                isModalVisible={props.isModalVisible}
              />
            ))}
          </InfiniteScroll>
        )}
      </StyleComment>
    </div>
  );
}
