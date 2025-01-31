
import RedeSocial from "../RedeSocial/RedeSocial"
import "./Menu.css"

export default function Menu() {
  return (
    <nav className="nav">
        <ul className="nav-list">
            <li><a href="#home" className="nav-link">Inicio</a></li>
            <li><a href="#home" className="nav-link">Sobre Nos</a></li>
            <li><a href="#home" className="nav-link">Unidades</a></li>
            <li><a href="#home" className="nav-link">Blogs</a></li>
            <li><a href="#home" className="nav-link">Faq</a></li>
            <li><a href="#home" className="nav-link">Contato</a></li>
            <RedeSocial />
        </ul>
        
    </nav>
  )
}
