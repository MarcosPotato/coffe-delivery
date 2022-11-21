import { createContext, ReactNode, useState, useCallback } from "react";

import { LocationContextParams, Location, GetLocationParams } from "../@types/location";
import { getAddressByCep } from "../utils/correios";

interface LocationProviderProps{
    children: ReactNode
}

export const LocationContext = createContext({} as LocationContextParams)

export const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {

    const [location, setLocation] = useState<Location>(() => {
        const currentLocation = localStorage.getItem("@coffeedelivery:locale")

        if(!currentLocation){
            return {} as Location
        }

        return JSON.parse(currentLocation)
    })

    const getLocation = useCallback(async({ cep, number }: GetLocationParams) => {
        const address = await getAddressByCep(cep)
        const currentLocation = {
            cep: cep,
            number: number,
            city: address.localidade,
            complement: "",
            neigbor: address.bairro,
            state: address.uf,
            street: address.logradouro
        }

        setLocation(currentLocation)
        localStorage.setItem("@coffeedelivery:locale", JSON.stringify(currentLocation))
    },[])

    return (
        <LocationContext.Provider value={{ location, getLocation }}>
            { children }
        </LocationContext.Provider>
    )
}