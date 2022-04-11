import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div>
        <h3 data-testid="name-card"> </h3>
        <img src="" alt="" data-testid="image-card" />
        <p data-testid="description-card"> </p>
        <p data-testid="attr1-card"> </p>
        <p data-testid="attr2-card"> </p>
        <p data-testid="attr3-card"> </p>
        <p data-testid="rare-card"> </p>
        <p data-testid="trunfo-card"> </p>
      </div>
    );
  }
}

export default Card;
