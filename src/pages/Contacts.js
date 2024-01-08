import { useState } from 'react';
import { shopsData } from '../shopsData';
import arrow1 from '../arrow1.png';
import arrow2 from '../arrow2.png';

const Contacts = () => {
  const [shop, setShop] = useState(0);
  const { address, image} = shopsData[shop];

  const previousShop = () => {
    setShop(shop => {
      shop --;
      if(shop < 0){
        shop = shopsData.length - 1;
      }
      return shop;
    })
  }

  const nextShop = () => {
    setShop(shop => {
      shop ++;
      if(shop > shopsData.length - 1){
        shop = 0
      } 
      return shop;
    })
  }

  return (
    <div className="contact-container">
      <p className="top-contact">Indulge in the art of tea with <span>Tea Land</span>, your premier destination for premium teas sourced 
        from the finest gardens around the world. Whether you're a seasoned tea connoisseur 
        or just embarking on your journey into the world of tea, we have a tantalizing selection 
        to suit every palate. Our customers can choose the convenience of shopping online or in-person shopping. 
      </p>
      <h3>Shop Online:</h3>
      <p>Explore our exquisite teas from the comfort of your home with our user-friendly online store. 
        It's a convenient way to browse, select, and have your favorite teas delivered straight to your doorstep.
      </p>
      <h3>Visit Our Tea Shops:</h3>
      <p>
        For those who relish the sensory joy of a traditional tea-buying experience, 
        we welcome you to our inviting tea shops. Immerse yourself in the world of 
        aromas and flavors as you explore our curated selection in person. Our 
        friendly staff is ready to assist you and make your visit memorable.
        With 3 convenient locations in St. Louis, your perfect cup of tea is just around the corner.
      </p>

      <div className="slides">
        <div className='image-container'>
          <img className='arrow one' onClick={previousShop}src={arrow1} alt="arrow"/>
          <img src={image} alt='tea store' width='600'/>
          <img className='arrow two' onClick={nextShop} src={arrow2} alt="arrow"/>
        </div>
        <div className="address-container">
          <h3>{address}</h3>
        </div>
        <p>Hours: Monday - Saturday 9:00 AM - 7:00 PM </p>
        
      </div>
    </div>
  )
}

export default Contacts;