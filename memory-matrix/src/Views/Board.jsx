import '../Styles/Board.css';
import { createContext, useState, useEffect } from 'react';
import Card from './Card.jsx';

import Bonus from '../Components/Bonus';
import Opsiones from '../Components/Opsiones';
import { domain } from '../Controllers/params'

export const GameContext = createContext(null);

const Board = () => {
  const [cards, setCards] = useState([]);
  const [username, setUsername] = useState('Robertin123');
  const [timer, setTimer] = useState('00:00');
  const [tiempoRestante, setTiempoRestante] = useState(0);
  const [lives, setLives] = useState('5');

  // useEffect(() => {
  //   const cardImages = [
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KFvIXif18Hz2_QYDKl0onsBQRG3V_bvc6P-clxI&s',
  //     'https://images.vexels.com/media/users/3/139441/isolated/lists/b779109e8e69df289e6629fc7a72f0ee-vista-lateral-de-carreras-de-autos-de-carrera.png',
  //     'https://lh3.googleusercontent.com/4M4aeaq4LQwNoL7BkfnGD_BDQCUuVA2JWYXqEtuRbTnMK1kVgJcbE1KcPjHo-fDPHg',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSr8sYvQp5voAP7tkM9JBu1gktsc-nZ2XYqw&usqp=CAU',
  //     'https://bahcoherramientas.pe/wp-content/uploads/2019/10/FS.1.png',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtufwqeSCpRC9yFlpdYyhjMG5VCn0XaJ5ilg&usqp=CAU',
  //     'https://img.freepik.com/fotos-premium/estadio-futbol-renderizado-3d-estadio-futbol-arena-campo-lleno-gente_3544-1361.jpg',
  //     'https://www.cic.cl/on/demandware.static/-/Sites-CIC_CL-Library/es_CL/dw444e61e7/categorias-landing/camas/categoria-camas-01.jpg'
  //   ]
  //   const duplicatedImages = [...cardImages, ...cardImages];
  //   const shuffledImages = duplicatedImages.sort(() => Math.random() - 0.5);
  //   setCards(shuffledImages);
  // }, []);

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
  }, []);


  // Manejador de ventana emergente de Bonus y Opsiones
  const [visibleBonus, setVisibleBonus] = useState('oculto');
  const [listaBonus, setListaBonus] = useState([]);
  const [visibleOptions, setVisibleOptions] = useState('oculto');

  const handleBonus = () => {
    visibleBonus == 'oculto' ? setVisibleBonus('') : setVisibleBonus('oculto')
  };

  const handleOptions = () => {
    setVisibleOptions('');
  };

  const formatTime = (duration) => {
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;

    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    
    return `${minutes}:${seconds}`;
  
  };

  // Fetch Data
  const fetchData = () => {
    const url = domain + '/newGame/FreeTrial';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsername(data.usuario.nickname);
        setLives(data.partida.vidas);
        setTiempoRestante(+data.partida.tiempo_restante);
        const listaBonusFetch = [];
        data.tablero.bonus.map((bonus) => {
          listaBonusFetch.push({
            id: bonus.id,
            tipo: bonus.tipo,
            descripsion: bonus.descripsion,
          })
        });
        setListaBonus(listaBonusFetch)
        const listaImagenes = [];
        data.tablero.imagenes.map((img) => {
          listaImagenes.push(img.imagen)
        })
        setCards(listaImagenes);
      })
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
          {cards.map((image, index) => (
            <Card key={index} image={image} />
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
