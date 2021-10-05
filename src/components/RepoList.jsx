import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RepoList() {
  const [repoName, setRepoName] = useState('');

  useEffect(() => {
    axios
      .get('/search/repositories', {
        q: '',
      })
      .then((res) => {
        console.log(res);
        setRepoName(res.items.name);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return <div></div>;
}

export default RepoList;
