import styled from 'styled-components'

interface RemoveButtonBaseProps{
    fullWidth?: boolean
}

export const RemoveButtonBase = styled.button<RemoveButtonBaseProps>`
    width: ${ props => props.fullWidth ? "100%" : "auto" };
    height: auto;
    min-height: 32px;
    padding: 0px 8px;
    display: flex;
    flex-direction: row;
    gap: 4px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 6px;
    background-color: ${ props => props.theme['base-button'] };
    color: ${ props => props.theme['base-text'] };
    font-weight: 400;
    /* line-height: 160%; */
    font-size: 12px;
    transition: 200ms;

    svg{
        width: 16px;
        height: 16px;
        color: ${ props => props.theme.purple };
    }

    &:hover{
        background-color: ${ props => props.theme['base-hover'] };
        color: ${ props => props.theme['base-subtitle'] };

        svg{
            color: ${ props => props.theme['purple-dark'] };
        }
    }
`