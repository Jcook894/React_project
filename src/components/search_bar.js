import React, { Component } from 'react';

const inputStyle = {
  color: "black"

}

class SearchBar extends Component{
  render(){
    return(
      <div style={inputStyle}>
        <input value="Hello"> </input>
        <button> Search for a Bar !</button>
      </div>
  );
 }
}

export default SearchBar;
