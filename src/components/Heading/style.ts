import styled from 'styled-components'
import { css } from 'styled-components'
import { Slot } from '@radix-ui/react-slot'

import { HeadingSizes, HeadingWeights } from '.'

interface HeadingProps {
    size?: HeadingSizes
    weight?: HeadingWeights
}

const fontSizes = {
    small: "1.2rem",
    medium: "1.3rem",
    large: "2.1rem",
    xl: "3.2rem"
}

const fontWeigths = {
    bold: 700,
    extraBold: 800
}

const HeadingBase = css<HeadingProps>`
    font-weight: ${props => fontWeigths[props.weight || "bold"] };
    font-family: 'Baloo 2', cursive;
    color: ${ props => props.theme['base-title'] };
    font-size: ${ props => fontSizes[props.size || "medium"] };
`

export const HeadingDefault = styled.h1`${ HeadingBase }`

export const HeadingSlot = styled(Slot)`${ HeadingBase }`