import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProjectDetails from '../layout/ProjectDetails';

const ProjectPages = () => {
  const foodtopiaPage = () => <ProjectDetails heading='Foodtopia' />;
  const budGetPage = () => <ProjectDetails heading='Bud-Get' />;
  const hacktechPage = () => <ProjectDetails heading='HackTech' />;
  const ccnyPrintingPage = () => <ProjectDetails heading='CCNY Printing' />;
  const ccnyCoursesPage = () => <ProjectDetails heading='CCNY Courses' />;

  return (
    <Switch>
      <Route exact path='/projects/foodtopia' component={foodtopiaPage} />
      <Route exact path='/projects/bud-get' component={budGetPage} />
      <Route exact path='/projects/hacktech' component={hacktechPage} />
      <Route
        exact
        path='/projects/ccny-printing'
        component={ccnyPrintingPage}
      />
      <Route exact path='/projects/ccny-courses' component={ccnyCoursesPage} />
    </Switch>
  );
};

export default ProjectPages;
