import '../Styles/Board.css';
import { createContext, useState, useEffect } from 'react';
import Card from './Card.jsx';

import Bonus from '../Components/Bonus';
import Opsiones from '../Components/Opsiones';
import { domain } from '../Controllers/params'

export const GameContext = createContext(null);

const Board = () => {
  const [cards, setCards] = useState([])
  const [username, setUsername] = useState('Robertin123')
  const [timer, setTimer] = useState('00:00')
  const [tiempoRestante, setTiempoRestante] = useState(600)
  const [intervalo, setIntervalo] = useState(undefined)
  const [lives, setLives] = useState('5')
  
  // Manejador de ventana emergente de Bonus y Opsiones
  const [visibleBonus, setVisibleBonus] = useState('oculto')
  const [listaBonus, setListaBonus] = useState([])
  const [visibleOptions, setVisibleOptions] = useState('oculto')

  const handleBonus = () => {
    visibleBonus == 'oculto' ? setVisibleBonus('') : setVisibleBonus('oculto')
  };

  const handleOptions = () => {
    setVisibleOptions('');
  }

  // Fetch Data
  const fetchData = async () => {
    const url = domain + '/newGame/FreeTrial';
    fetch(url, {
      method: 'GET',
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsername(data.usuario.nickname)
        setLives(data.partida.vidas)
        const listaBonusFetch = []
        data.tablero.bonus.map((bonus) => {
          listaBonusFetch.push({
            id: bonus.id,
            tipo: bonus.tipo,
            descripsion: bonus.descripsion,
          })
        })
        setListaBonus(listaBonusFetch)
        const listaImagenes = []
        data.tablero.imagenes.map((img) => {
          listaImagenes.push({
            imagen: img.imagen,
            id: img.id,
          })
        })
        setCards(listaImagenes);
        setTiempoRestante(+data.partida.tiempo_restante)
        return data
      })
      .then((data) => {
        localStorage.setItem('user_id', data.usuario.id)
        localStorage.setItem('partida_id', data.partida.id)
        localStorage.setItem('tablero_id', data.tablero.id)
        localStorage.setItem('vidas', +data.partida.vidas)
        localStorage.setItem('img_selected', 0)
        localStorage.setItem('imagenes', JSON.stringify({}))
      })
    return
  }

  const formatTime = (duration) => {
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    return `${minutes}:${seconds}`
  }

  let tarjetas = []
  let imagenes = {}
  cards.map((imagen, index) => {
    tarjetas.push(<Card key={index} identifier={imagen.id} image={imagen.imagen} setVidas={setLives} />)
    // imagenes = JSON.parse(localStorage.getItem('imagenes'))
    imagenes[imagen.id] = {
      bloqueada: 0,
    }
  })
  if (localStorage.getItem('imagenes') == '{}') {
    localStorage.setItem('imagenes', JSON.stringify(imagenes))
  }

  useEffect(() => {
    fetchData()
    let duration = tiempoRestante; // Duración del temporizador en segundos
    const interval = setInterval(() => {
      setTimer(formatTime(duration));
      duration--;
      localStorage.setItem('tiempoRestante', duration)
      if (duration < 0) {
        clearInterval(interval);
      }
    }, 1000);
    setIntervalo(interval);

    // return () => clearInterval(interval);
  }, [])

  return <>
    <Bonus tipos={listaBonus} visible={visibleBonus} handleVista={setVisibleBonus} />

    <Opsiones visible={visibleOptions} handleVista={setVisibleOptions} interval={intervalo}/>
    
    <div className="board">
      <div className="header">
        <div className="username">{username}</div>
      </div>
      <div className="board-content">
        <div className="cards">
          {tarjetas}
        </div>
        <div className="header-right">
          <div className="timer">{timer}</div>
          <div className="lives">
            <span>Vidas:</span> {lives}
          </div>
          <div className="buttons">
            <button className="bonus-button" onClick={handleBonus}>Bonus</button>
            <button className="options-button" onClick={handleOptions}>Opciones</button>
          </div>
        </div>
      </div>
    </div>
  </>

};

export default Board;
