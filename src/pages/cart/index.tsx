import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"

import { Heading } from "../../components/Heading"
import { Text } from "../../components/Text"
import { Input } from "../../components/Input"
import { Button } from "../../components/Buttons/Button"
import { CartItem } from "./components/CartItem"
import { SubmitButton } from "../../components/Buttons/SubmitButton"

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
import { NavLink } from "react-router-dom"

export const Cart: React.FC = () => {
    return(
        <Container>
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
                    />
                    <Input
                        className="street"
                        type="text"
                        placeholder="Rua"
                        fullWidth
                    />
                    <Input
                        className="number"
                        type="text"
                        placeholder="Número"
                        fullWidth 
                    />
                    <Input
                        className="complement"
                        type="text"
                        placeholder="Complemento"
                        optional
                        fullWidth 
                    />
                    <Input
                        className="neigbor"
                        type="text"
                        placeholder="Bairro"
                        fullWidth 
                    />
                    <Input
                        className="city"
                        type="text"
                        placeholder="Cidade"
                        fullWidth 
                    />
                    <Input
                        className="state"
                        type="text"
                        placeholder="UF"
                        fullWidth 
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
                        <Button.Root isSelected>
                            <Button.Icon icon={ CreditCard } />
                            <Button.Text>
                                Cartão de Crédito
                            </Button.Text>
                        </Button.Root>
                        <Button.Root>
                            <Button.Icon icon={ Bank } />
                            <Button.Text>
                                Cartão de Débito
                            </Button.Text>
                        </Button.Root>
                        <Button.Root>
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
                    <CartItem />
                    <CartItem />
                    <CartCheckout>
                        <label>
                            <Text>Total de itens</Text>
                            <Text>R$ 29,70</Text>
                        </label>
                        <label>
                            <Text>Entrega</Text>
                            <Text>R$ 3,50</Text>
                        </label>
                        <label>
                            <Text weight="bold" size="2-xl">
                                Total
                            </Text>
                            <Text weight="bold" size="2-xl">
                                R$ 33,20
                            </Text>
                        </label>
                        <SubmitButton asChild>
                            <NavLink to="/finished">
                                Confirmar Pedido
                            </NavLink>
                        </SubmitButton>
                    </CartCheckout>
                </CartForm>
            </CartArea>
        </Container>
    )
}