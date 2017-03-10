import React from 'react';
import '../App.css';

class Search extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      location: ''
    }
  }

  handleClick(){
    this.props.fetchData(this.state.location);
  }

  getValue(evt){
    this.state.location = evt.target.value;
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.props){
      this.props.fetchData(this.state.location);
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      location: event.target.value
    });
  }

  render(){

    return (

      <div id="search">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder={"Type a city name here ..."} value={this.state.location} onChange={this.handleChange.bind(this)}/>
          <button id="submitButton" type="submit">GO</button>

        </form>
      </div>

    )

  };

}

export default Search;
