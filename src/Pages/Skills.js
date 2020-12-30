import React from 'react';
import { Grid } from '@material-ui/core';

import Skill from '../components/Skill';

const Skills = () => {
  const skills = [
    {
      icon: 'devicon-javascript-plain colored',
      title: 'JavaScript',
      level: '95',
    },
    {
      icon: 'devicon-typescript-plain colored',
      title: 'TypeScript',
      level: '75',
    },
    {
      icon: 'devicon-nodejs-plain colored',
      title: 'NodeJS',
      level: '75',
    },
    {
      icon: 'devicon-express-original',
      title: 'ExpressJS',
      level: '65',
    },
    {
      icon: 'devicon-react-original colored',
      title: 'React',
      level: '65',
    },
    {
      icon: 'devicon-cplusplus-plain colored',
      title: 'C++',
      level: '65',
    },
    {
      icon: 'devicon-java-plain colored',
      title: 'Java',
      level: '50',
    },
    {
      icon: 'devicon-python-plain colored',
      title: 'Python',
      level: '50',
    },
    {
      icon: 'devicon-git-plain colored',
      title: 'Git',
      level: '75',
    },
  ];

  return (
    <Grid
      container
      alignItems='center'
      justify='center'
      className='skills-page'
    >
      <Grid item xs={8}>
        <h1 className='skills-page-heading'>Skills</h1>
        {skills.map((skill) => (
          <Skill title={skill.title} icon={skill.icon} level={skill.level} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Skills;
