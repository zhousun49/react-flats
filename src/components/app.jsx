import React, { Component } from 'react';
import flats from '../../data/flats.js';

import Card from './card.jsx';
import Map from './map.jsx'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      flats: flats,
      selectedflat: 0,
    };
  }

  selectFlat = (id) => {
    this.setState({selectedflat: id});
  }

  render(){
    return (
      <div>
        <div className="flat-list">
          <Card flats={ this.state.flats } />
        </div>

        <div className="map-container">
          <Map flats={ this.state.flats } />
        </div>
      </div>
    );
  }
}

export default App;

