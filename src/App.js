
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';


function App() {

  return (
    <Router>
      <h4 className='shipping'>Free Standard Shipping on Orders Over $50</h4>
      <nav>
        <Link to="/" className='link'>Home</Link>
        <Link to="/about" className='link'>About</Link>
        <Link to="/contacts" className='link'>Contact Us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>

    </Router>
  );
}

export default App;
