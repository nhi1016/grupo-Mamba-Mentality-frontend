import '../Styles/BoardButton.css';

export default function BoardButton({onClick, showImage}){
  return(
    <div>
      <button onClick={onClick}>
        {showImage ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  )
}