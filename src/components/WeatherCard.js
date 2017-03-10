import React from 'react';
import '../App.css';

class WeatherCard extends React.Component {

  constructor(props){
    super(props)
  }

  getImage(){
    if (this.props.data.list){
      return this.props.day.weather[0].icon
    } else {
      return ''
    }
  }

  getDayOfWeek(d){
    let day = new Date(d*1000);
    let numDay = day.getDay();
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[numDay];
  }

  render(){

    return (
      <li>
        <span className="listView">{this.props.dayname}</span>
        <img src={`http://openweathermap.org/img/w/${this.getImage()}.png`} className="listview"/>
        <div className="listView">{Math.round(this.props.day.main.temp)}&deg;</div>
      </li>
    )

  }

}

export default WeatherCard;
