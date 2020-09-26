import React, { FunctionComponent } from 'react';
import { PropsWeatherData } from './Interface';

type propsData = {
    data: PropsWeatherData
}



const DisplayData: FunctionComponent<propsData> = (props) => {
    console.log("Dsiplay",props.data);
    // let obj = {};
    // Object.assign(obj,props.data);
    // console.log(obj);

    // const d = 

    return(
        <div>
            <h2>Weather Info</h2>
            <p>You are in the timezone {props.data.timezone}</p>
            <p>Your current temperature is {props.data.current.temp}</p>
            <p>But it feels like {props.data.current.feels_like}</p>
            <p>The humidity is {props.data.current.humidity}</p>
        </div>
    )
}

export default DisplayData;