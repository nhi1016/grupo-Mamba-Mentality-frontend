import React from 'react';
import '../Styles/Card.css';

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image} alt="Card" />
    </div>
  );
};

export default Card;
