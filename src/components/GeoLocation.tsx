import React, { Component } from 'react';
import Weather from './Weather';

type AcceptedProps = {

}

type LocationState = {
    latitude: number,
    longitude: number
}

class GeoLocation extends Component<AcceptedProps, LocationState> {
    constructor(props: AcceptedProps){
        super(props)
        this.state = ({
            latitude: 0,
            longitude: 0
        })
    }

    componentWillMount() {
        // console.log("Will Mount");
    }
    
    componentDidMount() {
        this.fetchLocation();
        // console.log("Mounted",this.state);
    }

    fetchLocation = () => {
        
        navigator.geolocation.getCurrentPosition((position) => {
            // console.log("Position",position.coords.latitude, position.coords.longitude)

            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
          });
    }

    render() {
        return(
            <div>
                {/* {this.fetchLocation()} */}
                {/* {console.log("Render:",this.state.latitude,this.state.longitude)} */}
                <Weather latitude = {this.state.latitude}
                longitude = {this.state.longitude}/>
                {/* {this.state.latitude} */}
                {/* {this.state.longitude} */}
            </div>
        )
    }
}


export default GeoLocation;