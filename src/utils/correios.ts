interface AddressCorreios{
    cep: string
    logradouro: string
    complemento: string 
    bairro: string
    localidade: string
    uf: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
}

export const getAddressByCep = async(cep: string): Promise<AddressCorreios> => {
    const filteredCEP = cep.replace(/\D+/g, '')

    try{
        const data = await fetch(`https://viacep.com.br/ws/${filteredCEP}/json/`)
            .then(response => response.json())

        return data
    } catch(error){
        console.log(error)
        throw new Error("Não foi possivel realizar consulta de CEP")
    }
}