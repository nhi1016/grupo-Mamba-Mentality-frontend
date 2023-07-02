import React, { useState } from 'react';
import '../Styles/Card.css';

const Card = ({ image }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front">
          <img src="https://perrosexpertos.com/wp-content/uploads/2018/11/Imagenes-de-perros-05.jpg" alt="Card" />
        </div>
        <div className="card-back">
          <img src={image} alt="Card" />
        </div>
      </div>
    </div>
  );
};

export default Card;
