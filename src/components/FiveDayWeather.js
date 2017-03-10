import React from 'react';
import '../App.css';
import WeatherCard from "./WeatherCard"

class FiveDayWeather extends React.Component {

  constructor(props){
    super(props)
  }

  getImage(){
    if (this.props.data.list){
      return this.props.data.list[0].weather[0].icon
    } else {
      return ''
    }
  }

  getDays(){
    var cards = [];
    if(this.props.location){
      for(var i = 1; i < 6; i++){
        cards.push(this.props.data.list[i])
      }
    }

    return cards;
  }

  calculateDays(){
    var day = new Date();
    var numDay = day.getDay();
    var numDay = numDay + 1;
    if (numDay == 7){
      numDay = 0
    }
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    var fivedays = []
    for(var i = 0; i < 6; i++){
      fivedays[i] = days[numDay]
      numDay = numDay + 1;
      if (numDay == 7){
        numDay = 0;
      }
    }

    return fivedays

  }


  render(){

    var daysCovered = this.calculateDays();
    if(this.props.location){
      var weatherCards = this.getDays()
      var components = weatherCards.map((day, i) => {
        return (
              <WeatherCard day={day} data={this.props.data} dayname={daysCovered[i]}/>
        )
      })

    }

    return (
      <div>
        {this.props.location ? (
          <div className="fiveday">
          <h4>Five Day Forcast</h4>
          {components}
          </div>
        ) : ("")}
      </div>
    )

  }

}

export default FiveDayWeather;

/*<img src={`http://openweathermap.org/img/w/${this.getImage()}.png`} /> */
