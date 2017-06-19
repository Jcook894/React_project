import React, { Component } from 'react';

const inputStyle = {
  color: "black"

}

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    console.log("you have searched in the location of " + this.state.value);
    event.preventDefault();
    this.setState({
      value: ""
    });

  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} style={inputStyle}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type="submit"> Search for a Bar !</button>
      </form>
  );
 }
}

export default SearchBar;
