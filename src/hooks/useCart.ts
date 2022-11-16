import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () => {
    const context = useContext(CartContext)

    if(!context){
        throw new Error("The hook useCart must be used inside CartProvider")
    }

    return context
}