import { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"

import { useCart } from "../../hooks/useCart"

import { formatValue } from "../../utils/formatValue"

import { Heading } from "../../components/Heading"
import { Text } from "../../components/Text"
import Input from "../../components/Input"
import { Button } from "../../components/Buttons/Button"
import { CartItem } from "./components/CartItem"
import { SubmitButton } from "../../components/Buttons/SubmitButton"
import { NoItens } from "./components/NoItens"

import { 
    AddressForm, 
    BaseFormHeader, 
    CartArea, 
    CartCheckout, 
    CartForm, 
    Container, 
    InfoFormContainer, 
    PaymentForm 
} from "./style"
import { useLocale } from "../../hooks/useLocale"

interface FormFields{
    cep: string
    street: string
    number: string
    complement: string
    neigbor: string
    city: string
    state: string
}

interface PaymentValues{
    itens: string
    delivery: string
    total: string
}

type PaymentOptions = "creditCard" | "debtCard" | "money" | null

const FormValidations = Yup.object().shape({
    cep: Yup.string().max(9, "Cep deve ter no máximo 9 numero").required("CEP obrigatório"),
    street: Yup.string().required("Rua obrigatória"),
    number: Yup.string().required("Número obrigatório"),
    complement: Yup.string().notRequired(),
    neigbor: Yup.string().required("Bairro obrigatório"),
    city: Yup.string().required("Cidade obrigatória"),
    state: Yup.string().max(2, "Digite apenas a sigla do estado").required("Obrigatório"),
})

export const Cart: React.FC = () => {

    const navigate = useNavigate()

    const { cart, clearCart } = useCart()
    const { location } = useLocale()

    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
        resolver: yupResolver(FormValidations),
        defaultValues: {
            cep: location.cep,
            city: location.city,
            neigbor: location.neigbor,
            number: location.number,
            state: location.state,
            street: location.street
        }
    })

    const [paymentOption, setPaymentOption] = useState<PaymentOptions>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const hasFormError = Object.keys(errors).some((key: string)=> !!errors[key as keyof FormFields]?.message )

    const onSubmitForm = async(data: FormFields) => {
        if(!paymentOption){
            toast.warning("Por favor selecione um método de pagamento")
            return
        }

        setIsLoading(true)

        const newRequest = {
            ...data,
            payment: paymentOption,
            products: cart.map(item => ({ 
                id: item.id,
                quantity: item.quantity
            }))
        }

        try {
            await fetch("/api/request", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRequest)
            })

            clearCart()
            toast.success("Pedido realizado!")
            navigate("/finished")
        } catch (error: any) {
            console.log(error)
            setIsLoading(false)
            toast.error("Falha ao criar pedido, por favor tente novamente")
        }
    }

    const handlePaymentOption = (option: PaymentOptions) => {
        setPaymentOption(prev => prev === option ? null : option)
    }

    const paymentValues = useMemo<PaymentValues>(() => {
        if(cart.length <= 0){
            return {} as PaymentValues
        }

        const itensValues = cart.reduce((accumulator, currentItem) => accumulator + (currentItem.price * currentItem.quantity), 0)
        const deliveryValue = 3.5

        return {
            itens: formatValue(itensValues),
            delivery: formatValue(deliveryValue),
            total: formatValue(itensValues + deliveryValue )   
        } as PaymentValues
    },[cart])

    useEffect(() => {
        if(hasFormError){
            toast.warning("Por favor preencha os dados corretamente")
        }
    },[hasFormError])

    if(cart.length <= 0) {
        return <NoItens />
    }

    return(
        <Container onSubmit={ handleSubmit(onSubmitForm) }>
            <InfoFormContainer>
                <Heading>Complete seu pedido</Heading>
                <AddressForm>
                    <BaseFormHeader>
                        <MapPinLine />
                        <div>
                            <Text type="subtitle" size="large">Endereço de Entrega</Text>
                            <Text>Informe o endereço onde deseja receber seu pedido</Text>
                        </div>
                    </BaseFormHeader>
                    <Input 
                        type="text"
                        className="cep"
                        placeholder="CEP"
                        fullWidth
                        error={ errors.cep }
                        { ...register("cep") }
                    />
                    <Input
                        className="street"
                        type="text"
                        placeholder="Rua"
                        fullWidth
                        error={ errors.street }
                        { ...register("street") }
                    />
                    <Input
                        className="number"
                        type="text"
                        placeholder="Número"
                        fullWidth
                        error={ errors.number }
                        { ...register("number") }
                    />
                    <Input
                        className="complement"
                        type="text"
                        placeholder="Complemento"
                        optional
                        fullWidth 
                        error={ errors.complement }
                        { ...register("complement") }
                    />
                    <Input
                        className="neigbor"
                        type="text"
                        placeholder="Bairro"
                        fullWidth
                        error={ errors.neigbor }
                        { ...register("neigbor") }
                    />
                    <Input
                        className="city"
                        type="text"
                        placeholder="Cidade"
                        fullWidth 
                        error={ errors.city }
                        { ...register("city") }
                    />
                    <Input
                        className="state"
                        type="text"
                        placeholder="UF"
                        fullWidth 
                        error={ errors.state }
                        maxLength="2"
                        { ...register("state") }
                    />
                </AddressForm>
                <PaymentForm>
                    <BaseFormHeader>
                        <CurrencyDollar />
                        <div>
                            <Text type="subtitle" size="large">Pagamento</Text>
                            <Text>O pagamento é feito na entrega. Escolha a forma que deseja pagar</Text>
                        </div>
                    </BaseFormHeader>
                    <section>
                        <Button.Root 
                            type="button"
                            isSelected={ paymentOption === "creditCard" }
                            onClick={() => handlePaymentOption("creditCard")}
                        >
                            <Button.Icon icon={ CreditCard } />
                            <Button.Text>
                                Cartão de Crédito
                            </Button.Text>
                        </Button.Root>
                        <Button.Root
                            type="button"
                            isSelected={ paymentOption === "debtCard" }
                            onClick={() => handlePaymentOption("debtCard")}
                        >
                            <Button.Icon icon={ Bank } />
                            <Button.Text>
                                Cartão de Débito
                            </Button.Text>
                        </Button.Root>
                        <Button.Root
                            type="button"
                            isSelected={ paymentOption === "money" }
                            onClick={() => handlePaymentOption("money")}
                        >
                            <Button.Icon icon={ Money } />
                            <Button.Text>
                                Dinheiro
                            </Button.Text>
                        </Button.Root>
                    </section>
                </PaymentForm>
            </InfoFormContainer>
            <CartArea>
                <Heading>Cafés Selecionados</Heading>
                <CartForm>
                    { cart?.map(item => (
                        <CartItem key={ item.id } coffeeItem={ item }/>
                    )) }
                    <CartCheckout>
                        <label>
                            <Text>Total de itens</Text>
                            <Text>R$ { paymentValues.itens }</Text>
                        </label>
                        <label>
                            <Text>Entrega</Text>
                            <Text>R$ { paymentValues.delivery }</Text>
                        </label>
                        <label>
                            <Text weight="bold" size="2-xl">
                                Total
                            </Text>
                            <Text weight="bold" size="2-xl">
                                R$ { paymentValues.total }
                            </Text>
                        </label>
                        <SubmitButton 
                            type="submit"
                            loading={ isLoading }
                        >
                            Confirmar Pedido
                        </SubmitButton>
                    </CartCheckout>
                </CartForm>
            </CartArea>
        </Container>
    )
}