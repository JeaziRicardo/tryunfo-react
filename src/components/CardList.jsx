import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  render() {
    const { cards, clearButton, nameFilter, rareFilter, trunFilter } = this.props;
    return (
      <div>
        <h2>Todas as Cartas</h2>

        <label htmlFor="filter-name">
          Filtrar por nome
          <input
            type="text"
            data-testid="name-filter"
            name="filter-name"
            onChange={ nameFilter }
          />
        </label>

        <label htmlFor="filter-rarity">
          Filtrar por raridade
          <select
            name="filter-rarity"
            data-testid="rare-filter"
            onChange={ rareFilter }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="filter-trunfo">
          Super Trunfo
          <input
            type="checkbox"
            name="filter-trunfo"
            data-testid="trunfo-filter"
            onChange={ trunFilter }
          />
        </label>

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
            <div key={ cardName }>
              <Card
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
              />
              <button
                name={ cardName }
                data-testid="delete-button"
                onClick={ clearButton }
                type="button"
              >
                Excluir
              </button>
            </div>
          ))
        }
      </div>
    );
  }
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(Object).isRequired,
  clearButton: PropTypes.func.isRequired,
  nameFilter: PropTypes.func.isRequired,
  rareFilter: PropTypes.func.isRequired,
  trunFilter: PropTypes.func.isRequired,
};

export default CardList;
