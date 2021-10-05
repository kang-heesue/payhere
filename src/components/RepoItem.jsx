import React from 'react';
import { useRecoilState } from 'recoil';
import { urlState } from '../state';
import Button from './Button';
import '../styles/RepoItem.css';

function RepoItem({ repoItem }) {
  const [url, setUrl] = useRecoilState(urlState);

  const handleRegisterRepo = () => {
    setUrl(repoItem.item.issues_url);
  };

  return (
    <div id="repository_item">
      <div id="repository_info">
        <a href={repoItem.html_url} target="_blank">
          <div id="repository_info_name">{repoItem.name}</div>
        </a>
        <div id="repository_info_owner">{repoItem.owner.login}</div>
      </div>
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
