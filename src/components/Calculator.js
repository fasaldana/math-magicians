import React, { useState } from 'react';
import calculate from './logic/calculate';
import ButtonCalc from './buttonCalc';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [obj, setObj] = useState({ next: '', operation: null, total: null });

  const placeVal = (e) => {
    setObj(calculate(obj, e.target.name));
  };

  return (
    <div className="container">
      <div className="form">
        <p>{obj.operation}</p>
        <input className="number-inp" value={obj.total !== null && obj.next == null ? obj.total : obj.next} readOnly />
      </div>
      <div className="keys">
        <ButtonCalc name="AC" func={placeVal} value="AC" />
        <ButtonCalc name="+/-" func={placeVal} value="+/-" />
        <ButtonCalc name="%" func={placeVal} value="%" />
        <ButtonCalc classname="orange-btn" name="÷" func={placeVal} value="÷" />
        <ButtonCalc name="7" func={placeVal} value="7" />
        <ButtonCalc name="8" func={placeVal} value="8" />
        <ButtonCalc name="9" func={placeVal} value="9" />
        <ButtonCalc classname="orange-btn" name="x" func={placeVal} value="x" />
        <ButtonCalc name="4" func={placeVal} value="4" />
        <ButtonCalc name="5" func={placeVal} value="5" />
        <ButtonCalc name="6" func={placeVal} value="6" />
        <ButtonCalc classname="orange-btn" name="-" func={placeVal} value="-" />
        <ButtonCalc name="1" func={placeVal} value="1" />
        <ButtonCalc name="2" func={placeVal} value="2" />
        <ButtonCalc name="3" func={placeVal} value="3" />
        <ButtonCalc classname="orange-btn" name="+" func={placeVal} value="+" />
        <ButtonCalc classname="big-0" name="0" func={placeVal} value="0" />
        <ButtonCalc name="." func={placeVal} value="." />
        <ButtonCalc classname="orange-btn" name="=" func={placeVal} value="=" />
      </div>
    </div>
  );
};

export default Calculator;
