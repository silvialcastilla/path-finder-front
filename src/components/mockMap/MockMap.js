import React from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";


class MockMap extends React.Component {
  render() {
    const styleMap = { "width": "100%", "height": "60vh" }
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
      </Map>
      
    )
  }

}

export default MockMap;
