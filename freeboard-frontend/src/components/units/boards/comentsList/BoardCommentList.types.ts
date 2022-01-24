import { ChangeEvent } from 'react'


export interface IBoardCommentProps {
    isEdit : boolean
    data ?: any
}


export interface IActive {
    isActive : boolean
}

export interface IPropsEditComment{
    el ?: any
    data ?: any
    DeleteCommentBtn : any
    onChangeMywriter : (event : ChangeEvent<HTMLInputElement>) => void
    onChangePassword : (event : ChangeEvent<HTMLInputElement>) => void
    onChangeContents : (event : ChangeEvent<HTMLTextAreaElement>) => void
    isActive : boolean
    length : Number
    EditComment :any
    UpdateComment : any
    isEdit : boolean
    EditId : any
    StarValue:any
}

export interface IPropsCommentList{
    el ?: any
    data ?: any
    DeleteCommentBtn ?: any
    UpdateComment ?: any
    isEdit ?: boolean
}

// export interface IPropsEditpage{
//     el ?: any
//     data ?: any
//     onChangePassword : (event : ChangeEvent<HTMLInputElement>) => void
//     onChangeContents : (event : ChangeEvent<HTMLTextAreaElement>) => void
//     setIsEdit: boolean
//     UpdateComment : any
//     isEdit : boolean
//     EditId : any
// }