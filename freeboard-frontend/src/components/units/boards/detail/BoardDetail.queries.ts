import { gql } from '@apollo/client'


export const FETCH_BOARD = gql`
    query fetchBoard($boardId : ID!){
        fetchBoard(boardId : $boardId){
            _id
            writer
            title
            contents
            youtubeUrl
        }
    }
`

export const FETCH_DELETE_BOARD = gql`
    mutation deleteBoard($boardId : ID!){
        deleteBoard(boardId : $boardId)
    }
`
