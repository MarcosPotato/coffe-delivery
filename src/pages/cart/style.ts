import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 18px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 32px;
`

const FormBase = styled.div`
    background-color: ${ props => props.theme["base-card"] };
    border-radius: 6px;
    padding: 40px;
`

const ContainerBase = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const InfoFormContainer = styled(ContainerBase)`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (min-width: 750px){
        min-width: 500px;
    }
`

export const BaseFormHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: flex-start;

    svg{
        width: 22px;
        height: 22px;
    }

    > div{
        padding-top: 2px;
    }
`

export const AddressForm = styled(FormBase)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;

    header{
        margin-bottom: 24px;
        svg{
            color: ${ props => props.theme["yellow-dark"] };
        }
    }

    @media (min-width: 1050px){
        .cep, .number, .neigbor{
            max-width: 200px;
        }
    
        .complement{
            min-width: 220px;
            flex: 2;
        }
    
        .city{
            flex: 1;
        }
    
        .state{
            max-width: 60px; 
        }
    }
`

export const PaymentForm = styled(FormBase)`
    display: flex;
    flex-direction: column;
    gap: 32px;

    header{
        svg{
            color: ${ props => props.theme.purple };
        }
    }

    section{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        gap: 12px;

        button{
            flex: 1;
        }
    }
`

export const CartArea = styled(ContainerBase)`
    width: 100%;
    max-width: 448px;
`

export const CartForm = styled(FormBase)`
    display: flex;
    flex-direction: column;
    border-radius: 6px 44px 6px 44px;
`

export const CartCheckout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 24px;

    label{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    a{
        margin-top: 12px;
    }
`