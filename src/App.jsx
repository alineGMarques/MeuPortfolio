

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Componets/Header"
import Inicio from "./Componets/Inicio"
import Sobre from "./Componets/Sobre"
import Projetos from "./Componets/Projetos"
import GlobalStyle from "./estilo/global"
export default function App() {
  return (
    <>
    <GlobalStyle/>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/projetos' element={<Projetos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
