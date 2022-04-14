import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  render() {
    const { cards } = this.props;
    return (
      <div>
        <h2>Todas as Cartas</h2>
        {
          cards.map((
            {
              cardName,
              cardDescription,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardImage,
              cardRare,
              cardTrunfo,
            },
          ) => (
            <Card
              key={ cardName }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          ))
        }
      </div>
    );
  }
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(Object).isRequired,
};

export default CardList;
