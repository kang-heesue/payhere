import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

function Button(props) {
  return (
    <button type={props.type} id={props.id} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

export default Button;
