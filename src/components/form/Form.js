import React, {useState} from "react";
import './Form.css'


const Form = ({crearCoordenada}) => {
    const [coordenada, actualizarCoordenada] = useState({
        origin: '',
        destiny: '',
        lat: '',
        lng: ''
    })
    
    const [ error, actualizarError ] = useState(false)
    
    const actualizarState = e => {
        actualizarCoordenada({
            ...coordenada,
            [e.target.name]: e.target.value
        })
    }
    
    const {origin, destiny} = coordenada
    
        // Cuando el usuario presiona agregar cita
        const submitCoordenada = e => {
            e.preventDefault();
    
            // Validar
            if(origin.trim() === '' || destiny.trim() === ''){
                actualizarError(true);
                return;
            }
            // Eliminar el mensaje previo 
            actualizarError(false);


            
    
    
            // Crear la cita
           crearCoordenada(coordenada.lat, coordenada.lng)
    
            // Reiniciar el form
            actualizarCoordenada({
                origin: '',
                destiny: ''
            })


        }

    
    return (
        <form className="form"
        onSubmit={submitCoordenada}>
            <div className="finder">
                    <label htmlFor="origin"></label>
                    <input type="text" id="origin" name="origin" onChange={actualizarState} />
                    <label htmlFor="destiny"></label>
                    <input type="text" id="destiny" name="destiny" onChange={actualizarState} />
                    <button type="submit">Ir</button>
            </div>
        </form>
    )
}

export default Form;
