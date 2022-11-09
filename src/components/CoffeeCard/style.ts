import styled from "styled-components";

export const Container = styled.div`
    width: 256px;
    padding: 20px;
    margin-top: 20px;
    border-radius: 6px 36px 6px 36px;
    background-color: ${ props => props.theme["base-card"] };
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img{
        margin-top: -40px;
        width: 120px;
        margin-bottom: 12px;
    }

    > span{
        padding: 8px 4px;
        background-color: ${ props => props.theme["yellow-light"] };
        margin-bottom: 16px;

        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 130%;
        text-transform: uppercase;
        color: ${ props => props.theme["yellow-dark"] };
    }
`

export const CardActions = styled.div`
    width: 100%;
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Price = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 6px;

    span{
        padding-bottom: 8px;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        color: ${ props => props.theme["base-text"] };
    }

    p{
        font-family: 'Baloo 2', sans-serif !important;
    }
`