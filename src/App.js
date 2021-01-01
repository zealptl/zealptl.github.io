import './App.css';

import Nav from './components/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';

export default function App() {
  return (
    <div className='App'>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
