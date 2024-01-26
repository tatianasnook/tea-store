import envelope from '../icons/envelope.png';
import instagram from '../icons/instagram.png';
import facebook from '../icons/facebook.png';

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <p>&copy;2024 Tea Land. All rights reserved.</p>
        <div>
          <img src={envelope} alt='envelope' width='34' height='42'/>
          <img src={facebook} alt='facebook' width="40"/>
          <img src={instagram} alt='instagram' width="40"/>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer;