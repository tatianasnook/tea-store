
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contacts from './pages/Contacts';
import AboutProduct from './pages/AboutProduct';
import Cart from './pages/Cart';
import teacup from './icons/teacup.png';
import cart from './icons/cart.png';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <nav>
        <div className='nav-container'>
          <img src={teacup} alt='cup' className='tea-cup-logo'/>
          <p className='logo'>Tea Land</p>
          <Link to="/" className='link'>Home</Link>
          <Link to="/shop" className='link'>Shop</Link>
          <Link to="/contacts" className='link'>Contact Us</Link>
          <Link to="/cart" className='link'>
            <img src={cart} alt='cart'/>
          </Link>
        </div>
      </nav>

      <Routes className>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/about/:title" element={<AboutProduct/>}/>
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
