import styled from "styled-components";
import { DefaultTheme } from "../../theme/defaultTheme";

const IconColors = {
    payment: DefaultTheme["yellow-dark"],
    timer: DefaultTheme.yellow,
    location: DefaultTheme.purple
}

interface DetailIconProps{
    type: keyof typeof IconColors
}

export const Container = styled.div`
    padding: 18px;
    padding-top: 8vh;
    width: 100%;
    display: flex;
    flex-direction: column;

    > h1{
        color: ${props => props.theme["yellow-dark"] };
    }

    @media(max-width: 1080px){
        align-items: center;
        justify-content: center;
        padding-top: 250px;

        > p{
            text-align: center;
        }
    }
`

export const Info = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 18px;

    img{
        width: 492px;
        object-fit: contain;
    }

    @media(max-width: 1080px){
        img{
            width: 100%;
            height: 200px;
            position: absolute;
            top: 100px;
            left: 0px;
            margin-top: 18px;
        }
    }
`

export const DeliveryDetails = styled.div`
    width: 100%;
    max-width: 526px;
    height: auto;
    padding: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;

    &::before{
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 6px 36px 6px 36px; 
        padding: 1px; 
        background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%); 
        -webkit-mask-composite: xor;
        mask-composite: exclude; 
        mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
    }

    span{
        display: flex;
        max-width: 320px;
    }

    p{
        width: 100%;
        min-width: 286px;
        display: flex;
        align-items: center;

        span{
            max-width: 400px;
            display: flex;
            flex-direction: column;
        }
    }
`

export const DetailIcon = styled.div<DetailIconProps>`
    padding: 8px;
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