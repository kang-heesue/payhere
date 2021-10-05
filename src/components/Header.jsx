import React from 'react';
import { useHistory } from 'react-router';
import '../styles/Header.css';

function Header() {
  const history = useHistory();

  const handleClickSearch = () => {
    history.push('/');
  };

  const handleClickRegister = () => {
    history.push('/register');
  };

  const handleClickIssue = () => {
    history.push('/issue');
  };

  return (
    <div id="header">
      <i className="fas fa-search" onClick={handleClickSearch}></i>
      <i className="fas fa-bookmark" onClick={handleClickRegister}></i>
      <i className="fas fa-exclamation-circle" onClick={handleClickIssue}></i>
    </div>
  );
}

export default Header;
