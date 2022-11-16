import { useEffect, useState } from "react"
import { CoffeesList } from "./components/CoffeesList"
import { Intro } from "./components/Intro"

import { Container } from "./style"

export const Home: React.FC = () => {

    useEffect(() => {
        fetch("/api/coffees")
            .then(response => response.json())
            .then(data => console.log(data))
    },[])

    return(
        <Container>
            <Intro />
            <CoffeesList/>
        </Container>
    )
}