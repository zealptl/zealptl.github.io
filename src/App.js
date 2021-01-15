import './App.css';
import './Queries.css';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AnimatedCursor from 'react-animated-cursor';

import theme from './theme';
import HomePage from './pages/HomePage';
import ProjectPages from './pages/ProjectPages';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <div className='App'>
            {/* <AnimatedCursor
              innerSize={15}
              outerSize={15}
              color='230, 146, 161'
              outerAlpha={0.2}
              innerScale={1}
              outerScale={3}
            /> */}
            <Route exact path='/' component={HomePage} />
            <Route path='/projects' component={ProjectPages} />
          </div>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
