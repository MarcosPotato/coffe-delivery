export interface Location{
    cep: string
    street: string
    number: string
    complement: string
    neigbor: string
    city: string
    state: string
}

export interface GetLocationParams{
    cep: string
    number: string
}

export interface LocationContextParams{
    location: Location
    getLocation: (data: GetLocationParams) => Promise<void>
}