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
      lat: "",
      lng: "",
      zoom: 15,
      isMapInit: false,
    };
    this.handleClickAlert = this.handleClickAlert.bind(this);
    this.handleClickHelp = this.handleClickHelp.bind(this);
  }



  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      function location(position) {
        this.setState({
          ...this.state,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        console.log(position);
      }.bind(this)
    );
  }

  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });
  };

  handleClickHelp = (e) => {
    e.preventDefault();
    console.log("pulse");
    this.props.history.push("/ayuda");
  };

  handleClickAlert = (e) => {
    e.preventDefault();
    console.log("pulse");
    this.props.history.push("/alerta");
  }

  

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div>
        <Form/>
        <button onClick={this.handleClickHelp} className="help">
        <img
            src="img/Help/ButtonHelp/ButtonHelp.svg"
            src="img/ThirdWindow/PlusCircleGrey/PlusCircleGrey.png"
            alt="logo"
            srcSet="img/ThirdWindow/PlusCircleGrey/PlusCircleGrey@2x.png 2x, img/ThirdWindow/PlusCircleGrey/PlusCircleGrey@3x.png 3x"
            className="add-alert-img"
          ></img>
        </button>
        <Map center={position} zoom={this.state.zoom} ref={this.saveMap}>
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
          />
          {this.state.isMapInit && <Routing map={this.map} />}
        </Map>
        <button onClick={this.handleClickAlert} className="add-alert">
          <p className="add-alert-p">Añadir alerta</p>
          <img
            src="img/ThirdWindow/PlusCircleGrey/PlusCircleGrey.svg"
            src="img/ThirdWindow/PlusCircleGrey/PlusCircleGrey.png"
            alt="logo"
            srcSet="img/ThirdWindow/PlusCircleGrey/PlusCircleGrey@2x.png 2x, img/ThirdWindow/PlusCircleGrey/PlusCircleGrey@3x.png 3x"
            className="add-alert-img"
            ></img>
            </button>
          </div>
        );
      }
    }

export default ThirdWindow