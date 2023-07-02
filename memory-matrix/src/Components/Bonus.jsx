import React, { useState, useEffect } from 'react';
import '../Styles/Bonus.css';


export default function Bonus(props){
    
    const handleVistaBonus = () => {
        props.handleVista('oculto');
    };

    return <div className={`bonus-modal ${props.visible}`}>
            <div className="container">
                <div className='type-bonus' onClick={handleVistaBonus}>
                    <h1>{ props.tipos[0].tipo }</h1>
                </div>
                <div className='type-bonus' onClick={handleVistaBonus}>
                    <h1>{ props.tipos[1].tipo }</h1>
                </div>
                <div className='type-bonus' onClick={handleVistaBonus}>
                    <h1>{ props.tipos[2].tipo }</h1>
                </div>
            </div>
        </div>
}
