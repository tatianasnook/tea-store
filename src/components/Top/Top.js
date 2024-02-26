import React, { useState } from 'react';
import upbtn from '../../icons/upbtn.png';
import './style.css';

const Top = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='top-container'>
      <button 
        className={`top-toggle ${isVisible ? 'visible' : ''}`}
        onClick={scrollTop}
        >
          <img src={upbtn} alt='icon'/>
      </button>
    </div>
  );
};

export default Top;


