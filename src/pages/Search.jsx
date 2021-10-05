import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import RepoList from '../components/RepoList';
import axios from 'axios';
import '../styles/Search.css';

function Search() {
  const [content, setContent] = useState('');

  const handleSearchRequest = () => {
    // if (!content) return;
    // axios.get();
    console.log('검색', content);
  };

  return (
    <div id="search_container">
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
      <RepoList />
    </div>
  );
}

export default Search;
