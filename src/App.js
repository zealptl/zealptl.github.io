import './App.css';
import './Queries.css';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';

import theme from './theme';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <div className='App'>
            <AnimatedCursor
              innerSize={15}
              outerSize={15}
              color='230, 146, 161'
              outerAlpha={0.2}
              innerScale={1}
              outerScale={3}
            />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/projects/foodtopia' component={ProjectPage} />
          </div>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
