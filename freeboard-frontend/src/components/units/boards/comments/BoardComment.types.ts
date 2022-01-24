import { ChangeEvent } from 'react'


export interface IBoardCommentProps {
    isEdit : boolean
    data ?: any
}


export interface IActive {
    isActive : boolean
}

export interface IPropsComment{
    data : any
    onChangeMywriter : (event : ChangeEvent<HTMLInputElement>) => void
    onChangePassword : (event : ChangeEvent<HTMLInputElement>) => void
    onChangeContents : (event : ChangeEvent<HTMLTextAreaElement>) => void
    isActive : boolean
    CreateComment : () => void
    length : Number
    handelChange : any
    StarValue : any
}

export interface IPropsCommentList{
    el ?: any
    data ?: any
    DeleteCommentBtn ?: any
    UpdateComment ?: any
    isEdit ?: boolean
}


export interface IPropsCommentEdit{
    el ?: any
    data ?: any
    // DeleteCommentBtn : any
    // onChangeMywriter : (event : ChangeEvent<HTMLInputElement>) => void
    // onChangePassword : (event : ChangeEvent<HTMLInputElement>) => void
    // onChangeContents : (event : ChangeEvent<HTMLTextAreaElement>) => void
    // isActive : boolean
    // CreateComment : () => void
    // length : Number
    UpdateComment ?: any
    isEdit ?: boolean
    EditId ?: any
}