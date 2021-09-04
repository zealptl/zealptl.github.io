import './styles/app.css';
import './styles/appQueries.css';
import { useRef, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import gsap from 'gsap';
// import AnimatedCursor from 'react-animated-cursor';

import theme from './theme';
import HomePage from './pages/HomePage';
import ProjectPages from './pages/ProjectPages';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
	const app = useRef();
	useEffect(() => {
		gsap.to(app.current, 0, { css: { visibility: 'visible' } });
	});
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<ScrollToTop>
					<Switch>
						<div ref={app} className='App'>
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
				</ScrollToTop>
			</Router>
		</ThemeProvider>
	);
};

export default App;
