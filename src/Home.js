import React from 'react';
import axios from "axios";
import css from "./App.css";
import Form from "./Components/Form";
import Titles from "./Components/Titles";
import Weather from "./Components/Weather";


const REACT_APP_KEY ='fd8a7245b8a05140321698de9c5d573f';

class Home extends React.Component{
  state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: ""
    }

  getWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;

  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${REACT_APP_KEY}`).then(response => {
    if(city && country){
    this.setState({
      temperature: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      error: ""
    })
    }else{
      this.setState({
        error: "Please enter a location"
      })
    }
    console.log(response)
  })
  }

   render(){
    return(
      <div>
        <Titles />
        <Form 
        loadWeather={this.getWeather} />
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />
      </div>
   )
  }
}

export default Home;