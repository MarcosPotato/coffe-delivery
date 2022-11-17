import { Container } from "./style"

import CoffeeImage from '../../../../assets/images/coffees/traditional.png'
import { Text } from "../../../../components/Text"
import SelectQuantity from "../../../../components/SelectQuantity"
import { RemoveButton } from "../../../../components/Buttons/RemoveButton"

export const CartItem: React.FC = () => {
    return (
        <Container>
            <img src={ CoffeeImage } alt="traditional-express" />
            <div>
                <Text size="large" type="subtitle">
                    Expresso Tradicional
                </Text>
                <SelectQuantity onChange={(value) => console.log(value)}/>
                <RemoveButton>
                    Remover
                </RemoveButton>
            </div>
            <Text size="large" weight="bold">R$ 9,90</Text>
        </Container>
    )
}