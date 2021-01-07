import React from 'react';
import { Grid } from '@material-ui/core';

import Project from '../components/Project';
import projectImg from '../assets/project1.png';

const Projects = () => {
  const projects = [
    {
      title: 'Foodtopia',
      image: projectImg,
    },
    {
      title: 'Bud-Get',
      image: projectImg,
    },
    {
      title: 'Hacktech 2020',
      image: projectImg,
    },
    {
      title: 'CCNY Printing',
      image: projectImg,
    },
    {
      title: 'CCNY Courses',
      image: projectImg,
    },
  ];

  return (
    <Grid
      container
      className='projects-page'
      alignItems='center'
      justify='center'
      id='projects'
    >
      <h1 className='projects-page-heading'>Projects</h1>
      <Grid className='projects-section-dark' item xs={6}></Grid>
      <Grid className='projects-section-light' item xs={6}></Grid>

      {projects.map((project) => (
        <Grid item xs={7}>
          <Project title={project.title} image={project.image} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
