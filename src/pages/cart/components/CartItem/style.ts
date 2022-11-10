import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    padding: 24px 0px;
    border-bottom: 1px solid ${ props => props.theme["base-button"] };

    img{
        width: 64px;
        object-fit: contain;
    }

    > div{
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        
        p{
            width: 100%;
        }
    }
`