import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>

          <label htmlFor="nome">
            Nome
            <input type="text" name="nome" data-testid="name-input" />
          </label>

          <label htmlFor="description">
            Descrição
            <textarea name="description" data-testid="description-input"> </textarea>
          </label>

          <label htmlFor="attr01">
            Attr01
            <input type="number" name="attr01" data-testid="attr1-input" />
          </label>

          <label htmlFor="attr02">
            Attr02
            <input type="number" name="attr02" data-testid="attr2-input" />
          </label>

          <label htmlFor="attr03">
            Attr03
            <input type="number" name="attr03" data-testid="attr3-input" />
          </label>

          <label htmlFor="img">
            Imagem
            <input type="text" name="img" data-testid="image-input" />
          </label>

          <label htmlFor="raridade">
            Raridade
            <select name="raridade" data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>

          <label htmlFor="STT">
            <input type="checkbox" name="STT" data-testid="trunfo-input" />
            Super Trybe Trunfo
          </label>

          <button type="button" data-testid="save-button">
            Salvar
          </button>

        </form>
      </div>
    );
  }
}

export default Form;
