import React from "react";
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
      resultapi: '',
      steps: ''
    };
    this.handleClickAlert = this.handleClickAlert.bind(this);
    this.handleClickHelp = this.handleClickHelp.bind(this);
    this.outputEvent = this.outputEvent.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      function location(position) {
        this.setState({
          ...this.state,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      }.bind(this)
    );
  }

  saveMap = (map) => {
    this.map = map;
    this.setState({
      ...this.state,
      isMapInit: true,
    });
  };

  outputEvent(resultapi,steps) {
    this.setState({ ...this.state, resultapi: resultapi, steps: steps });
    console.log(this.state)
  }

  handleClickHelp = (e) => {
    e.preventDefault();
    this.props.history.push("/ayuda");
  };

  handleClickAlert = (e) => {
    e.preventDefault();
    this.props.history.push("/alerta");
  };
  handleClickSteps = (e) => {
    e.preventDefault();
    this.props.history.push("/pasos");
  };
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div>
        <Map center={position} zoom={this.state.zoom} ref={this.saveMap} className="map-box">
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
          />
          {this.state.isMapInit && <Routing map={this.map} resultapi={this.state.resultapi} />}
        </Map>
        <img
          onClick={this.handleClickHelp}
          src="img/Help/ButtonHelp/ButtonHelp.svg"
          src="img/Help/ButtonHelp/ButtonHelp.svg"
          alt="logo"
          srcSet="img/Help/ButtonHelp/ButtonHelp.svg@2x.png 2x,img/Help/ButtonHelp/ButtonHelp.svg@3x.png 3x"
          className="help"
        ></img>
                <div>
          <Form className="form" clickHandler={this.outputEvent} />
        </div>
        <button onClick={this.handleClickAlert} className="add-alert-btn">
          <img
            src="img/ThirdWindow/CircleAddAlert/CircleAddAlert.svg"
            src="img/ThirdWindow/CircleAddAlert/CircleAddAlert.png"
            alt="logo"
            srcSet="img/ThirdWindow/CircleAddAlert/CircleAddAlert@2x.png 2x, img/ThirdWindow/CircleAddAlert/CircleAddAlert@3x.png 3x"
            className="add-alert-img"
          ></img>
          <p className="add-alert-p">Añadir alerta</p>
        </button>
        <button onClick={this.handleClickSteps} steps={this.state.steps} className="add-alert-btn">
          <img
            src="img/ThirdWindow/CircleAddAlert/CircleAddAlert.svg"
            src="img/ThirdWindow/CircleAddAlert/CircleAddAlert.png"
            alt="logo"
            srcSet="img/ThirdWindow/CircleAddAlert/CircleAddAlert@2x.png 2x, img/ThirdWindow/CircleAddAlert/CircleAddAlert@3x.png 3x"
            className="add-alert-img"
          ></img>
          <p className="add-alert-p">Pasos</p>
        </button>
      </div>
    );
  }
}

export default ThirdWindow;
