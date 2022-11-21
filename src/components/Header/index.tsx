import { NavLink } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'

import { CartButton } from "../Buttons/CartButton"
import { LocationInfo } from '../LocationInfo'

import { Container, HeaderActions } from "./style"

import Logo from '../../assets/logo.svg'

export const Header: React.FC = () => {

    const { cart } = useCart()

    return (
        <Container>
            <NavLink to="/">
                <img src={ Logo } alt="coffee-delivery"/>
            </NavLink>
            <HeaderActions>
                <LocationInfo />
                <NavLink to="/cart">
                    <CartButton action="show" totalItens={ cart?.length }/>
                </NavLink>
            </HeaderActions>
        </Container>
    )
}