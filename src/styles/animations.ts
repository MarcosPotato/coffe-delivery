import { keyframes } from "styled-components"

export const fade = keyframes`
    from{
        opacity: 0;
        transform: scale(0.9);
    } to {
        opacity: 1;
        transform: scale(1);
    }
`

export const overlayShow = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const contentShow = keyframes`
    from {
        opacity: 0;
        transform: translate(-50%, -48%) scale(0.96);
    }
    to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
`