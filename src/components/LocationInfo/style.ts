import styled from "styled-components";
import { overlayShow } from "../../styles/animations";

import * as Dialog from '@radix-ui/react-dialog';

export const LocationButton = styled.button`
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
    transition: 200ms;

    svg{
        width: 22px;
        height: 22px;
        color: ${ props => props.theme.purple };
    }

    &:hover{
        background-color: #dac9ff;
    }
`

export const Overlay = styled(Dialog.Overlay)`
    background-color: #4242422f;
    position: fixed;
    inset: 0;
    animation: ${ overlayShow } 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

export const Content = styled(Dialog.Content)`
    background-color: white;
    border-radius: 6px;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 450px;
    max-height: 85vh;
    padding: 25px;
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

    &:focus {
        outline: none;
    }
`

export const DialogForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 18px;

    .cep{
        flex: 1;
    }

    .number{
        width: 100px;
    }

    > div{
        display: flex;
        flex-direction: row;
        gap: 12px;
        justify-content: flex-end;
    }
`