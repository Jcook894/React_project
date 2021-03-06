import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import BarInfo from '../containers/bar-info';
import Maps from '../components/google-maps';




const headerStyle = {
  background: "grey",
  color: "white",
  textAlign: "center",
  padding: "10px"
};

export default class App extends Component {

  render() {
    return (
      <div style={headerStyle}>
        <h1>Bar Search</h1>
        <SearchBar />
        <Maps />

        </div>

    );
  }
}
