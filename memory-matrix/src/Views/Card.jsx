import React, { useState } from 'react';
import '../Styles/Card.css';

const Card = ({ image }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <span>?</span>
        </div>
        <div className="card-back">
          <img src={image} alt="Card" />
        </div>
      </div>
    </div>
  );
};

export default Card;
