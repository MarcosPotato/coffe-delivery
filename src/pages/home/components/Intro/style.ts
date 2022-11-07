import styled from "styled-components";
import { DefaultTheme } from "../../../../theme/defaultTheme";

import BgImage from '../../../../assets/images/background.png'

const IconColors = {
    security: DefaultTheme["yellow-dark"],
    timer: DefaultTheme.yellow,
    package: DefaultTheme["base-text"],
    coffee: DefaultTheme.purple
}

interface DetailIconProps{
    type: keyof typeof IconColors
}

export const Container = styled.div`
    width: 100%;
    padding: 18px;
    margin: 48px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    position: relative;
    background: url(${BgImage});
    
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    @media (max-width: 1100px){
        max-width: 700px;
    }
`

export const Info = styled.div`
    flex: 1;

    h1{
        line-height: 130%;
        margin-bottom: 16px;    
    }

    @media (max-width: 550px){
        > h1, > p{
            text-align: center;
        }
    }
`

export const ImageLogo = styled.img`
    object-fit: contain;
    width: 50%;
    max-width: 476px;

    @media (max-width: 1100px){
        display: none;
    }
`

export const Details = styled.div`
    margin-top: 66px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    p{
        width: 50%;
        min-width: 286px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    @media (max-width: 550px){
        justify-content: space-evenly;
    }

`

export const DetailIcon = styled.div<DetailIconProps>`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    background-color: ${ props => IconColors[props.type] };

    svg{
        width: 16px;
        height: 16px;
        color: ${ props => props.theme.white };
    }
`