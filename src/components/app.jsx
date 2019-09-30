import React, { Component } from 'react';
import flats from '../../data/flats.js';

import Cardlist from './cardlist.jsx';
import Map from './map.jsx'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      flats: flats,
      selectedflat: 1,
    };
  }

  selectFlat = (id) => {
    this.setState({selectedflat: id});
    // const { i } = this.props;
    // console.log({i})
  }

  render(){
    return (
      <div>
        <div className="flat-list">
          <Cardlist info={this.state} selectFlat={this.selectFlat} />
        </div>

        <div className="map-container">
          <Map flats={this.state.flats} selectedFlat={ this.props.selectedFlat} />
        </div>
      </div>
    );
  }
}

export default App;

