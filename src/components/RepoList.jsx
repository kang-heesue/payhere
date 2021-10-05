import React from 'react';
import RepoItem from './RepoItem';
import '../styles/RepoList.css';

function RepoList({ repoList }) {
  if (!repoList) {
    return <div></div>;
  }
  return (
    <div id="search_result">
      {repoList.map((repoItem) => (
        <RepoItem repoItem={repoItem} />
      ))}
    </div>
  );
}

export default RepoList;
