export const formatValue = (value: number) => (
    new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
    .format(value).split("$")[1].trim()
)