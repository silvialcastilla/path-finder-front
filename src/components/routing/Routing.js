import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";
import '../../api.json/api.json'
import './Routing.css'

class Routing extends MapLayer {
  createLeafletElement() {
    const { map } = this.props;
    let leafletElement = L.Routing.control({
      waypoints: [L.latLng(this.props.resultapi)]
    }).addTo(map.leafletElement);
    console.log(this.props.resultapi)
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
