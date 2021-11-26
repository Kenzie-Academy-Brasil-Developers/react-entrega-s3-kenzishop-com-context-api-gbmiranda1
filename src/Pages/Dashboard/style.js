import styled from "styled-components";

export const CardProduct = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 200px;
    height: 37  0px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 10px ;
    box-sizing: border-box;
    img{
        height: 150px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    div{
        margin: 10px;
    }

`;

export const HeaderCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

    h3{
        font-size: 14px;
        text-align: center;
        margin-bottom: 10px;
        border-top: 1px solid grey;
        width: 100%;
        padding: 10px 0 0 0;
    }
    span{
        color: green;
    }
    img{
        margin-bottom: 10px;
    }
`;