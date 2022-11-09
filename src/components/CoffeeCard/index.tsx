import { Heading } from "../Heading"
import { Text } from "../Text"
import { SelectQuantity } from "../SelectQuantity"
import { CartButton } from "../Buttons/CartButton"

import { CardActions, Container, Price } from "./style"
import CoffeImage from '../../assets/images/coffees/traditional-express.png'

export const CoffeeCard: React.FC = () => {
    return(
        <Container>
            <img src={ CoffeImage } alt="traiditonal-express" />
            <span>TRADICIONAL</span>

            <Heading size="medium">
                Expresso Tradicional
            </Heading>
            <Text size="medium" type="label">
                O tradicional café feito com água quente e grãos moídos
            </Text>

            <CardActions>
                <Price>
                    <span>R$</span>
                    <Text size="3-xl">9,90</Text>
                </Price>
                <SelectQuantity />
                <CartButton action="add" />
            </CardActions>
        </Container>
    )
}