import { useEffect, useState } from "react"
import { Coffee } from "../../@types/coffee"

import { CoffeesList } from "./components/CoffeesList"
import { Intro } from "./components/Intro"

import { Container } from "./style"

export const Home: React.FC = () => {

    const [coffees, setCoffees] = useState<Coffee[]>([])

    useEffect(() => {
        fetch("/api/coffees")
            .then(response => response.json())
            .then(data => setCoffees(data))
    },[])

    return(
        <Container>
            <Intro />
            <CoffeesList coffees={ coffees }/>
        </Container>
    )
}