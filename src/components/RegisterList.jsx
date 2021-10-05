import React from 'react';
import { useRecoilValue } from 'recoil';
import RegisterItem from './RegisterItem';
import { urlState } from '../state';

function RegisterList() {
  const url = useRecoilValue(urlState);

  return (
    <div>
      <RegisterItem url={url} />
      <RegisterItem url={url} />
      <RegisterItem url={url} />
      <RegisterItem url={url} />
    </div>
  );
}

export default RegisterList;
