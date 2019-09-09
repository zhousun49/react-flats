import React, { Component } from 'react';

class Card extends Component {
  // rendercategory = () => {
  //   return this.props.flats.map(flat => {
  //     return (
  //       <div className="card-category">{flat.price} {flat.priceCurrency}</div>
  //     )
  //   })
  // }

  render(){
    return this.props.flats.map(flat => {
      const img = flat.imageUrl;

      const sectionStyle = {
        backgroundImage: `url(${img})`
      };

      return (
        <div className="card" style={sectionStyle}>
        <div className="card-category">{flat.price} {flat.priceCurrency}</div>
        <div className="card-description">{flat.name}</div>
        </div>
      )
    });
  }
}

export default Card;

