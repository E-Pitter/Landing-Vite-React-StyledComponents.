import React from 'react'
import { HeroContainerStyled, HeroImageContainerStyled, HeroTextContainerStyled } from './HeroStyles'
import Button from '../UI/Button/Button'

const Hero = () => {
  return (
     <HeroContainerStyled>
        <HeroTextContainerStyled>
            <h1>Si tenes Zappi,</h1>
            <h1>tenes Nucba.</h1>
            <p>Busca lo que quieras y no te quedes sin comida</p>
            <Button radius="15" >
                Ver mas
            </Button>
        </HeroTextContainerStyled>
        <HeroImageContainerStyled>
            <img src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png" alt="" />
        </HeroImageContainerStyled>
     </HeroContainerStyled>
  )
}

export default Hero