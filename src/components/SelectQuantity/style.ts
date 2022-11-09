import styled from 'styled-components'

export const Container = styled.div`
    width: min-content;
    border-radius: 6px;
    padding: 10px 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 6px;
    background-color: ${ props => props.theme['base-button'] };
    color: ${ props => props.theme['base-title'] };
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    svg{
        width: 14px;
        height: 14px;
        color: ${ props => props.theme.purple };

        &:hover{
            cursor: pointer;
            color: ${ props => props.theme['purple-dark'] };
        }
    }
`