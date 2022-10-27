import styled from 'styled-components'
import { css } from 'styled-components'

interface ShowCartButtonProps{
    total?: number
}

const CartButtonBase = styled.button`
    position: relative;
    width: 38px;
    height: 38px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 6px;
    transition: 200ms;

    svg{
        width: 22px;
        height: 22px;
    }

`

export const AddCartButtonBase = styled(CartButtonBase)`
    background-color: ${ props => props.theme['purple-dark'] };
    
    svg{
        color: ${ props => props.theme.white };
    }

    &:hover{
        background-color: ${ props => props.theme.purple };
    }
`

export const ShowCartButton = styled(CartButtonBase)<ShowCartButtonProps>`
    background-color: ${ props => props.theme['yellow-light'] };
    
    svg{
        color: ${ props => props.theme['yellow-dark'] };
    }

    ${ props => props.total && css`
        &::before{
            content: "${ props.total }";
            width: 20px;
            height: 20px;
            background-color: ${ props.theme['yellow-dark'] };
            font-size: 12px;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${ props.theme.white };
            position: absolute;
            top: -8px;
            right: -8px;
        }
    ` }
`