import React from 'react';
import Button from './Button';
import '../styles/RegisterItem.css';

function RegisterItem() {
  const handleDeleteRepo = () => {
    console.log('등록된 레포지토리 삭제');
  };

  return (
    <div id="register_item">
      <div id="register_repoName">등록된 레포지토리</div>
      <Button
        type="button"
        id="register_button"
        value="삭제"
        onClick={handleDeleteRepo}
      />
    </div>
  );
}

export default RegisterItem;
