import React from "react";
import {
  Map,
  TileLayer,
  Polyline,
  Marker,
  Tooltip,
  Popup,
  Polygon,
} from "react-leaflet";
import L from "leaflet";
//import Routing from "../../routing/Routing";
import Form from "../../form/Form";
import { firebase } from "../../../firebase";

import "./ThirdWindow.css";

class ThirdWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      ubicacion: null,
      lat: "",
      lng: "",
      zoom: 14,
      isMapInit: false,
      resultapi: "",
      markers: [],
      popup: []
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
      this.makeMarker()
    //   const db = firebase.firestore()
    //   db.collection('alerts').get().then(
    //     (snapshot) => localStorage.setItem("dbLength",snapshot.docs.length)
    //  );
  }

  saveMap = (map) => {
    this.map = map;
    this.setState({
      ...this.state,
      isMapInit: true,
    });
  };

  outputEvent(resultapi) {
    this.setState({ ...this.state, resultapi: resultapi });
    console.log(this.state);
  }



  handleClickHelp = (e) => {
    e.preventDefault();
    this.props.history.push("/ayuda");
  };

  handleClickAlert = (e) => {
    e.preventDefault();
    console.log("pulse");
    localStorage.setItem("latitude", this.state.lat);
    localStorage.setItem("longitude", this.state.lng);
    this.props.history.push("/alerta");
  };
  handleClickSteps = (e) => {
    e.preventDefault();
    this.props.history.push("/pasos");
  };

  saveMap = (map) => {
    this.map = map;
    this.setState({
      ...this.state,
      isMapInit: true,
    });
  };

  makeMarker = async () => {
    try {
      const db = firebase.firestore();
      const data = await db.collection("alerts").get();
      const arrayData = await data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
        let arrayfinal = arrayData.map((item) => {
        return [parseFloat(item.latitude), parseFloat(item.longitude)]
      });
        let popup = arrayData.map((element) => {
          return [element.typeOfAlert, element.amountOfPeople, element.timestamp]
        })
        console.log(popup)
      this.setState({ ...this.state, markers: arrayfinal, popup: popup });

    } catch (error) {
      console.log(error);
    }
  };

  outputEvent(resultapi) {
    this.setState({ ...this.state, resultapi: resultapi });

    console.log(this.state);
  }


  render() {
    const position = [this.state.lat, this.state.lng];


    return (
      <div>
        <Map
          center={position}
          zoom={this.state.zoom}
          ref={this.saveMap}
          className="map-box"
        >
          <TileLayer url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png" />
    {this.state.markers.length > 0 ? this.state.markers.map((element, id) => <Marker position={element} >
      <Popup>
        {`Tipo de alerta: ${this.state.popup[id]}, Cantidad de gente: ${this.state.popup[id]} `}
      </Popup></Marker>  ) : ''}

          <Polyline
            color="red"
            positions={
              this.state.resultapi !== ""
                ? this.state.resultapi.map((item) => L.latLng(item[1], item[0]))
                : []
            }
          />
        </Map>
        <img
          onClick={this.handleClickHelp}
          src="img/Help/ButtonHelp/ButtonHelp.svg"
          src="img/Help/ButtonHelp/ButtonHelp.png"
          alt="logo"
          srcSet="img/Help/ButtonHelp/ButtonHelp.svg@2x.png 2x,img/Help/ButtonHelp/ButtonHelp.svg@3x.png 3x"
          className="help"
        ></img>
        <div>
          <Form className="form" clickHandler={this.outputEvent} />
        </div>
        <button onClick={this.handleClickAlert} className="button-alert">
          <div className="button-alert-div">
            <img
              src="img/ThirdWindow/CircleAddAlert/CircleAddAlert.svg"
              src="img/ThirdWindow/CircleAddAlert/CircleAddAlert.png"
              alt="logo"
              srcSet="img/ThirdWindow/CircleAddAlert/CircleAddAlert@2x.png 2x, img/ThirdWindow/CircleAddAlert/CircleAddAlert@3x.png 3x"
              className="button-alert-img"
            ></img>
            <p className="button-alert-p">Añadir alerta</p>
          </div>
        </button>
      </div>
    );
  }
}

export default ThirdWindow;
