
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import AboutProduct from './pages/AboutProduct';
import teacup from './teacup.png';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <nav>
        <img src={teacup} alt='cup' className='tea-cup'/>
        <p className='logo'>Tea Land</p>
        <Link to="/" className='link'>Home</Link>
        <Link to="/about" className='link'>About</Link>
        <Link to="/contacts" className='link'>Contact Us</Link>
      </nav>

      <Routes className>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/about/:title" element={<AboutProduct/>}/>
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
