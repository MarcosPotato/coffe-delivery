import { ReactNode } from "react"
import { HeadingSlot, HeadingDefault } from "./style"

export type HeadingSizes = "small" | "medium" | "large"| "xl"
export type HeadingWeights = "bold" | "extraBold"

interface HeadingProps{
    size?: HeadingSizes
    weight?: HeadingWeights
    asChild?: boolean
    children: ReactNode
}

export const Heading: React.FC<HeadingProps> = ({ asChild, children, ...props }) => {
    const Comp = asChild ? HeadingSlot : HeadingDefault

    return (
        <Comp {...props}>
            { children }
        </Comp>
    )
}