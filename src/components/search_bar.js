import React, { Component } from 'react';

const inputStyle = {
  color: "black"

}

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {value: ''};
  }
  render(){
    return(
      <form onstyle={inputStyle}>
        <input value="Hello"> </input>
        <button> Search for a Bar !</button>
      </form>
  );
 }
}

export default SearchBar;
