import React, {Component} from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const longy = parseFloat(geoplugin_longitude());
const latty = parseFloat(geoplugin_latitude());

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

const INITAL_ZOOM = 12;



class Maps extends Component{

  componentDidMount(){
    this.map = new google.maps.Map(this.refs.map, {
    center: {lat: latty, lng: longy},
    zoom: INITAL_ZOOM

   });

   this.marker = new google.maps.Marker({
     map: this.map,
     position: {
       lat: latty,
       lng: longy
     }
   });



console.log(latty);
  }


  render(){
    return (
      <div id="loc" ref="map" style={mapStyle}>I should be a map!</div>
    );
  }
}

export default Maps;
