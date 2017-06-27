import React, {Component} from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';



const mapStyle = {
  height: "500px",
  width: "500px",
  margin: "auto"
}

const INITAL_POSITION = {
  address: 'London, United Kingdom',
  position:{
    lat: 48.858608,
    lng: 2.294471
  }
}

const INITAL_ZOOM = 16;



class Maps extends Component{

  componentDidMount(){
    this.map = new google.maps.Map(this.refs.map, {
     center: {
       lat: INITAL_POSITION.position.lat,
       lng: INITAL_POSITION.position.lng
     },
     zoom: INITAL_ZOOM

   });

   this.marker = new google.maps.Marker({
     map: this.map,
     position: {
       lat: INITAL_POSITION.position.lat,
       lng: INITAL_POSITION.position.lng
     }
   });

  }


  render(){
    return (
      <div id="loc" ref="map" style={mapStyle}>I should be a map!</div>
    );
  }
}

export default Maps;
