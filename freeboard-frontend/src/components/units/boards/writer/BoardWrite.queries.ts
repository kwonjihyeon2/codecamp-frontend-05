import { gql } from '@apollo/client'

export const CREATE_NEWBOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
            writer
            title
            contents
            images
        }
    }
`

export const UPDATE_BOARD = gql`
    mutation updateBoard($updateBoardInput : UpdateBoardInput!, $password : String, $boardId:ID!){
        updateBoard(updateBoardInput:$updateBoardInput, password : $password, boardId: $boardId ){
            _id
            writer
            title
            contents
        }
    }
`