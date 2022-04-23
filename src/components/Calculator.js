import React, { Component } from 'react';
import calculate from './logic/calculate';
import ButtonCalc from './buttonCalc';

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
          <ButtonCalc name="AC" func={this.placeVal} value="AC" />
          <ButtonCalc name="+/-" func={this.placeVal} value="+/-" />
          <ButtonCalc name="%" func={this.placeVal} value="%" />
          <ButtonCalc classname="orange-btn" name="÷" func={this.placeVal} value="÷" />
          <ButtonCalc name="7" func={this.placeVal} value="7" />
          <ButtonCalc name="8" func={this.placeVal} value="8" />
          <ButtonCalc name="9" func={this.placeVal} value="9" />
          <ButtonCalc classname="orange-btn" name="x" func={this.placeVal} value="x" />
          <ButtonCalc name="4" func={this.placeVal} value="4" />
          <ButtonCalc name="5" func={this.placeVal} value="5" />
          <ButtonCalc name="6" func={this.placeVal} value="6" />
          <ButtonCalc classname="orange-btn" name="-" func={this.placeVal} value="-" />
          <ButtonCalc name="1" func={this.placeVal} value="1" />
          <ButtonCalc name="2" func={this.placeVal} value="2" />
          <ButtonCalc name="3" func={this.placeVal} value="3" />
          <ButtonCalc classname="orange-btn" name="+" func={this.placeVal} value="+" />
          <ButtonCalc classname="big-0" name="0" func={this.placeVal} value="0" />
          <ButtonCalc name="." func={this.placeVal} value="." />
          <ButtonCalc classname="orange-btn" name="=" func={this.placeVal} value="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;
