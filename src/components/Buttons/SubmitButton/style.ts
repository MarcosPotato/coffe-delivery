import styled from 'styled-components'

interface SubmitButtonBaseProps{
    fullWidth?: boolean
}

export const SubmitButtonBase = styled.button<SubmitButtonBaseProps>`
    width: ${ props => props.fullWidth ? "100%" : "auto" };
    height: auto;
    min-height: 46px;
    min-width: 130px;
    padding: 12px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 6px;
    background-color: ${ props => props.theme['yellow'] };
    color: ${ props => props.theme.white };
    font-weight: 700;
    line-height: 160%;
    font-size: 14px;
    transition: 200ms;

    &:hover{
        background-color: ${ props => props.theme['yellow-dark'] };
    }
`