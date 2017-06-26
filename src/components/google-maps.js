import React, {Component} from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


const mapStyle = {
  height: "500px",
  width: "500px"
}
const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
};

class Maps extends Component{

  componentDidMount(){
    this.map = new google.maps.Map(this.refs.map, {
     center: EIFFEL_TOWER_POSITION,
     zoom: 16
   });
  }

  render(){
    return (
      <div ref="map" style={mapStyle}>I should be a map!</div>
    );
  }
}

export default Maps;
