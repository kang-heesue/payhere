import React from 'react';
import IssueList from '../components/IssueList';
import Pagination from '../components/Pagination';

function Issue() {
  return (
    <div>
      <IssueList />
      <Pagination />
    </div>
  );
}

export default Issue;
