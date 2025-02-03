import { useState } from 'react'
import Cabecalho from './componentes/Cabecalho/Cabecalho'
import "./App.css"
import Historia from './componentes/Historia/Historia'
import Cards from './componentes/Cards/Cards'

function App() {

  return (
    <>
      <Cabecalho />
      <Historia />
      <Cards />
    </>
  )
}

export default App
