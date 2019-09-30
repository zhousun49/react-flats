import React, { Component } from 'react';
import Card from './card.jsx';

class Cardlist extends Component {

  renderList = () => {
    let self = this
    return this.props.info.flats.map(flat => {
      return <Card id={flat.id} key={flat.id} selectedflat={this.props.info.selectedflat} flat={flat} selectflat={ self.props}/>
    })
  }

  render(){
    console.log('c-list',this.props.selectFlat)
      return (
        this.renderList()
      )
    };
  }

export default Cardlist;

