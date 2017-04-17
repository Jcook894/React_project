import React, { Component } from 'react';


const headerStyle = {
  background: "grey",
  color: "white",
  textAlign: "center",
  padding: "10px"
};

export default class App extends Component {

  render() {
    return (
      <div style={headerStyle}> Bar App </div>
    );
  }
}
