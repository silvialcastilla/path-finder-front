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
    let result;
    
    if (this.props.resultapi !== '') {
      result = resultapi.map(item => L.latLng(item[1], item[0]))
    }
    else {
      result = [];
    }

    var greenIcon = new L.Icon({
      iconUrl: 'https://img1.freepng.es/20180420/kaw/kisspng-new-moon-symbol-information-dots-clipart-5ad9aff0097d06.3898225115242157920389.jpg',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    
    //console.log(resultapi)
    let leafletElement = L.Routing.control({
      //waypoints: [L.latLng(40.4233784, -3.692763),L.latLng(40.44, -3.70), L.latLng(40.43, -3.70)]
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

    var polyline = L.polyline(result,
      {
          color: 'red',
          weight: 10,
          opacity: .7,
          dashArray: '20,15',
          lineJoin: 'round'
      }
      ).addTo(map.leafletElement);

      map.leafletElement.fitBounds(polyline.getBounds());

    return leafletElement.getPlan();
  }

  componentDidUpdate() {
    this.createLeafletElement()
  }

}
export default withLeaflet(Routing);
