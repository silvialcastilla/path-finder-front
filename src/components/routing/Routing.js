/*import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";
import {
  Map,
  TileLayer,
  Polyline,
  Marker,
  Tooltip,
  Popup,
  Polygon,
} from "react-leaflet";
import '../../api.json/api.json'
import './Routing.css'

class Routing extends MapLayer {
  createLeafletElement() {
    const map = this.props.map;
    const resultapi = this.props.resultapi;
    let result;
    
    if (this.props.resultapi !== '') {
      result = resultapi.map(item => L.latLng(item[1], item[0]))
    }
    else {
      result = [];
    }


    var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
// zoom the map to the polygon
map.fitBounds(polygon.getBounds()); 
    
    //console.log(resultapi)
    let leafletElement = L.polygon(result,
      {
          color: 'red',
          weight: 10,
          opacity: .7,
          dashArray: '20,15',
          lineJoin: 'round'
      }
      ).addTo(map);

      map.fitBounds(leafletElement.getBounds());

    return leafletElement;
  }

  componentDidUpdate() {
    this.createLeafletElement()
  }

}
export default withLeaflet(Routing);
*/