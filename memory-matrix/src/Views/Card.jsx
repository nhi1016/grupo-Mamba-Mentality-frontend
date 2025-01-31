import React, { useState } from 'react';
import '../Styles/Card.css';
import { domain } from '../Controllers/params'

const Card = ({ image, identifier, setVidas }) => {
  const [flipped, setFlipped] = useState(false);
  const [status, setStatus] = useState(`card-inner `)
  // `card-inner ${flipped ? 'flipped' : ''}`

  const handleClick = async (elem) => {
    // setFlipped(!flipped);
    // let clase = `card-inner ${flipped ? 'flipped' : ''}`
    // setStatus(clase)
    const imgSelected = localStorage.getItem('img_selected')
    
    if (imgSelected == 0) {
      let imagen = JSON.parse(localStorage.getItem('imagenes'))
      imagen = imagen[elem.currentTarget.id]
      if (imagen.bloqueada == 0){
        setStatus('card-inner flipped')
        localStorage.setItem('img_selected', 1)
        localStorage.setItem('id_img1', elem.currentTarget.id)
      } else {
        alert('no se puede escoger esta imagen')
      }
    } else {
        let imagen = JSON.parse(localStorage.getItem('imagenes'))
        imagen = imagen[elem.currentTarget.id]
        if (imagen.bloqueada == 0) {
          setStatus('card-inner flipped')
          localStorage.setItem('img_selected', 0)
          const img1 = localStorage.getItem('id_img1')
          const img2 = elem.currentTarget.id

          await fetch(domain + '/Game/checkimages', {
            method: 'POST',
            body: JSON.stringify({
              "partida": {
                "id": localStorage.getItem('partida_id'),
                "vidas": localStorage.getItem('vidas'),
                "tiempo_disponible": localStorage.getItem('tiempoRestante'),
              },
              "tablero": {
                "id": localStorage.getItem('tablero_id'),
              },
              "id_img1": +img1,
              "id_img2": +img2,
            }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            if (data.relacion_imagenes == '1') {
                // Imagenes calzan
                if (data.partida.activa) {
                  alert('Imagenes correctas, Se bloquean las imagenes')
                  let imagenes = JSON.parse(localStorage.getItem('imagenes'))
                  imagenes[img1].bloqueada = 1
                  imagenes[img2].bloqueada = 1
                  localStorage.setItem('imagenes', JSON.stringify(imagenes))
                  // console.log(imagenes[])
                } else {
                  alert('Genial, ganaste')
                }
            } else {
                // Imagenes equivocadas
                if (data.partida.activa) {
                  let vidas = +localStorage.getItem('vidas') - 1
                  localStorage.setItem('vidas', vidas)
                  setVidas(vidas)
                  alert('Imagenes incorrectas, perdiste 1 vida, se voltean las imagenes')
                  setStatus('card-inner')
                  document.getElementById(`div${+img1}`).classList.remove('flipped')

                } else {
                  let vidas = +localStorage.getItem('vidas') - 1
                  localStorage.setItem('vidas', vidas)
                  setVidas(vidas)
                  alert('Lo siento perdiste')
                }
            }
          })
        } else {
          alert('No se puede elegir esta imagen')
        }
    }
  };

  return (
    <div id={identifier} className="card" onClick={handleClick}>
      <div id={`div${identifier}`} className={status}>
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
