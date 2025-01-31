import Menu from "../Menu/Menu"
import "./Cabecalho.css"

export default function Cabecalho() {
  return (
        <header className='header'>
            <div className="container-logo">
                <img src="img/logo-acai.png" alt="logo do acai" className="logo-acai" />
            </div>
            <Menu />
        </header>
  )
}
