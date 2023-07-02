import '../Styles/Board.css';
import React, { createContext, useState, useEffect } from 'react';
import Card from './Card.jsx';
import BoardButton from '../Components/BoardButton.jsx';

export const GameContext = createContext(null);

const Board = () => {
  const [cards, setCards] = useState([]);
  const [username, setUsername] = useState('Robertin123');
  const [timer, setTimer] = useState('10:00 minutos');
  const [lives, setLives] = useState('4');

  useEffect(() => {
    const cardImages = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KFvIXif18Hz2_QYDKl0onsBQRG3V_bvc6P-clxI&s',
      'https://images.vexels.com/media/users/3/139441/isolated/lists/b779109e8e69df289e6629fc7a72f0ee-vista-lateral-de-carreras-de-autos-de-carrera.png',
      'https://lh3.googleusercontent.com/4M4aeaq4LQwNoL7BkfnGD_BDQCUuVA2JWYXqEtuRbTnMK1kVgJcbE1KcPjHo-fDPHg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSr8sYvQp5voAP7tkM9JBu1gktsc-nZ2XYqw&usqp=CAU',
      'https://bahcoherramientas.pe/wp-content/uploads/2019/10/FS.1.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtufwqeSCpRC9yFlpdYyhjMG5VCn0XaJ5ilg&usqp=CAU',
      'https://img.freepik.com/fotos-premium/estadio-futbol-renderizado-3d-estadio-futbol-arena-campo-lleno-gente_3544-1361.jpg',
      'https://www.cic.cl/on/demandware.static/-/Sites-CIC_CL-Library/es_CL/dw444e61e7/categorias-landing/camas/categoria-camas-01.jpg'
    ];

    const duplicatedImages = [...cardImages, ...cardImages];
    const shuffledImages = duplicatedImages.sort(() => Math.random() - 0.5);
    setCards(shuffledImages);
  }, []);

  return (
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
            <button className="transparency-button">Transparencia</button>
            <button className="description-button">Descripción</button>
            <button className="hint-button">Pista</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;





// import React, { useState, useEffect } from 'react';
// import '../Styles/Board.css';

// const Board = () => {
//   // const cardImages = [
//   //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KFvIXif18Hz2_QYDKl0onsBQRG3V_bvc6P-clxI&s',
//   //   'https://images.vexels.com/media/users/3/139441/isolated/lists/b779109e8e69df289e6629fc7a72f0ee-vista-lateral-de-carreras-de-autos-de-carrera.png',
//   //   'https://lh3.googleusercontent.com/4M4aeaq4LQwNoL7BkfnGD_BDQCUuVA2JWYXqEtuRbTnMK1kVgJcbE1KcPjHo-fDPHg',
//   //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSr8sYvQp5voAP7tkM9JBu1gktsc-nZ2XYqw&usqp=CAU',
//   //   'https://bahcoherramientas.pe/wp-content/uploads/2019/10/FS.1.png',
//   //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtufwqeSCpRC9yFlpdYyhjMG5VCn0XaJ5ilg&usqp=CAU',
//   //   'https://img.freepik.com/fotos-premium/estadio-futbol-renderizado-3d-estadio-futbol-arena-campo-lleno-gente_3544-1361.jpg',
//   //   'https://www.cic.cl/on/demandware.static/-/Sites-CIC_CL-Library/es_CL/dw444e61e7/categorias-landing/camas/categoria-camas-01.jpg'
//   // ];

//   // const [cards, setCards] = useState([]);

//   // useEffect(() => {
//   //   const shuffledImages = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5);
//   //   setCards(shuffledImages);
//   // }, []);

//   const tamano = 4;



//   return (
//     <div className="container_tablero">
//       <section className="boa">
//       </section>
//       <section className="options">
//         <div className="timer"></div>
//         <div className="vidas"></div>
//         <div className="bonus">
//           <div className="botones_bonus">
//             <div className="transparencia">Transparencia</div>
//             <div className="pista">Pista</div>
//             <div className="algo_mas">Algo mas</div>
//           </div>
//         </div>
//       </section>
//     </div>
//     // <div className="board">
//     //   <div className="header">
//     //     <div className="username">Nombre de usuario</div>
//     //     <div className="header-right">
//     //       <div className="timer">01:00</div>
//     //       <div className="lives">
//     //         <span>Vidas:</span> 4
//     //       </div>
//     //       <div className="buttons">
//     //         <button className="bonus-button">Bonus</button>
//     //         <button className="options-button">Opciones</button>
//     //       </div>
//     //     </div>
//     //   </div>
//     //   <div className="cards">
//     //     {cards.map((image, index) => (
//     //       <div key={index} className="card">
//     //         <img src={image} alt="Card" />
//     //       </div>
//     //     ))}
//     //   </div>
//     // </div>
//   );
// }

// export default Board;
