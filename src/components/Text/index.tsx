import { ReactNode } from "react"
import { TextSlot, TextDefault } from "./style"

export type TextSizes = "xs" | "small" | "medium" | "large" | "xl" | "2-xl" | "3-xl"
export type TextTypes = "subtitle" | "text" | "label"
export type TextWeights = "regular" | "bold"

interface TextProps{
    size?: TextSizes
    weight?: TextWeights    
    type?: TextTypes
    asChild?: boolean
    children: ReactNode
}

export const Text: React.FC<TextProps> = ({ asChild, children, ...props }) => {
    const Comp = asChild ? TextSlot : TextDefault

    return (
        <Comp {...props}>
            { children }
        </Comp>
    )
}