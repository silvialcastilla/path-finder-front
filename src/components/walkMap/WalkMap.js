import React from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import L from 'leaflet'
import "leaflet/dist/leaflet.css";
//import 'leaflet-routing-machine';

//import places2016 from './data/places_2016.js';
//import places2017 from './data/places_2017.js';
//import places2018 from './data/places_2018.js';


class WalkMap extends React.Component {
  render() {
    const styleMap = { "width": "100%", "height": "60vh" }
  {/*  function getStyle(feature, layer) {
      return {
        weight: 1,
        opacity: 1,
        color: '#000'
      }
    }
    const geojsonMarkerOptions = {
      radius: 4,
      fillColor: "#EE4266",
      color: "#000",
      weight: 0,
      opacity: 1,
      fillOpacity: 0.4
    }
    function pointToLayer(feature, latlng) {
      return L.circleMarker(latlng, geojsonMarkerOptions);
    }*/}
    return (
      <Map
      className="mock-map"
        style={styleMap}
        center={[40.4233784, -3.692763,10]}
        zoom={12}>

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

          {/*<GeoJSON
    data={places2016}
    pointToLayer={pointToLayer2016}
  />
  <GeoJSON
    data={places2017}
    pointToLayer={pointToLayer2017}
  />
  <GeoJSON
    data={places2018}
    pointToLayer={pointToLayer2018}
          />
          
          PARA PONER LA RUTA USAREMOS WAYPOINTS EN LEAFLEFT*/}
      </Map>
      
    )
  }

}

export default WalkMap;
