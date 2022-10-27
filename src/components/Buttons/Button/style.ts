import { Slot } from "@radix-ui/react-slot";
import styled from "styled-components";
import { css } from 'styled-components';

interface ButtonBaseProps {
    fullWidth?: boolean
    isSelected?: boolean
}

const ButtonBase = css<ButtonBaseProps>`
    width: ${ props => props.fullWidth ? "100%" : "auto" };
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 12px;
    align-items: center;
    padding: 16px;
    background-color: ${ props => props.theme["base-button"] };
    border: 1px solid ${ props => props.theme["base-button"] };
    border-radius: 6px;
    transition: 200ms;

    &:hover{
        background-color: ${ props => props.theme["base-hover"] }; 
    }

    ${ props => props.isSelected && css`
        border-color: ${ props.theme.purple };
        background-color: ${ props => props.theme["purple-light"] }; 

        &:hover{
            background-color: ${ props => props.theme["purple-light"] };
        }
    ` }
`

export const ButtonDefault = styled.button`${ ButtonBase }`

export const ButtonSlot = styled(Slot)`${ ButtonBase }`

export const Text = styled.p`
    font-size: 12px;
    text-transform: uppercase;
    color: ${ props => props.theme["base-subtitle"] };
    font-weight: 400;
`
export const Icon = styled(Slot)`
    width: 16px;
    height: 16px;
    color: ${ props => props.theme.purple };
`