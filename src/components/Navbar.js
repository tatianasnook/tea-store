
import { Link } from 'react-router-dom';
import teacup from '../icons/teacup.png';
import burger from '../icons/burger.png';
import cart from '../icons/cart.png';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { getTotalQuantity } from '../redux/cartSlice';

const Navbar = () => {
  const [isOpen, setOpen] = useState();
  const totalQuantity = useSelector(getTotalQuantity);

  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
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
              {totalQuantity > 0 && <span className='total-quantity'>{totalQuantity}</span>}
            </div>
          </Link>

          <button className='burger-button' onClick={()=> setOpen(!isOpen)}>
              <img src={burger} alt='menu'/>
          </button>
        </div>
      </nav>
  )
}

export default Navbar;