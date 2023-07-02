import React, { useState, useEffect } from 'react';
import '../Styles/Opsiones.css';


export default function Opsiones(props){
    
    const handleVistaOpsiones = () => {
        props.handleVista('oculto');
    };

    return (
    <div className={`opsiones-modal ${props.visible}`}>
        <div className="container-options">
            <div className='type-option' onClick={handleVistaOpsiones}>
                <h1> Pausar </h1>
            </div>
            <div className='type-option' onClick={handleVistaOpsiones}>
                <h1> Abandonar </h1>
            </div>
            <div className='type-option' onClick={handleVistaOpsiones}>
                <h1> Guardar partida </h1>
            </div>
        </div>
    </div>
    )
}