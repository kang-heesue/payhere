import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import RepoList from '../components/RepoList';
import axios from 'axios';
import '../styles/Search.css';

function Search() {
  const [content, setContent] = useState('');
  const [repoList, setRepoList] = useState([]);

  const handleSearchRequest = () => {
    if (!content) return;
    axios
      .get('/search/repositories?q=' + content)
      .then((res) => {
        setRepoList(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="search_container">
      <div id="search_bar">
        <Input
          type="text"
          required
          id="search_input"
          onChange={setContent}
          value={content}
          placeholder="Repository명을 입력하세요."
        />
        <Button
          type="button"
          id="search_button"
          onClick={handleSearchRequest}
          value="검색"
        />
      </div>
      <RepoList repoList={repoList} />
    </div>
  );
}

export default Search;
