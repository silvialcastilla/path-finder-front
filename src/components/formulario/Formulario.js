import React from "react";
import './Formulario.css'

const Formulario = () => {
    return (
        <form className="form">
            <div className="finder">
                    <label for="origin">Fecha de Ida</label>
                    <input type="text" id="origin" name="origin" />
                    <label for="destiny">Fecha de Vuelta</label>
                    <input type="text" id="destiny" name="destiny" />
            </div>
            <div>
                <button class="buscar">Búscame</button>
            </div>
        </form>
    )
}

export default Formulario;
