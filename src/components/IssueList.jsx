import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IssueItem from './IssueItem';
import Pagination from './Pagination';

function IssueList() {
  const [repoName, setRepoName] = useState('');
  const [issueName, setIssueName] = useState('');
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // axios
    //   .get(`/repos/${owner}/${repo}/issues`)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <div>
      {issues && issues.map((issue) => <IssueItem />)}
      <Pagination />
    </div>
  );
}

export default IssueList;
