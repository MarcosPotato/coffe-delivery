import { ButtonHTMLAttributes, ReactNode } from "react"
import { SubmitButtonBase } from "./style"

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    fullWidth?: boolean
    children: ReactNode
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ children, ...props }) => {
    return (
        <SubmitButtonBase {...props}>
            { children }
        </SubmitButtonBase>
    )
}