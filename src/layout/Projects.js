import React from 'react';
import { Grid } from '@material-ui/core';

import Project from '../components/Project';
import budgetImg from '../assets/budget.png';
import ccny_coursesImg from '../assets/ccny_courses.png';
import ccny_printingImg from '../assets/ccny_printing.png';
import foodtopiaImg from '../assets/foodtopia.png';
import hacktechImg from '../assets/hacktech.png';

const Projects = () => {
  const projects = [
    {
      title: 'Foodtopia',
      image: foodtopiaImg,
    },
    {
      title: 'Bud-Get',
      image: budgetImg,
    },
    {
      title: 'Hacktech 2020',
      image: hacktechImg,
    },
    {
      title: 'CCNY Printing',
      image: ccny_printingImg,
    },
    {
      title: 'CCNY Courses',
      image: ccny_coursesImg,
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
