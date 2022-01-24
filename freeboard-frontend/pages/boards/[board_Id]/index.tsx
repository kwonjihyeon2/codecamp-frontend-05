import FreeBoardDetail from "../../../src/components/units/boards/detail/BoardDetail.container"
import FreeBoardComments from "../../../src/components/units/boards/comments/BoardComment.container"
import FreeBoardCommentsList from "../../../src/components/units/boards/comentsList/BoardCommentList.container"


export default function BoardDetailPage(){


    return(
        <div>
            <FreeBoardDetail />
            <FreeBoardComments />
            <FreeBoardCommentsList />
        </div>
    )
}