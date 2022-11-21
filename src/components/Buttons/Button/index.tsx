import { ReactNode } from "react"
import { IconProps } from "phosphor-react"

import { ButtonDefault, ButtonSlot, Icon, Text } from './style'

interface DefualtProps{
    children?: ReactNode
}

interface ButtonIconProps{
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
    svgProps?: IconProps
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    isSelected?: boolean
    asChild?: boolean
    type?: "submit" | "button"
}

const ButtonRoot: React.FC<ButtonProps> = ({ children, isSelected, asChild, ...props }) => {
    const Comp = asChild ? ButtonSlot : ButtonDefault
    return (
        <Comp { ...props } isSelected={ isSelected }>
            { children }
        </Comp>
    )
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ icon: SVGIcon, svgProps }) => {
    return (
        <Icon>
            <SVGIcon {...svgProps}/>
        </Icon>
    )
}

const ButtonText: React.FC<DefualtProps> = ({ children }) => {
    return (
        <Text>
            { children }
        </Text>
    )
}

ButtonRoot.displayName = "Button.Root"
ButtonIcon.displayName = "Button.Icon"
ButtonText.displayName = "Button.Text"

export const Button = {
    Root: ButtonRoot,
    Icon: ButtonIcon,
    Text: ButtonText
}