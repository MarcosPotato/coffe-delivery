import { forwardRef, HTMLAttributes, HTMLInputTypeAttribute, useState, } from "react"
import { FieldError } from "react-hook-form"
import { ErrorMessage, InputBase } from "./style"

interface InputProps extends HTMLAttributes<HTMLInputElement>{
    fullWidth?: boolean
    optional?: boolean
    type?: HTMLInputTypeAttribute
    error?: FieldError
    value?: string
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement,InputProps> = ({ 
    onBlur, 
    onFocus, 
    onChange, 
    optional, 
    fullWidth,
    className,
    error,
    ...props 
}, ref) => {

    const [isFilled, setIsFilled] = useState<boolean>(false)
    const [isFocus, setIsFocus] = useState<boolean>(false)

    return (
        <InputBase
            className={className}
            isFilled={ isFilled }
            isFocus={ isFocus }
            fullWidth={ fullWidth }
            hasError={ !!error?.message  }
        >
            <input 
                ref={ ref }
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
            { !!error?.message && (
                <ErrorMessage>{ error.message }</ErrorMessage>
            )}
        </InputBase>
    )
}

export default forwardRef(Input)