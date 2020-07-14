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
    this.handleClickAlert = this.handleClickAlert.bind(this);
    this.handleClickHelp = this.handleClickHelp.bind(this);
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

  handleClickHelp = (e) => {
    e.preventDefault();
    console.log("pulse");
    this.props.history.push("/help");

  };

  handleClickAlert = (e) => {
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
        <button onClick={this.handleClickHelp} className="help">Hola</button>
          <button onClick={this.handleClickAlert} className="add-alert"><p className="add-alert-p">Añadir alerta</p>
            <img
              src="img/ThirdWindow/PlusCircleGrey/PlusCircleGrey.svg"
              src="img/ThirdWindow/PlusCircleGrey/PlusCircleGrey.png"
              alt="logo"
              srcSet="img/ThirdWindow/PlusCircleGrey/PlusCircleGrey@2x.png 2x, img/ThirdWindow/PlusCircleGrey/PlusCircleGrey@3x.png 3x"
              className="add-alert-img"
            ></img></button>
      </div>
    );
  }
}

export default ThirdWindow