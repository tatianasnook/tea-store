
import instagram from '../instagram.png';
import facebook from '../facebook.png';

const Footer = () => {
  return (
    <div className='footer'>
      <p>2024 Tea Land. All rights reserved.</p>
      <div>
        <img src={instagram} alt='instagram' width="40"/>
        <img src={facebook} alt='facebook' width="40"/>
      </div>
    </div>
  )
}

export default Footer;