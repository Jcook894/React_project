import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {search} from '../actions/index';


const inputStyle = {
  color: "black"

}



class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){

    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event){
    console.log("you have searched in the location of " + this.state.term);

    event.preventDefault();

    this.props.search(this.state.term);
    this.setState({
      term: ""
    });
    console.log(this.state);

  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} style={inputStyle}>
        <label>
          <input type="text" value={this.state.term} onChange={this.onInputChange} />
        </label>
        <button type="submit" className="btn btn-primary"> Search for a Bar !</button>
      </form>
  );
 }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({search}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
