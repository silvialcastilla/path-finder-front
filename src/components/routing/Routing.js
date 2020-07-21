import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";
import '../../api.json/api.json'
import './Routing.css'

class Routing extends MapLayer {
  createLeafletElement() {
    const map = this.props.map;
    const resultapi = this.props.resultapi;
    console.log(map)
    console.log(this.props);
    console.log(resultapi)
    let result;
    
    if (this.props.resultapi !== '') {
      result = resultapi.map(item => L.latLng(item[1], item[0]))
    }
    else {
      result = [];
    }

    //console.log(resultapi)
    let leafletElement = L.Routing.control({
      //waypoints: [L.latLng(40.4233784, -3.692763),L.latLng(40.44, -3.70), L.latLng(40.43, -3.70)]
      waypoints: result
    }).addTo(map.leafletElement);

    return leafletElement.getPlan();
  }

  componentDidUpdate() {
    this.createLeafletElement()
  }

}
export default withLeaflet(Routing);
