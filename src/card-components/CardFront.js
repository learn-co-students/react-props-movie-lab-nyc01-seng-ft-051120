import React, { Component } from 'react';

class CardFront extends Component {

  render() {
    return (

      <div

        className="card-front" 
        style={{backgroundImage: `url(${this.props.poster})`}}
      
      />

    )
  }
}

export default CardFront;