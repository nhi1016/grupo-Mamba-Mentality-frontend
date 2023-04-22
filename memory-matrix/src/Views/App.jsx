    // import { useState } from "react"
import '../Styles/App.css'
import NavBar from '../Components/NavBar'

export default function App() {

    // const [nombre, setNombre] = useState(null)

    return (
        <div className='app'>
            
            <NavBar/>
            <div className="body-container">
                <div className="mensaje-container">
                    <h2>Bienvenid@!</h2>
                    <p>Memory-Matrix es un juego que desafiará tu atención, tu concentración y por sobre todo tu capacidad de memorizar. El juego consiste en que se mostrarán una serie de imágenes que estarán ocultas y a medida que transcurra el tiempo podrás clickear las imágenes y se darán vuelta, de tal manera que puedas observar y mirar de qué imagen se trata. Tu misión es poder recordar dichas imágenes para que puedas calzar el par de imágenes que sean iguales. A medida que avances en los distintos niveles la complejidad de los tableros irá aumentando. ¡Buena suerte!</p>
                    <a href="/" className="play-button">Jugar ahora</a>
                </div>
                
            </div>
        </div>
    )
}
