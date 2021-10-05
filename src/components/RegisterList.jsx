import React from 'react';
import PropTypes from 'prop-types';
import RegisterItem from './RegisterItem';

function RegisterList() {
  return (
    <div>
      <RegisterItem />
      <RegisterItem />
      <RegisterItem />
      <RegisterItem />
    </div>
  );
}

RegisterList.propTypes = {};

export default RegisterList;
