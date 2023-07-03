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
  const [tiempoRestante, setTiempoRestante] = useState(0)
  const [lives, setLives] = useState('5')

  useEffect(() => {
    let duration = tiempoRestante; // Duración del temporizador en segundos
    const interval = setInterval(() => {
      setTimer(formatTime(duration));
      duration--;
      if (duration < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  const formatTime = (duration) => {
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    return `${minutes}:${seconds}`
  }
  
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
  const fetchData = () => {
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
      })
    return
  }
  useEffect(() => {
    fetchData();
  }, [])

  return <>
    <Bonus tipos={listaBonus} visible={visibleBonus} handleVista={setVisibleBonus} />

    <Opsiones visible={visibleOptions} handleVista={setVisibleOptions}/>
    
    <div className="board">
      <div className="header">
        <div className="username">{username}</div>
      </div>
      <div className="board-content">
        <div className="cards">
          {cards.map((imagen, index) => (
            <Card key={index} image={imagen.imagen} />
          ))}
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
