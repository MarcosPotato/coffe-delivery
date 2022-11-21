export interface CartProduct{
    id: string
    image: string
    name: string
    quantity: number
    price: number
}

export interface CartProductContextParams{
    cart: CartProduct[]
    clearCart: () => void
    addOnCart: (product: CartProduct) => void
    removeOnChart: (productId: string) => void
    increaseQuantity: (productId: string) => void
    decreaseQuantity: (productId: string) => void
}