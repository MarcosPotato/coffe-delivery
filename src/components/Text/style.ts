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
    xs: "10px",
    small: "12px",
    medium: "14px",
    large: "16px",
    xl: "18px" ,
    "2-xl": "20px",
    "3-xl": "24px"
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