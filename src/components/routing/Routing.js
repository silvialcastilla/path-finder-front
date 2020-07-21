import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";
import '../../api.json/api.json'
import './Routing.css'

class Routing extends MapLayer {
  createLeafletElement() {
    const { map, resultapi } = this.props;
    console.log(map)
    console.log(resultapi)
    let leafletElement = L.Routing.control({
      waypoints: [ 
]
    }).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
