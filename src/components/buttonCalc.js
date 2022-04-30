import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class ButtonCalc extends Component {
  render() {
    const {
      classname, name, func, value,
    } = this.props;
    return (
      <button className={classname} name={name} onClick={func} type="button">
        {value}
      </button>
    );
  }
}

ButtonCalc.defaultProps = {
  classname: '',
  name: '',
  func: () => {},
  value: '',
};

ButtonCalc.propTypes = {
  classname: PropTypes.string,
  name: PropTypes.string,
  func: PropTypes.func,
  value: PropTypes.string,
};

export default ButtonCalc;
