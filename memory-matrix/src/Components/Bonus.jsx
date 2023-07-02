import React, { useState, useEffect } from 'react';
import '../Styles/Bonus.css';


export default function Bonus(props){
    
    const handleVistaBonus = () => {
        props.handleVista('oculto');
    };

    let listaBonus = [];
    props.tipos.map((bonus, index) => {
        listaBonus.push(
            <div className='type-bonus' onClick={handleVistaBonus}>
                <h1>{ bonus.tipo }</h1>
            </div>
        )
    })

    return <div className={`bonus-modal ${props.visible}`}>
            <div className="container-bonus">
                {listaBonus}
            </div>
        </div>
}
