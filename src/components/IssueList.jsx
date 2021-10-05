import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import IssueItem from './IssueItem';
import Pagination from './Pagination';
import { urlState } from '../state';

function IssueList() {
  const url = useRecoilValue(urlState);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <div>
      {/* {issues && issues.map((issue) => <IssueItem />)} */}
      <Pagination />
    </div>
  );
}

export default IssueList;
