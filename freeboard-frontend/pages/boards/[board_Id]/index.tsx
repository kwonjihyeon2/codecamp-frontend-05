import FreeBoardDetail from "../../../src/components/units/boards/detail/BoardDetail.container";
import FreeBoardComments from "../../../src/components/units/boards/comments/BoardComment.container";
import EditBoardCommentList from "../../../src/components/units/boards/EditComments/EditDeleteComment.container";

export default function BoardDetailPage() {
  return (
    <div>
      <FreeBoardDetail />
      <FreeBoardComments />
      <EditBoardCommentList />
    </div>
  );
}
