import { useState } from "react"
import icono from '../assets/icon.png'
import '../Styles/NavBar.css'

export default function NavBar() {

    // const [nombre, setNombre] = useState(null)

    return (
        <>
        <ul className="list-header">
            <li>
                <a href="/">
                    <img src={icono} className="icono" alt="icono Memory-Matrix" />
                </a>
            </li>
            <li>
                <a href="/instructions" className="rutas">Cómo jugar</a>
                |
                <a href="/about-us" className="rutas">Sobre nosotros</a>
            </li>
            <li>
                <a href="/login" className="rutas">Iniciar Sesión</a>
                <a href="/signup" className="rutas">Registrate</a>
                <a href="/" className="rutas">Salir</a>
            </li>
        </ul>
        </>
    )
}