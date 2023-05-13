
import { AnimationTranlateX50 } from "../../Animes/AnimationTranlate"
import "./NavBar.css"

export function NavBar(){


    return(
        <ul className="nav__ul" onClick={()=>AnimationTranlateX50(".nav__ul")}>
            <li className="nav__li">Inicio</li>
            <li className="nav__li">Conhecimentos</li>
            <li className="nav__li">Projetos</li>
            <li className="nav__li">Contato</li>
        </ul>
    )
}