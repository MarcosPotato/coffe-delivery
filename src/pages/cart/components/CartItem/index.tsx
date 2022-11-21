import { Container } from "./style"

import { Coffee } from "../../../../@types/coffee"
import { formatValue } from "../../../../utils/formatValue"

import { RemoveButton } from "../../../../components/Buttons/RemoveButton"
import { Text } from "../../../../components/Text"
import SelectQuantity from "../../../../components/SelectQuantity"
import { CartProduct } from "../../../../@types/cart"
import { useCart } from "../../../../hooks/useCart"

interface CartItemProps{
    coffeeItem: CartProduct
}

export const CartItem: React.FC<CartItemProps> = ({ coffeeItem }) => {

    const { removeOnChart, increaseQuantity, decreaseQuantity } = useCart()

    const handleQuantity = (value: number, type?: "increase" | "decrease") => {
        if(value < 1){
            return
        }

        if(type === "increase"){
            increaseQuantity(coffeeItem.id)
        }

        if(type === "decrease"){
            decreaseQuantity(coffeeItem.id)
        }
    }

    return (
        <Container>
            <img src={ coffeeItem.image } alt="traditional-express" />
            <div>
                <Text size="large" type="subtitle">
                    { coffeeItem.name }
                </Text>
                <SelectQuantity 
                    startQuantity={ coffeeItem.quantity }
                    minValue={ 1 }
                    onChange={ handleQuantity }
                />
                <RemoveButton type="button" onClick={() => removeOnChart(coffeeItem.id)}>
                    Remover
                </RemoveButton>
            </div>
            <Text size="large" weight="bold">R$ { formatValue(coffeeItem.price) }</Text>
        </Container>
    )
}