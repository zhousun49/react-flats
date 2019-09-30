import React, { Component } from 'react';
import Card from './card.jsx';

class Cardlist extends Component {
  renderList = () => {
    return this.props.flats.map(flat => { return <Card id={flat.id} key={flat.id} selectflat={this.props.selectflat} flat={flat} selectedflat={this.props.selectedflat} />
    })
  }

  render(){
      return (
        this.renderList()
      )
    };
  }

export default Cardlist;

