import React, { useState, useEffect } from 'react';
import '../Styles/Opsiones.css';
import { domain } from '../Controllers/params'


export default function Opsiones(props){
    
    const handleVistaOpsiones = () => {
        props.handleVista('oculto');
    };

    const deleteGame = () => {
        const url = domain + '/newGame/Delete'
        const respuesta = confirm('¿Se borrará la partida?')
        if (respuesta){
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    "usuario": {
                        "id": localStorage.getItem('user_id')
                    },
                    "partida": {
                        "id": localStorage.getItem('partida_id')
                    }
                }),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
                .then(() => {
                    localStorage.clear()
                })
            location.replace('/')
            return
        }
    }

    function pausa() {
        alert('Todavía no está terminado');
        clearInterval(props.interval)
    }

    function volver() {
        alert('Todavía no está terminado');
        props.interval()
    }

    function save() {
        alert('Opsión no disponible')
    }

    return (
    <div className={`opsiones-modal ${props.visible}`}>
        <div className="container-options" onClick={handleVistaOpsiones}>
            <div className='type-option' onClick={pausa}>
                <h1> Pausar </h1>
            </div>
            <div className='type-option' onClick={deleteGame}>
                <h1> Abandonar </h1>
            </div>
            <div className='type-option' onClick={save}>
                <h1> Guardar </h1>
            </div>
            <div className='type-option' onClick={volver}>
                <h1> Volver </h1>
            </div>
        </div>
    </div>
    )
}