import styled from "styled-components";
import { css } from "styled-components"

interface InputBaseProps{
    fullWidth?: boolean
    isFilled?: boolean
    isFocus?: boolean
    hasError?: boolean
}

export const InputBase = styled.label<InputBaseProps>`
    width: ${ props => props.fullWidth ? "100%" : "434px" };
    padding: 12px;
    background-color: ${ props => props.theme["base-button"] };
    border-radius: 4px;
    border: 1px solid ${ props => props.theme["base-button"] };
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    border-radius: 4px; 
    transition: 200ms;
    position: relative;

    input{
        width: 100%;
        border: none;
        background-color: #ffffff00;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        outline: none; 
        color: ${props => props.isFocus ? props.theme["yellow-dark"] : props.theme["base-text"]};

        &::placeholder{
            color: ${props => props.theme["base-label"]};
        }
    }

    span{
        font-style: italic;
        font-weight: 400;
        font-size: 12px;
        line-height: 130%;
        color: ${ props => props.theme["base-label"] };
    }

    ${ props => props.hasError && css`
        border-color: #c53030;
    `}

    ${ props => (props.isFocus || props.isFilled) && css`
        border-color: ${ props.theme["yellow-dark"] };
    `}
`

export const ErrorMessage = styled.p`
    font-style: italic;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    color: #c53030;
    position: absolute;
    bottom: -12px;
    left: 0px;
`