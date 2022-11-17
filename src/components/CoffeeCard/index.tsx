import { useCallback, useRef, useState } from "react"
import { Coffee } from "../../@types/coffee"

import { useCart } from "../../hooks/useCart"

import { formatValue } from "../../utils/formatValue"

import { Heading } from "../Heading"
import { Text } from "../Text"
import SelectQuantity, { SelectQuantityRef } from "../SelectQuantity"
import { CartButton } from "../Buttons/CartButton"

import { CardActions, Container, Markers, Price } from "./style"

interface CoffeeCardProps{
    coffeeInfo: Coffee
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffeeInfo }) => {

    const { addOnCart } = useCart()

    const selectQuantityRef = useRef<SelectQuantityRef>(null)

    const [coffeeAmount, setCoffeeAmount] = useState<number>(0)

    const handleCoffeAmount = useCallback((quantity: number) => {
        setCoffeeAmount(quantity)
    },[coffeeInfo])

    const handleAddCart = (item: Coffee) => {
        if(coffeeAmount <= 0){
            console.log("não da pra adicionar zero")
            return
        }

        addOnCart({
            ...item,
            quantity: coffeeAmount
        })

        selectQuantityRef.current?.reset()
    }

    return(
        <Container>
            <img src={ coffeeInfo.image } alt={ coffeeInfo.name } />

            <Markers>
                { coffeeInfo.markers.map(marker => (
                    <span key={ marker }>{ marker }</span>
                )) }
            </Markers>

            <Heading size="medium">
                { coffeeInfo.name }
            </Heading>
            <Text size="medium" type="label">
                { coffeeInfo.description }
            </Text>

            <CardActions>
                <Price>
                    <span>R$</span>
                    <Text size="3-xl">{ formatValue(coffeeInfo.price) }</Text>
                </Price>
                <SelectQuantity 
                    ref={ selectQuantityRef }
                    onChange={ handleCoffeAmount } 
                />
                <CartButton action="add" onClick={ () => handleAddCart(coffeeInfo) }/>
            </CardActions>
        </Container>
    )
}