import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function RepoItem() {
  const handleRegisterRepo = () => {
    console.log('레포지토리 등록');
  };

  return (
    <div>
      <Button
        type="button"
        id="repository_button"
        value="등록"
        onClick={handleRegisterRepo}
      />
    </div>
  );
}

export default RepoItem;
