import React, { Component } from 'react';

type AcceptedProps = {

}

type LocationState = {
    latitude: number,
    longitude: number
}

class GeoLocation extends Component<AcceptedProps, LocationState> {
    constructor(props: AcceptedProps){
        super(props)
    
    }

    componentWillMount() {
        console.log("Will Mount");
        // this.fetchLocation();
    }

    componentDidMount() {
        console.log("Mounted",this.state);
    }

    fetchLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
          });
    }

    render() {
        return(
            <div>
                {this.fetchLocation()}
                {/* {this.state.latitude} */}
                {/* {this.state.longitude} */}
            </div>
        )
    }
}


export default GeoLocation;