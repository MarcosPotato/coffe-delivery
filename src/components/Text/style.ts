import styled from 'styled-components'
import { css } from 'styled-components'
import { Slot } from '@radix-ui/react-slot'

import { TextSizes, TextTypes, TextWeights } from '.'
import { DefaultTheme } from '../../theme/defaultTheme'

interface TextProps {
    size?: TextSizes
    type?: TextTypes
    weight?: TextWeights
}

const fontSizes = {
    xs: "0.7rem",
    small: "0.8rem",
    medium: "0.9rem",
    large: "1.1rem",
    xl: "1.2rem" ,
    "2-xl": "1.3rem",
    "3-xl": "1.6rem"
}

const fontWeigths = {
    regular: 400,
    bold: 700
}

const colorByType = {
    subtitle: DefaultTheme['base-subtitle'],
    text: DefaultTheme['base-text'],
    label: DefaultTheme['base-label']
}

const TextBase = css<TextProps>`
    font-weight: ${props => fontWeigths[props.weight || "regular"] };
    color: ${ props => colorByType[props.type || "text"] };
    font-size: ${ props => fontSizes[props.size || "medium"] };
`

export const TextDefault = styled.p`${ TextBase }`

export const TextSlot = styled(Slot)`${ TextBase }`