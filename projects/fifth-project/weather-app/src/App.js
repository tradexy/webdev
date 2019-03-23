import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather.js";

const API_KEY = "e125dc5fb0b53072b1aefd388695370b";
//const API_KEY = "3585775f387b0d0cba6c5b3dc41b8167";
//const API_KEY = "b6907d289e10d714a6e88b30761fae22";

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    //const city = e.target.elements.name.city.value;
    //const country = e.target.elements.name.city.value;
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric');
    //const api_call = await fetch(/components/test.json);
    const data = await api_call.json();
    console.log(data);
  }
    render() {
        return (
            <div>
                <Titles />
                <Form getWeather={this.getWeather}/>
                <Weather />
            </div>
        );
    }
};

export default App;