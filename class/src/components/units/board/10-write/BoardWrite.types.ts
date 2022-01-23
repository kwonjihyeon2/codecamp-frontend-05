//props처럼 공통적으로 타입을 각 파일에 써주었다면 공통 파일을 만들어서 export해주면 됨

import { ChangeEvent } from 'react'

export interface IBoardWriteProps {
    isEdit : boolean
    data ?: any
}


export interface IBoardWriteUIProps {
    bbb : string
    ccc : ()=> void
    xxx : ()=> void
    ddd : (event : ChangeEvent<HTMLInputElement>) => void
    eee : (event : ChangeEvent<HTMLInputElement>) => void
    fff : (event : ChangeEvent<HTMLInputElement>) => void
    isActive : boolean
    isEdit : boolean
    data : any
}

export interface IButtonProps {
    ggg : boolean
}