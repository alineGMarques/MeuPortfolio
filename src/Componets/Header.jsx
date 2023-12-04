import React from "react"
import { Link } from 'react-router-dom'
import {StyleHeader,Navegacao,Lista,Ul} from "../estilo/HeaderStyle"

function Header() {

  return (
    <StyleHeader>
      <Navegacao>
        <Ul>
          <Lista>
            <Link to="./">Inicio</Link>
          </Lista>
          <Lista>
          <Link to="./sobre">Sobre</Link>
          </Lista>
          <Lista>
            <Link to="./projetos">Projetos</Link>

          </Lista>

        </Ul>

      </Navegacao>

    </StyleHeader>

  )
}

export default Header