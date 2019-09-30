import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
   constructor (props) {
    super(props);
    this.state = {
      center: {
        lat: 59.95,
        lng: 30.33
        },
      zoom: 11,
      color: "red",
      };
    };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyALvuGnBW6MzhmBoPXtf7ekRC0YPHIcRN0" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            style={this.state.color}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
