import { NavLink } from 'react-router-dom'
import { MapPin } from "phosphor-react"

import { CartButton } from "../Buttons/CartButton"

import { Container, HeaderActions, LocationInfo } from "./style"

import Logo from '../../assets/logo.svg'

export const Header: React.FC = () => {
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
                <CartButton action="show" />
            </HeaderActions>
        </Container>
    )
}