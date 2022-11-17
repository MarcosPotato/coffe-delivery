import { NavLink } from 'react-router-dom'
import { MapPin } from "phosphor-react"

import { CartButton } from "../Buttons/CartButton"

import { Container, HeaderActions, LocationInfo } from "./style"

import Logo from '../../assets/logo.svg'
import { useCart } from '../../hooks/useCart'

export const Header: React.FC = () => {

    const { cart } = useCart()

    return (
        <Container>
            <NavLink to="/">
                <img src={ Logo } alt="coffee-delivery"/>
            </NavLink>
            <HeaderActions>
                <LocationInfo>
                    <MapPin weight="fill"/>
                    Porto Alegre, RS
                </LocationInfo>
                <NavLink to="/cart">
                    <CartButton action="show" totalItens={ cart?.length }/>
                </NavLink>
            </HeaderActions>
        </Container>
    )
}