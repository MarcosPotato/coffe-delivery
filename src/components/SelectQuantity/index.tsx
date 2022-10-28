import { useState } from "react"

import { Plus, Minus } from 'phosphor-react'
import { Container } from "./style"

export const SelectQuantity: React.FC = () => {

    const [quantity, setQuantity] = useState<number>(0)

    const addQuantity = () => {
        setQuantity(prev => prev + 1)
    }

    const removeQuantity = () => {
        setQuantity(prev => prev > 0 ? prev - 1 : prev)
    }

    return(
        <Container>
            <Minus weight="bold" onClick={ removeQuantity }/>
            { quantity }
            <Plus weight="bold" onClick={ addQuantity }/>
        </Container>
    )
}