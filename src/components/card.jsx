import React, { Component } from 'react';

class Card extends Component {
  handleclick = (e) =>{
    if(this.props.selectflat) {
      console.log('true')
      // this.props.selectflat.selectflat(this.props.id)
    }
    // this.props.selectflat(this.props.id)
    console.log("selected",this.props)
      console.log("card,id", this.props.id)
  }

  render(){
    // return this.props.flats.map(flat => {
      const img = this.props.flat.imageUrl;

      const sectionStyle = {
        backgroundImage: `url(${img})`,
      };

    //   const style = {
    //     outlinecolor: "green",
    //     border: "15px solid green",
    //     outlinestyle: "solid"
    //   }

      return (
        <div className="card" style={sectionStyle}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">{this.props.flat.name}</div>
        <a className="card-link" href="#" onClick={this.handleclick} ></a>
        </div>
      )
    };
}


export default Card;

