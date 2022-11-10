import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 32px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HeaderActions = styled.div`
    display: flex;
    align-items: center;
`

export const LocationInfo = styled.div`
    height: 38px;
    padding: 8px;
    border: none;
    border-radius: 6px;
    background-color: ${ props => props.theme["purple-light"] };
    color: ${ props => props.theme["purple-dark"] };
    display: flex;
    align-items: center;
    gap: 4px;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    svg{
        width: 22px;
        height: 22px;
        color: ${ props => props.theme.purple };
    }
`