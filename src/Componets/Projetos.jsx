import React, {useEffect} from "react"
import Coffe from "../assets/coffe.png"
import Simpsons from "../assets/Simpsons.png"
import Witcher from "../assets/witcher.png"
import Disney from "../assets/disney.png"
import Inverno from "../assets/estacao.png"
import Dogs from "../assets/dog.png"
import {ProjetoCoffe,ProjetoSimpsons,ProjetoWitcher,ProjetoDisney,ProjetoInverno,ProjetoDogs,Section,H1,H2,Figure} from "../estilo/ProjetosStyle"
import scrollreveal from "scrollreveal"


function Projetos() {
useEffect(()=>{
   scrollreveal({
    reset:true,
    distance:"100px",
    duration:3000,
    delay:300
   });

   scrollreveal().reveal("img",{origin:"left"});
   scrollreveal().reveal("h2,h3,p",{origin:"right"});
   return ()=>scrollreveal().destroy();},[])
  return (

    <Section>
      <section>
        <Figure>
        
          <a href="https://coffe-seven.vercel.app" target="_blank">
              <ProjetoCoffe src= {Coffe}  alt="Projeto Coffe" />
          </a>
          <div>
          <H2>Projeto Coffe</H2>
          <h3>Projeto Inicial com o tema café onde apliquei conhecimentos</h3>
          <p>HTML,CSS</p>
        </div>
        </Figure>
       
      </section>
      <section>
        <Figure>
          <a href="https://idyllic-praline-d19d34.netlify.app/"target="_blank">
              <ProjetoSimpsons src= {Simpsons}  alt="Projeto Coffe" />
          </a>
          <div>
          <H2>Projeto Simpsos</H2>
          <h3>Esse projeto é ultilizado o cursor personalizado, tema Simpsons</h3>
          <p>HTML,CSS</p>
        </div>
        </Figure>
        
      </section>
      <section>
        <Figure>
          <a href="https://eclectic-cannoli-941761.netlify.app//"target="_blank">
              <ProjetoWitcher src= {Witcher}  alt="Projeto Witcher" />
          </a>
          <div>
          <H2>Projento Witcher</H2>
          <h3> Projeto Witcher com houver com o uso de display flex para centralizar imagem .</h3>
          <p>HTML,CSS</p>
        </div>
        </Figure>
        
      </section>
      <section>
      <Figure>
          <a href="https://bucolic-crostata-ef59ca.netlify.app///"target="_blank">
              <ProjetoDisney src= {Disney}  alt="Projeto Disney" />
          </a>
          <div>
          <H2>Projeto Disney</H2>
          <h3>Projeto Disney uso de display flex,houver e cursor personalizado. </h3>
          <p>HTML,Css</p>
        </div>
        </Figure>
       
       
      </section>
      <section>
      <Figure>
          <a href="https://desafio-3-mauve.vercel.app/"target="_blank">
              <ProjetoInverno src= {Inverno}  alt="Projeto Inverno" />
          </a>
          <div>
          <H2>Projeto Inverno</H2>
          <h3>Projeto Inverno com uso houver e a  propriedade display flex  .</h3>
          <p>HTML,CSS</p>
        </div>
        </Figure>
      
      </section>
      <section>
      <Figure>
          <a href="https://projetofinal-seven.vercel.app/"target="_blank">
              <ProjetoDogs src= {Dogs}  alt="Projeto Doguinhos" />
          </a>
          <div>
          <H2>Projeto Pets</H2>
          <h3>Projeto Pets feito com o usa da responsividade e semântica.</h3>
          <p>HTML,CSS</p>
        </div>
        </Figure>
      
      </section>
    </Section>
  )
}
export default Projetos