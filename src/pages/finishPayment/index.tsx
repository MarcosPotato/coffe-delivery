import { MapPin } from "phosphor-react"
import { Heading } from "../../components/Heading"
import { Text } from "../../components/Text"
import { Container, DeliveryDetails, DetailIcon, Info } from "./style"

import DeliveryGuy from "../../assets/images/delivered.png"

export const FinishPayment: React.FC = () => {
    return(
        <Container>
            <Heading size="large">
                Uhu! Pedido confirmado
            </Heading>
            <Text size="2-xl" type="subtitle">
                Agora é só aguardar que logo o café chegará até você
            </Text>
            <Info>
                <DeliveryDetails>
                    <Text size="large">
                        <DetailIcon type="location">
                            <MapPin weight="fill"/> 
                        </DetailIcon>
                        <span>
                            Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS
                        </span>
                    </Text>
                    <Text size="large">
                        <DetailIcon type="timer">
                            <MapPin weight="fill"/> 
                        </DetailIcon>
                        <span>
                            Previsão de entrega
                            <strong>20 min - 30 min</strong>
                        </span>
                    </Text>
                    <Text size="large">
                        <DetailIcon type="payment">
                            <MapPin weight="fill"/> 
                        </DetailIcon>
                        <span>
                            Pagamento na entrega 
                            <strong>Cartão de Crédito</strong>
                        </span>
                    </Text>
                </DeliveryDetails>
                <img src={ DeliveryGuy } alt="delirey-guy"/>
            </Info>
        </Container>
    )
}