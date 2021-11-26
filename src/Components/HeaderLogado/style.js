import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    align-items: center;
`;
export const Icone = styled.div`
    margin-top: 2px;
`;

export const SpanHub = styled.span`
    background-color: #403CAA;
    color:  #FFFFFF;
    padding: 4px;
    margin-left: 5px;

`;

export const DivSair = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    div:first-child{
            margin-right: 10px;
    }
    @media (min-width: 400px){
        div:first-child{
            margin-right: 30px;
        }
    }

`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 10px 25px;
`;

export const Carrinho = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    span{
        margin-left: 10px;
    }
`;