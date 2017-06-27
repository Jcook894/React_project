import React, {Component} from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';



const mapStyle = {
  height: "500px",
  width: "500px",
  margin: "auto"
}
const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
}

const x = document.getElementById("loc");

const getLoc = () => {
  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

}

const showPosition = (position) => {
  //  x.innerHTML = "Latitude: " + position.coords.latitude +
    //"<br>Longitude: " + position.coords.longitude;
    alert(position.coords.latitude);
}



class Maps extends Component{

  componentDidMount(){
    this.map = new google.maps.Map(this.refs.map, {
     center: EIFFEL_TOWER_POSITION,
     zoom: 16
   });

   console.log(getLoc());


  }


  render(){
    return (
      <div id="loc" ref="map" style={mapStyle}>I should be a map!</div>
    );
  }
}

export default Maps;
