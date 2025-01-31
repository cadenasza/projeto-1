import "./RedeSocial.css"
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function RedeSocial() {
  return (
    <div className="rede-social">
        <li>
            <a href="#" className="icon"><FaInstagram /></a>
        </li>
        <li>
            <a href="#" className="icon"><FaFacebook /></a>
        </li>
        <li>
            <a href="#" className="icon"><FaYoutube /></a>
        </li>
    </div>
  )
}
