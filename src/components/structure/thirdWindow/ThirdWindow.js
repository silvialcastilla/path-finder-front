import React, { useState} from "react";
import Form from "../../form/Form";
import Button from "../../button/Button";
import LeafletMap from "../../leafletMap/LeafletMap";

import "./ThirdWindow.css";

const ThirdWindow = () => {
  let coordenadasIniciales = JSON.parse(localStorage.getItem("coordenadas"));
  if (!coordenadasIniciales) {
    coordenadasIniciales = [];
  }
  //Arreglo de coordenadas
  const [coordenadas, guardarCoordenadas] = useState(coordenadasIniciales);


  //Función que toma las cordenadas actuales
  const crearCoordenada = (coordenada) => {
    guardarCoordenadas([...coordenadas, coordenada]);
  };

  return (
    <div className="third-page">
      <div className="form-page">
        <Form crearCoordenada={crearCoordenada} />
      </div>
      <LeafletMap/>
      <Button />
    </div>
  );
};

export default ThirdWindow;
