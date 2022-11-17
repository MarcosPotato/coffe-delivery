import { createContext, ReactNode, useState, useCallback } from "react";
import produce from 'immer'

import { CartProduct, CartProductContextParams } from "../@types/cart";

interface CartProviderProps{
    children: ReactNode
}

export const CartContext = createContext({} as CartProductContextParams)

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {

    const [cart, setCart] = useState<CartProduct[]>(() => {
        const currentCart = localStorage.getItem("@coffeedelivery:cart")

        if(!currentCart){
            return []
        }

        return JSON.parse(currentCart)
    })

    const addOnCart = useCallback((product: CartProduct) => {
        setCart(produce(draft => {
            const existProduct = draft.findIndex(productCart => productCart.id === product.id)
            
            if(existProduct < 0){
                draft.push(product)
            } else{
                draft[existProduct] = {
                    ...draft[existProduct],
                    quantity: draft[existProduct].quantity + product.quantity
                }
            }

            localStorage.setItem("@coffeedelivery:cart", JSON.stringify(draft))
        }))
    },[])

    const removeOnChart = useCallback((productId: string) => {
        setCart(prev => {
            const newProducts = prev.filter(productCart => productCart.id !== productId)
            localStorage.setItem("@coffeedelivery:cart", JSON.stringify(newProducts))

            return newProducts
        })
    },[])

    const increaseQuantity = useCallback((productId: string) => {
        setCart(produce(draft => {
            const existProduct = draft.findIndex(productCart => productCart.id === productId)
            
            if(existProduct >= 0){
                draft[existProduct] = {
                    ...draft[existProduct],
                    quantity: draft[existProduct].quantity + 1 
                }

                localStorage.setItem("@coffeedelivery:cart", JSON.stringify(draft))
            }
        }))
    },[])

    const decreaseQuantity = useCallback((productId: string) =>{
        setCart(produce(draft => {
            const existProduct = draft.findIndex(productCart => productCart.id === productId)
            
            if(existProduct >= 0){
                draft[existProduct] = {
                    ...draft[existProduct],
                    quantity: draft[existProduct].quantity > 1 ? draft[existProduct].quantity - 1 : 1
                }

                localStorage.setItem("@coffeedelivery:cart", JSON.stringify(draft))
            }
        }))
    },[])

    return (
        <CartContext.Provider value={{ cart, addOnCart, decreaseQuantity, increaseQuantity, removeOnChart }}>
            { children }
        </CartContext.Provider>
    )
}