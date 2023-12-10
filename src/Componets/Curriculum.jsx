import React from "react"
import Imagem from "../assets/CV.jpg"
import {Img,Figure} from "../estilo/CurriculumStyle"

function Curriculum() {
    return (
      <section>
        <Figure>
    
        <Img src={Imagem} alt="Imagem" />
    
  
        </Figure>
      </section>
    );
}
      export default Curriculum