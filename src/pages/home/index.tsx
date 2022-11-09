import { CoffeesList } from "./components/CoffeesList"
import { Intro } from "./components/Intro"

import { Container } from "./style"

export const Home: React.FC = () => {
    return(
        <Container>
            <Intro />
            <CoffeesList/>
        </Container>
    )
}