import { Text } from "../../../../components/Text"
import { Heading } from "../../../../components/Heading"

import { ShoppingCartSimple, Timer, Package, Coffee } from 'phosphor-react'

import { Container, ImageLogo, Info, Details, DetailIcon } from "./style"

import LogoImage from '../../../../assets/coffe-delivery.svg'

export const Intro: React.FC = () => {
    return (
        <Container>
            <Info>
                <Heading size="xl">Encontre o café perfeito para qualquer hora do dia</Heading>
                <Text size="2-xl" type="subtitle">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Text>
                <Details>
                    <Text size="large">
                        <DetailIcon type="security">
                            <ShoppingCartSimple weight="fill"/> 
                        </DetailIcon>
                        Compra simples e Segura
                    </Text>
                    <Text size="large">
                        <DetailIcon type="package">
                            <Package weight="fill"/> 
                        </DetailIcon>
                        Embalagem mantem o café intacto
                    </Text>
                    <Text size="large">
                        <DetailIcon type="timer">
                            <Timer weight="fill"/> 
                        </DetailIcon>
                        Entrega rápida e rastreada
                    </Text>
                    <Text size="large">
                        <DetailIcon type="coffee">
                            <Coffee weight="fill"/> 
                        </DetailIcon>
                        O Café chega freaquinho até você
                    </Text>
                </Details>
            </Info>
            <ImageLogo src={LogoImage} alt="coffee-delivery" />
        </Container>
    )
}