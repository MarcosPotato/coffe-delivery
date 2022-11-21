import { useState, useEffect, useImperativeHandle, forwardRef } from "react"

import { Plus, Minus } from 'phosphor-react'
import { Container } from "./style"

export interface SelectQuantityRef{
    reset: () => void
}

interface SelectQuantityProps{
    startQuantity?: number
    minValue?: number
    onChange: (value: number, event?: "increase" | "decrease") => void
}

const SelectQuantity: React.ForwardRefRenderFunction<
    SelectQuantityRef, 
    SelectQuantityProps
> = ({ 
    onChange, 
    startQuantity, 
    minValue = 0
}, ref) => {

    const [quantity, setQuantity] = useState<number>(startQuantity || 0)

    const addQuantity = () => {
        let value = quantity + 1
        
        setQuantity(value)
        onChange(value, "increase")
    }

    const removeQuantity = () => {
        let value = quantity > minValue ? quantity - 1 : quantity
        
        setQuantity(value)
        onChange(value, "decrease")
    }

    useImperativeHandle(ref, () => ({
        reset: () => setQuantity(0)
    }))

    return(
        <Container>
            <Minus weight="bold" onClick={ removeQuantity }/>
            { quantity }
            <Plus weight="bold" onClick={ addQuantity }/>
        </Container>
    )
}

export default forwardRef(SelectQuantity)