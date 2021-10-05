import React from 'react';
import { useRecoilValue } from 'recoil';
import { urlState } from '../state';
import RegisterList from '../components/RegisterList';
import '../styles/Register.css';

function Register() {
  const url = useRecoilValue(urlState);
  if (!url) {
    return <div id="register_basic">등록된 Repository가 없습니다.</div>;
  }
  return (
    <div>
      <RegisterList />
    </div>
  );
}

export default Register;
