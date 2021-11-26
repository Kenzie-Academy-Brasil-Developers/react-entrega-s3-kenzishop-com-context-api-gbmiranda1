import styled from "styled-components";

export const Button = styled.button`
    background-color: ${props => props.color ? "#403CAA" : "#F5F5F5"};
    color:  ${props => props.color ? "#fff" : "#999999"};
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 0px;
    margin: 20px 0px 0px 0px;
    cursor: pointer;
`;