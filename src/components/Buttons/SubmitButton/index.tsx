import { ButtonHTMLAttributes, ReactNode } from "react"
import { SubmitButtonDefault, SubmitButtonSlot } from "./style"

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    fullWidth?: boolean
    asChild?: boolean
    loading?: boolean
    children: ReactNode
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ children, asChild, loading, ...props }) => {
    const Comp = asChild ? SubmitButtonSlot : SubmitButtonDefault

    return (
        <Comp {...props} disabled={ loading }>
            { loading ? "Aguarde..." : children }
        </Comp>
    )
}