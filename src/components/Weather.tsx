import React, { Component } from 'react';
import DisplayData from './DisplayData';
import { PropsWeatherData } from './Interface';

type AcceptedProps = {
    latitude: number,
    longitude: number
}

type WeatherData = {
    data: PropsWeatherData
}

class Weather extends Component<AcceptedProps, WeatherData> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            data: {
                timezone: '',
                current: {
                    dew_point: 0,
                    feels_like: 0,
                    humidity: 0,
                    pressure: 0,
                    temp: 0
                }
            }
        }
    }

    componentDidMount() {
        console.log("Mount Weather",this.props);
        this.fetchWeather();
    }
    // static getDerivedStateFromProps(props, current_state) {
    //     console.log("Recieve props", props, current_state);
    //     return null;
    // }


    componentDidUpdate() {
        console.log("Update", this.props, this.state.data, Object.keys(this.state.data).length);
        // if (Object.keys(this.state.data).length === 0) {
        //     console.log("Calling log")
        //     this.fetchWeather();
        // }
    }

    fetchWeather = () => {
        const key = 'd404c26261f07ca6331a0f05996b1256';
        const baseUrl = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.latitude}&lon=${this.props.longitude}&exclude={part}&appid=${key}&units=imperial`

        const assignData = {};

        fetch(baseUrl, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .then((res) => res.json())
            .then((json) => {
                console.log("Json", json);
                console.log(json.current.weather[0]);

                Object.assign(assignData, json);
                console.log("Assign", assignData);

                this.setState({
                    data: json
                    // Object.assign(data,json)
                })
            })
            .catch(err => console.log(err));

    }

    render() {
        return (
            <div>
                <DisplayData data={this.state.data} />
            </div>
        )
    }
}

export default Weather;