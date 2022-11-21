import styled from "styled-components";
import { fade } from "../../styles/animations";

export const Container = styled.div`
    width: 256px;
    padding: 20px;
    margin-top: 20px;
    border-radius: 6px 36px 6px 36px;
    background-color: ${ props => props.theme["base-card"] };
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    animation: ${ fade } 200ms;

    img{
        margin-top: -40px;
        width: 120px;
        margin-bottom: 12px;
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

export const Markers = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;

    span{
        padding: 4px 8px;
        background-color: ${ props => props.theme["yellow-light"] };
        margin-bottom: 16px;
        border-radius: 100px;

        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 130%;
        text-transform: uppercase;
        color: ${ props => props.theme["yellow-dark"] };
    }
`