import { Coffee } from "../../../../@types/coffee"
import { CoffeeCard } from "../../../../components/CoffeeCard"
import { Heading } from "../../../../components/Heading"
import { Container, List } from "./style"

interface CoffeesListProps{
    coffees: Coffee[]
}

export const CoffeesList: React.FC<CoffeesListProps> = ({ coffees }) => {
    return(
        <Container>
            <Heading size="large">Nossos Cafés</Heading>
            <List>
                { coffees.map(coffee => (
                    <CoffeeCard key={ coffee.id } coffeeInfo={ coffee }/>
                ))}
            </List>
        </Container>
    )
}