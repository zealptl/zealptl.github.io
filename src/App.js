import './App.css';

import Nav from './components/Nav';
import Home from './Pages/Home';
import About from './Pages/About';

export default function App() {
  return (
    <div className='App'>
      <Nav />
      <Home />
      <About />
    </div>
  );
}
