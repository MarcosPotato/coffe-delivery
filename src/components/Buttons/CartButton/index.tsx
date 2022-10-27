import { ShoppingCartSimple } from "phosphor-react"
import { ButtonHTMLAttributes } from "react"
import { AddCartButtonBase, ShowCartButton } from "./style"

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    action: "show" | "add"
    totalItens?: number
}

export const CartButton: React.FC<CartButtonProps> = ({ action, totalItens, ...props }) => {
    return (
        <>
            { action === "show" ? (
                <ShowCartButton {...props} total={ totalItens }>
                   <ShoppingCartSimple weight="fill"/> 
                </ShowCartButton>
            ): (
                <AddCartButtonBase {...props}>
                    <ShoppingCartSimple weight="fill"/>
                </AddCartButtonBase>
            )}
        </>
    )
}