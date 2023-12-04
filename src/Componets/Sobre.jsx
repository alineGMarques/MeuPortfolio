import React from "react"
import Imagem from "../assets/Computador.png"
import logohtml from "../assets/iconhtml.png"
import logocss from "../assets/iconcss.png"
import logojs from "../assets/iconjs.png"
import logobts from "../assets/iconbootstrap.png"
import logorct from "../assets/iconreagir.png"
import logoestile from "../assets/iconsestilizados.png"

import{Img,H2,P,Figure,Divisa,Divisao,LogoUm,LogoDois,LogoTres,LogoBoot,LogoReagir,LogoEstilo} from "../estilo/SobreStyle"

function Sobre() {
  return (
    <section>
    <section>
      <Figure>
  
      <Img src={Imagem} alt="Imagem" />
  

      </Figure>
    </section>

<Divisa>
<H2>Sobre</H2>
</Divisa>
<Divisao>
<P> Tenho conhecimento em ux/ui designer e atualmente estudo front-end. 
Estou no primeiro semestre do curso tecnólogo de analises e desenvolvimento de sistemas.
 Sou muito curiosa e gosto muito de aprender.
Já participei de hackaton que hoje está em processo de aceleração.
  Busco muitos desafios na minha área escolhida que é front-end.</P>
</Divisao>
<H2>Conhecimentos</H2>
<Divisao>

<LogoUm src={logohtml} alt="" />
<LogoDois src={logocss} alt="" />
<LogoTres src={logojs} alt="" />
<LogoBoot src={logobts} alt="" />
<LogoReagir src={logorct} alt="" />
<LogoEstilo src={logoestile} alt="" />

</Divisao>
</section>
  )
}
export default Sobre