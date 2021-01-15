import React from 'react';

const ProjectDetails = (props) => {
  console.log('HEEADING:', props.heading);
  return (
    <div>
      <h1>{props.heading}</h1>
      {/* <h1>Hello World</h1> */}
    </div>
  );
};

export default ProjectDetails;
