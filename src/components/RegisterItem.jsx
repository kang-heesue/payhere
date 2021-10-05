import React from 'react';
import Button from './Button';
import '../styles/RegisterItem.css';

function RegisterItem({ url }) {
  const handleDeleteRepo = () => {
    console.log('등록된 레포지토리 삭제');
  };

  return (
    <div id="register_item">
      <div id="register_info">
        <div id="register_name">{}</div>
        <div id="register_owner">{}</div>
      </div>
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
