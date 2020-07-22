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
      console.log(result)
      L.latLng([40.421725, -3.691808])
    }
    else {
      result = [];
    }

    var greenIcon = new L.Icon({
      iconUrl: 'https://iconsplace.com/wp-content/uploads/_icons/000000/256/png/line-icon-256.png',
      iconSize: [10, 10],
      iconAnchor: [10, 10],
      popupAnchor: [1, -34]
    });

    var blue = new L.Icon({
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Location_dot_red.svg/1024px-Location_dot_red.svg.png',
      iconSize: [25, 25],
      iconAnchor: [10, 10],
      popupAnchor: [1, -34],
    });
    
    //console.log(resultapi)
    let leafletElement = L.Routing.control({
      waypoints: result,
      createMarker: function(i, wp, nWps) {
        if (i === 0 || i === nWps - 1) {
          // here change the starting and ending icons
          return L.marker(wp.latLng, {
            icon: blue // here pass the custom marker icon instance
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
