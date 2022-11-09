import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 18px;
    margin-bottom: 160px;

    @media (max-width: 1100px){
        > h1{
            text-align: center;
        }
    }
`

export const List = styled.div`
    width: 100%;
    margin-top: 34px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    row-gap: 32px;
    gap: 32px;
    
    > div{
        justify-self: center;
    }
`