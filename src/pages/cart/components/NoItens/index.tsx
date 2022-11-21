import { Coffee } from "phosphor-react"
import { Heading } from "../../../../components/Heading"
import { Text } from "../../../../components/Text"
import { Container } from "./style"

export const NoItens: React.FC = () => {
    return (
        <Container>
            <Coffee weight="fill"/>
            <Heading size="xl">
                O carrinho está vazio!
            </Heading>
            <Text size="2-xl" type="subtitle">
                Por favor adicione um produto no carrinho
            </Text>
        </Container>
    )
}