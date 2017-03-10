import React from 'react';
import '../App.css';

class TodaysWeather extends React.Component {

  getLocationName(){
    if(this.props.location){
      return this.props.location.name
    } else {
      return ''
    }
  }

  getCurrentTemp(){
    if (this.props.data.list) {
      return this.props.data.list[0].main.temp;
    } else {
      return ''
    }
  }

  getHighTemp(){
    if (this.props.data.list) {
      return this.props.data.list[0].main.temp_max
    } else {
      return ''
    }
  }
  getLowTemp(){
    if (this.props.data.list) {
      return this.props.data.list[0].main.temp_min;
    } else {
      return ''
    }
  }

  getImage(){
    if (this.props.data.list){
      return this.props.data.list[0].weather[0].icon
    } else {
      return ''
    }
  }

  render(){


      return (
        <div>
          <h2>{this.getLocationName()}</h2>
          {this.props.location ? (
            <div id="todaysWeather">
              <h3>Today</h3>
              <img src={`http://openweathermap.org/img/w/${this.getImage()}.png`} />
              <div className="currentTemp"> {Math.round(this.getCurrentTemp())}&deg;</div>
              <div className="highTemp"><span className='orange'>High:</span> {Math.round(this.getHighTemp())}&deg;</div>
              <div className="lowTemp"><span className='orange'>Low:</span> {Math.round(this.getLowTemp())}&deg;</div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )

  }

}

export default TodaysWeather;
