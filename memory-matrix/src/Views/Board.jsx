import React, { useState } from "react";
import '../Styles/Board.css';

const Board = () => {
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
        {[...Array(16)].map((_, index) => (
          <div key={index} className="card"></div>
        ))}
      </div>
    </div>
  );
}

export default Board;
