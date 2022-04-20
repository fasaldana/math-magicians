import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <input className="number-inp" type="number" value="0" />
        </form>
        <div className="keys">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button className="orange-btn" type="button">
            &divide;
          </button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button className="orange-btn" type="button">
            x
          </button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button className="orange-btn" type="button">
            -
          </button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button className="orange-btn" type="button">
            +
          </button>
          <button className="big-0" type="button">
            0
          </button>
          <button type="button">.</button>
          <button className="orange-btn" type="button">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
