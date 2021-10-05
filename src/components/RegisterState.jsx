import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { urlState } from '../state';

function RegisterState() {
  const [url, setUrl] = useRecoilState(urlState);

  useEffect(() => {
    localStorage.setItem('issue-url', JSON.stringify(url));
  }, [url]);

  useEffect(() => {
    const registeredRepo = localStorage.getItem('issue-url');
    if (registeredRepo) {
      setUrl(JSON.parse(registeredRepo));
    }
  }, [setUrl]);

  return <></>;
}

export default RegisterState;
