import React, { Component } from 'react';
import calculate from './logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      obj: { next: '', operation: null, total: null },
    };
  }

  placeVal = (e) => {
    this.setState((prevS) => ({
      obj: calculate(prevS.obj, e.target.name),
    }));
  };

  render() {
    const { obj } = this.state;
    return (
      <div className="container">
        <div className="form">
          <p>{obj.operation}</p>
          <input className="number-inp" value={obj.total !== null && obj.next == null ? obj.total : obj.next} readOnly />
        </div>
        <div className="keys">
          <button name="AC" onClick={this.placeVal} type="button">
            AC
          </button>
          <button name="+/-" onClick={this.placeVal} type="button">
            +/-
          </button>
          <button name="%" onClick={this.placeVal} type="button">
            %
          </button>
          <button name="÷" onClick={this.placeVal} className="orange-btn" type="button">
            &divide;
          </button>
          <button name="7" onClick={this.placeVal} type="button">
            7
          </button>
          <button name="8" onClick={this.placeVal} type="button">
            8
          </button>
          <button name="9" onClick={this.placeVal} type="button">
            9
          </button>
          <button name="x" onClick={this.placeVal} className="orange-btn" type="button">
            x
          </button>
          <button name="4" onClick={this.placeVal} type="button">
            4
          </button>
          <button name="5" onClick={this.placeVal} type="button">
            5
          </button>
          <button name="6" onClick={this.placeVal} type="button">
            6
          </button>
          <button name="-" onClick={this.placeVal} className="orange-btn" type="button">
            -
          </button>
          <button name="1" onClick={this.placeVal} type="button">
            1
          </button>
          <button name="2" onClick={this.placeVal} type="button">
            2
          </button>
          <button name="3" onClick={this.placeVal} type="button">
            3
          </button>
          <button name="+" onClick={this.placeVal} className="orange-btn" type="button">
            +
          </button>
          <button name="0" onClick={this.placeVal} className="big-0" type="button">
            0
          </button>
          <button name="." onClick={this.placeVal} type="button">
            .
          </button>
          <button name="=" onClick={this.placeVal} className="orange-btn" type="button">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
