import { HTMLAttributes, HTMLInputTypeAttribute, useState, } from "react"
import { InputBase } from "./style"

interface InputProps extends HTMLAttributes<HTMLInputElement>{
    optional?: boolean
    type?: HTMLInputTypeAttribute
}

export const Input: React.FC<InputProps> = ({ onBlur, onFocus, onChange, optional, ...props }) => {

    const [isFilled, setIsFilled] = useState<boolean>(false)
    const [isFocus, setIsFocus] = useState<boolean>(false)

    return (
        <InputBase
            isFilled={ isFilled }
            isFocus={ isFocus }
        >
            <input 
                {...props }
                onBlur={(event) => {
                    setIsFocus(false)
                    if(onBlur){
                        onBlur(event)
                    }
                }}
                onFocus={(event) => {
                    setIsFocus(true)
                    if(onFocus){
                        onFocus(event)
                    }
                }}
                onChange={(event) => {
                    setIsFilled(!!event.target.value)
                    if(onChange){
                        onChange(event)
                    }
                }}
            />
            { optional && ( <span>Opcional</span> )}
        </InputBase>
    )
}