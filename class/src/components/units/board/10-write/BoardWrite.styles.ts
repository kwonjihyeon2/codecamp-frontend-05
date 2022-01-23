import styled from '@emotion/styled';
import { IButtonProps } from './BoardWrite.types';

export const MyInput = styled.input`
`

export const MyButton = styled.button`
    background-color : ${(props: IButtonProps) => props.ggg === true ? "yellow" : "none"};
`