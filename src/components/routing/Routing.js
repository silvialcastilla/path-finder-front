import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";
import './Routing.css'

class Routing extends MapLayer {
  createLeafletElement() {
    const map = this.props.map;
    const resultapi = this.props.resultapi;
    let result;
    let line;
    
    if (this.props.resultapi !== '') {
      result = resultapi.map(item => L.latLng(item[1], item[0]))
    }
    else {
      result = [];
    }


    var greenIcon = new L.Icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    

    //console.log(resultapi)
    let leafletElement = L.Routing.control({
      waypoints: result,
      createMarker: function(i, wp, nWps) {
        if (i === 0 || i === nWps - 1) {
          // here change the starting and ending icons
          return L.marker(wp.latLng, {
            icon: greenIcon // here pass the custom marker icon instance
          });
        } else {
          // here change all the others
          return L.marker(wp.latLng, {
            icon: greenIcon
          });
        }
      }
}).addTo(map.leafletElement);

    return leafletElement.getPlan();
  }

  componentDidUpdate() {
    this.createLeafletElement();
  }

}
export default withLeaflet(Routing);
