import { Trash } from "phosphor-react"
import { ButtonHTMLAttributes, ReactNode } from "react"
import { RemoveButtonBase } from "./style"

interface RemoveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    fullWidth?: boolean
    children: ReactNode
}

export const RemoveButton: React.FC<RemoveButtonProps> = ({ children, ...props }) => {
    return (
        <RemoveButtonBase {...props}>
            <Trash />
            { children }
        </RemoveButtonBase>
    )
}