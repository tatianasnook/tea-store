
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contacts from './pages/Contacts';
import AboutProduct from './pages/AboutProduct';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <Navbar/>

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
