import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

const ViewProjectLink = (props) => {
  console.log('to from link:', props.to);

  const history = useHistory();

  const onClick = useCallback(
    () => {
      history.push(props.to);
    },
    // eslint-disable-next-line
    []
  );
  return (
    <div onClick={onClick} className='view-project-link-container'>
      <Link to={props.to} className='view-project-link'>
        View Project
      </Link>
    </div>
  );
};

export default ViewProjectLink;
