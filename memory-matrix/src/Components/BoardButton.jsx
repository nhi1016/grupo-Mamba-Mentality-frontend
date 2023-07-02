import React from 'react';
import '../Styles/BoardButton.css';

const BoardButton = ({ label, onClick }) => {
  return (
    <button className="board-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default BoardButton;
