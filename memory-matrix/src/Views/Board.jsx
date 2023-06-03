import React, { useState, useEffect } from 'react';
import '../Styles/Board.css';

const Board = () => {
  const cardImages = [
    '../assets/1.png',
    '../assets/3.png',
    '../assets/5.png',
    '../assets/7.png',
    '../assets/9.png',
    '../assets/11.png',
    '../assets/13.png',
    '../assets/15.png'
  ];

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const shuffledImages = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5);
    setCards(shuffledImages);
  }, []);

  return (
    <div className="board">
      <div className="header">
        <div className="username">Nombre de usuario</div>
        <div className="header-right">
          <div className="timer">00:00</div>
          <div className="lives">
            <span>Vidas:</span> 3
          </div>
          <div className="buttons">
            <button className="bonus-button">Bonus</button>
            <button className="options-button">Opciones</button>
          </div>
        </div>
      </div>
      <div className="cards">
        {cards.map((image, index) => (
          <div key={index} className="card">
            <img src={image} alt="Card" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
