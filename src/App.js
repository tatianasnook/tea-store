
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contacts from './pages/Contacts';
import AboutProduct from './pages/AboutProduct';
import Cart from './pages/Cart';
import teacup from './icons/teacup.png';
import burger from './icons/burger.png';
import cart from './icons/cart.png';
import Footer from './components/Footer';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { getTotalQuantity } from './redux/cartSlice';

function App() {
  const [isOpen, setOpen] = useState();
  const totalQuantity = useSelector(getTotalQuantity);

  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    <Router>
      <nav>
        <div className='nav-container'>
          <img src={teacup} alt='cup' className='tea-cup-logo'/>
          <p className='logo'>Tea Land</p>

          <div className={`links ${isOpen ? "active" : ""}`}>
            <Link to="/" className='link' onClick={closeMobileMenu}>Home</Link>
            <Link to="/shop" className='link' onClick={closeMobileMenu}>Shop</Link>
            <Link to="/contacts" className='link' onClick={closeMobileMenu}>Contact Us</Link>
          </div>

          <Link to="/cart">
            <div className='cart-box'>
              <img src={cart} className="cart" alt='cart'/>
              <span className='total-quantity'>{totalQuantity}</span>
            </div>
          </Link>

          <button className='burger-button' onClick={()=> setOpen(!isOpen)}>
              <img src={burger} alt='menu'/>
          </button>
        </div>
      </nav>

      <Routes>
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
