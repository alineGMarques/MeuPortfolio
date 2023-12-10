import React from "react"
import { Link } from 'react-router-dom'
import Aline from "../assets/Aline.jpeg"
import logolinkedin from "../assets/linkedin.png"
import logoGT from "../assets/github.png"
import Curriculo from "../assets/CV.jpg"
import {Img,Nomes,Figure,H1,H2,Button,Divisao,Section,Linkedin,GitHub} from "../estilo/InicioStyle"



function Inicio() {
 
  return (
   
    <Section>

   <Figure>
 
    <Img src={Aline} alt="Minha foto" />
    
   </Figure>
    <Nomes >
    <H1>Olá sou Aline Marques</H1>
    <H2>Desenvolvedora Front-end</H2>

    </Nomes>
    <Divisao>
    <a href="https://www.linkedin.com/in/aline-gomes-m////"target="_blank">
              <Linkedin src= {logolinkedin}  alt="Projeto Disney" />
          </a>
          <a href="https://github.com/alineGMarques////"target="_blank">
              <GitHub src= {logoGT}  alt="Projeto Disney" />
          </a>
    
    
    </Divisao>
    <Divisao>
    <Link to="./curriculum"><Button>Ver Currículo</Button></Link>
    
      </Divisao>

    </Section>
   
  )

}
export default Inicio