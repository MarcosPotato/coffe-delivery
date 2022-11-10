import styled from 'styled-components'
import { css } from 'styled-components'
import { Slot } from '@radix-ui/react-slot'

interface SubmitButtonBaseProps{
    fullWidth?: boolean
}

const SubmitButtonBase = css<SubmitButtonBaseProps>`
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

    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    text-transform: uppercase;

    &:hover{
        background-color: ${ props => props.theme['yellow-dark'] };
    }
`

export const SubmitButtonDefault = styled.button`${ SubmitButtonBase }`

export const SubmitButtonSlot = styled(Slot)`${ SubmitButtonBase }`