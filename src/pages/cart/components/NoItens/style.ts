import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;

    svg{
        width: 200px;
        height: 200px;
        margin-bottom: 32px;
        color: ${props => props.theme["yellow-dark"]};
    }
`