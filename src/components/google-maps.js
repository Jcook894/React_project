import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import { connect }from 'react-redux';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

export const lng = parseFloat(geoplugin_longitude());
export const lat = parseFloat(geoplugin_latitude());

const INITAL_ZOOM = 12;

const mapStyle = {
  height: "500px",
  width: "500px",
  margin: "auto"
}


class Maps extends Component{

  componentDidMount(){
    this.map = new google.maps.Map(this.refs.map, {
    center: {lat: lat, lng: lng},
    zoom: INITAL_ZOOM


   });

   this.marker = new google.maps.Marker({
     map: this.map,
     position: {
       lat: lat,
       lng: lng
     }
   });

   console.log(this.state);

  }

  render(){

    return (
      <div id="loc" ref="map" style={mapStyle}>I should be a map!</div>
    );
  }
}

function mapStateToProps({ search }){
  return  { search };

}

export default connect(mapStateToProps)(Maps);
