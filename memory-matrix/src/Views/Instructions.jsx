import NavBar from '../Components/NavBar'
import '../Styles/Instructions.css'

function Instructions() {
    return(
        <>
        <NavBar/>
        <h1>Instrucciones</h1>
        <p> Descripción general <br></br><br></br>

        Memory Matrix es un juego similar al juego “memorice” pero con algunas diferencias importantes. Primero, este juego tendrá niveles de dificultad y tópicos a tratar variados, además que tendrá un sistema de ayudas o pistas para los niveles avanzados, pues las fichas relacionadas no serán tan triviales de conectar.<br></br><br></br>

        Reglas:
        </p>

        <ul>
            <li>Al principio de cada partida se mostrará una cantidad par de imágenes, de tal manera que cuando se dé la señal de inicio del juego, el usuario pueda ir presionando el clic del mouse sobre la imagen que desee, una vez que esta acción se realice, la imagen se volteará por un tiempo limitado para que el usuario pueda saber qué imagen está observando y pueda memorizarla, una vez transcurrido ese tiempo la imagen se volteará a su estado original.</li><br></br>

            <li>Inicialmente los niveles serán sencillos, con un recuadro inicial de 8x8, posteriormente a medida que vayan aumentando en el nivel, el mapa irá creciendo en cantidad de imágenes.</li><br></br>

            <li>El tiempo para poder ver las imágenes en un comienzo será más extenso y a medida que vayan pasando los niveles la dificultad irá aumentando.</li><br></br>

            <li>Cada jugador tendrá una cantidad limitada de vidas.</li><br></br>

            <li>Dificultad. Este aspecto va a estar controlado por varios factores, tales como:</li><br></br>
            
            <ul className="Dificultad_Subsection">
                <li type="circle">El tamaño del tablero, que puede ir de 4x4 hasta 16x16.</li><br></br>

                <li type="circle">Tiempo. Según qué tan capaz un jugador se crea de resolver el juego, puede fijar un límite de tiempo máximo.</li> <br></br>

                <li type="circle">Tema de la partida, que puede ir de frutas, hasta ingeniería de cohetes, y cuya relación no será tan trivial, es decir, en un inicio 2 fichas tendrá la misma fruta a mostrar, en cambio, en el último nivel, las fichas pares mostrarán temas relacionados, pero no iguales, como el espacio y una estrella. </li><br></br>
            </ul>
        </ul>

        <p>
        Bonus.
        </p>
        <ul>
            <li > El juego tendrá un sistema de ayudas que permita al jugador terminarlo y no quedarse estancado, estos pueden ser: </li><br></br>
            <ul className="Bonus_Subsection">
                <li type="circle">Transcurrido un tiempo de inactividad, un número limitado de tarjetas mostrarán pistas, que será una breve descripción de la imagen al reverso. </li><br></br>

                <li type="circle">La ficha se tornará transparente permitiendo vislumbrar algo del dibujo. </li><br></br>
            </ul>

            <li>Un turno consistirá en una partida, de la cual el jugador conseguirá una cantidad de puntos según los criterios especificados a continuación:  </li><br></br>

            <ul className="Bonus_Subsection">
                <li type="circle">Mientras menos se demore más puntos recibirá.</li><br></br>

                <li type="circle">Según el tamaño del tablero, más grande, más puntos. </li><br></br>

                <li type="circle">Mientras menos BONUS use más puntos recibe. </li><br></br>

                <li type="circle">Mientras mayor dificultad, más puntos recibe. </li><br></br>
            
            </ul>
        </ul>
            <p>Consideraciones</p>
            <ul>
                <li>Se debe poder crear el juego, de tal manera que pueda haber múltiples jugadores jugando partidas distintas. 

                Debe haber la posibilidad de un usuario espectador.

                Recuperar la partida desde el punto en que quedó guardada. 
            </li>
            </ul>
        </>
    )
}

export default Instructions
