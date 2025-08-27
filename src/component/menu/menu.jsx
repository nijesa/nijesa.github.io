import { NavLink } from "react-router";


export default function Menu(){
    return(
        <nav className="">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/inicioSesion">Iniciar Sesion</NavLink>
                </li>
            </ul>
        </nav>
    )
}