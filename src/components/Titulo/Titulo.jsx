import './Titulo.css'

function Titulo ({ titulo = 'titulo por defecto'}) {
    return(
        <div >
             <h1 className="greetings-big">{titulo}</h1>
        </div>
    )
  }


  export default Titulo