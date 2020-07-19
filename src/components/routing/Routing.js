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
      waypoints: [L.latLng(40.4233784, -3.692763), L.latLng(40.43, -3.70)]
    }).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);

{/*En waypoints: [L.latLng({coordenada.origin}), L.latLng({coordenada.destiny})*/}