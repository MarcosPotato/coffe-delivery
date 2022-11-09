import { CoffeeCard } from "../../../../components/CoffeeCard"
import { Heading } from "../../../../components/Heading"
import { Container, List } from "./style"

export const CoffeesList: React.FC = () => {
    return(
        <Container>
            <Heading size="large">Nossos Cafés</Heading>
            <List>
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
            </List>
        </Container>
    )
}