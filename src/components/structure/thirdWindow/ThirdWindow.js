import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import Routing from "../../routing/Routing";
import Form from "../../form/Form";

import "./ThirdWindow.css";

class ThirdWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      ubicacion: null,
      lat: 40.4233784,
      lng: -3.692763,
      zoom: 13,
      isMapInit: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });
          {/*let coordenadasIniciales = JSON.parse(localStorage.getItem("coordenadas"));
  if (!coordenadasIniciales) {
    coordenadasIniciales = [];
  }
  //Array de coordenadas
  const [coordenadas, guardarCoordenadas] = useState(coordenadasIniciales);


  //Función que toma las cordenadas actuales
  const crearCoordenada = (coordenada) => {
    guardarCoordenadas([...coordenadas, coordenada]);
  };*/}
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log("pulse");
    this.props.history.push("/alerta");

  };

  

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div>
      <Map center={position} zoom={this.state.zoom} ref={this.saveMap}>
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        />
        {this.state.isMapInit && <Routing map={this.map} />}
      </Map>
      <Form //crearCoordenada={crearCoordenada} 
      />
      <button onClick={this.handleClick} className="add-alert"><p className="add-alert-p">Añadir alerta</p></button>
      </div>
    );
  }
}

export default ThirdWindow