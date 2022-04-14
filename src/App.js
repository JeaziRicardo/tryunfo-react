import React, { Component } from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      cards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name, type, checked, value } = target;
    const result = (type === 'checkbox') ? checked : value;
    this.setState(
      () => ({ [name]: result }),
    );
  }

  onSaveButtonClick() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((prev) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      cards: [...prev.cards, card],
    }));
  }

  validateBtn() {
    const { cardName, cardDescription, cardRare, cardImage,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const limitNum = 90;
    const limitSum = 210;
    const sum = +cardAttr1 + +cardAttr2 + +cardAttr3;
    const attr1 = !cardAttr1 || cardAttr1 < 0 || cardAttr1 > limitNum;
    const attr2 = !cardAttr2 || cardAttr2 < 0 || cardAttr2 > limitNum;
    const attr3 = !cardAttr3 || cardAttr3 < 0 || cardAttr3 > limitNum;
    if (!cardName || !cardDescription || !cardRare || !cardImage) {
      return true;
    }
    if (attr1 || attr2 || attr3) {
      return true;
    }
    if (sum > limitSum) {
      return true;
    }
    return false;
  }

  hasTrunfo() {
    const { cards } = this.state;
    return cards.some((card) => card.cardTrunfo);
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ this.hasTrunfo() }
          isSaveButtonDisabled={ this.validateBtn() }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
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
        <CardList cards={ cards } />
      </div>
    );
  }
}

export default App;
