import './App.css';
import { ThemeProvider } from '@material-ui/core';
import AnimatedCursor from 'react-animated-cursor';

import theme from './theme';
import Nav from './components/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color='167, 206, 203'
          outerAlpha={0.2}
          innerScale={1}
          outerScale={3}
        />
        <Nav />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
