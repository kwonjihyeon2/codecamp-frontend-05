import styled from "@emotion/styled";

export const CommonInput = styled.input`
    margin : 5px 0;
`

export const ChangeBtn = styled.button`
    background-color : ${(props)=> props.isActive === true ? "#ffd600" : "#c9c9c9"};
    color : ${(props) => props.isActive === true ? "#000" : "#bdbdbd"};
    border : none;
`