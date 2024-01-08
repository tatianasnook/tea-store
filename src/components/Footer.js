import envelope from '../envelope.png';
import instagram from '../instagram.png';
import facebook from '../facebook.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <p>2024 Tea Land. All rights reserved.</p>
        <div>
          <img src={envelope} alt='envelope' width='34' height='42'/>
          <img src={facebook} alt='facebook' width="40"/>
          <img src={instagram} alt='instagram' width="40"/>
        </div>
      </div>
      
    </div>
  )
}

export default Footer;