import React from 'react';
import PropTypes from 'prop-types';

function IssueItem(props) {
  const handleClickIssue = () => {
    window.open(props.html_url);
  };

  return (
    <div>
      <div>{props.repo}</div>
      <div className="issue_title">{props.title}</div>
    </div>
  );
}

export default IssueItem;
