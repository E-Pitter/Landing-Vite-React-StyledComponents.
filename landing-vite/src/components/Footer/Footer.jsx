import React from 'react'
import { FooterContainerStyled, LinksContainerStyled } from './FooterStyled'

const Footer = () => {
  return (
    <FooterContainerStyled>
        <LinksContainerStyled>
        <a href="#">Términos de uso</a>
        <a href="#">Trabajá con nosotros</a>
        <a href="#">Soporte</a>
        </LinksContainerStyled>
        <p>Hecho con ❤️ en <span>NUCBAZAPPI</span></p>
    </FooterContainerStyled>
  )
}

export default Footer