import { useState, useEffect, useImperativeHandle, forwardRef } from "react"

import { Plus, Minus } from 'phosphor-react'
import { Container } from "./style"

export interface SelectQuantityRef{
    reset: () => void
}

interface SelectQuantityProps{
    onChange: (value: number) => void
}

const SelectQuantity: React.ForwardRefRenderFunction<
    SelectQuantityRef, 
    SelectQuantityProps
> = ({ onChange }, ref) => {

    const [quantity, setQuantity] = useState<number>(0)

    const addQuantity = () => {
        setQuantity(prev => prev + 1)
    }

    const removeQuantity = () => {
        setQuantity(prev => prev > 0 ? prev - 1 : prev)
    }

    useEffect(() => {
        onChange(quantity)
    },[quantity])

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