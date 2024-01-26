import gsap from "gsap";
import { useEffect, useRef } from 'react';
import about from '../images/about-us.jpg';

const Home = () => {
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);

  useEffect(() => {
    const mediaQuerySmall = window.matchMedia("(max-width: 699px)");
    const mediaQueryMedium = window.matchMedia("(min-width: 700px) and (max-width: 1299px)");
    const mediaQueryLarge = window.matchMedia("(min-width: 1300px)");

    const changeFontSize = () => {
      if(mediaQuerySmall.matches){
        gsap.to(oneRef.current, {fontSize: '3.5vw', duration: 2, delay: 0})
        gsap.to(twoRef.current, {fontSize: '3.5vw', duration: 2, delay: 2})
        gsap.to(threeRef.current, {fontSize: '3.5vw', duration: 2, delay: 4})
      } else if (mediaQueryMedium.matches) {
        gsap.to(oneRef.current, { fontSize: '2.5vw', duration: 2, delay: 0 });
        gsap.to(twoRef.current, { fontSize: '2.5vw', duration: 2, delay: 2 });
        gsap.to(threeRef.current, { fontSize: '2.5vw', duration: 2, delay: 4 });
      } else if (mediaQueryLarge.matches){
        gsap.to(oneRef.current, {fontSize: '2vw', duration: 2, delay: 0})
        gsap.to(twoRef.current, {fontSize: '2vw', duration: 2, delay: 2})
        gsap.to(threeRef.current, {fontSize: '2vw', duration: 2, delay: 4})
      }
    }
    changeFontSize();
    mediaQuerySmall.addListener(changeFontSize);
    mediaQueryMedium.addListener(changeFontSize);
    mediaQueryLarge.addListener(changeFontSize);

    return () => {
      mediaQuerySmall.removeListener(changeFontSize);
      mediaQueryMedium.removeListener(changeFontSize);
      mediaQueryLarge.removeListener(changeFontSize);
    };
  }, [])

  return (
    <div className="App">
      <div className='background'>
        <div className='background-container'>
          <h4 className='shipping'>Free Standard Shipping on Orders Over $50</h4>
            <div className='main-title'>
              <p className="title" ref={oneRef}>Steeped in tradition, tea unveils the art of wellness sip by sip,</p>
              <p className="title" ref={twoRef}>a harmonious blend of antioxidants and tranquility</p>
              <p className="title" ref={threeRef}>pouring into the cup of vitality.</p>
            </div>
        </div>
      </div>

      <div className='about-section'>
      
      <p><span>Welcome to Tea Land</span>, where passion meets perfection in every cup. At Tea Land,
        we take pride in curating the finest selection of premium teas, delivering an exquisite blend of 
        quality and taste to tea enthusiasts around the globe. Our journey began in 2021 with a simple yet
        profound mission – to share the joy of exceptional tea with the world. We believe that tea is not just
        a beverage; it's an experience that transcends time and culture. From the lush tea gardens to your teacup,
        we ensure that every step in the process reflects our commitment to excellence. What sets Tea Land apart 
        is our unwavering dedication to quality. We source only the finest tea leaves, handpicked from the most 
        prestigious gardens, ensuring a cup of tea that is unparalleled in flavor and aroma. Our premium teas 
        are a celebration of nature's bounty, crafted to perfection for your indulgence.
        Tea Land is more than a tea brand; it's a lifestyle choice. We understand the importance of health 
        and well-being, which is why all our teas are gluten-free and packed with natural goodness. 
        Immerse yourself in the world of Tea Land, where every sip is a journey to relaxation and revitalization.
        Join us in savoring the richness of tradition and the innovation of modern tea culture. At Tea Land, 
        we invite you to explore a world of extraordinary flavors, where each tea tells a unique story. 
        Elevate your tea-drinking experience with us – because you deserve nothing but the best.
        Indulge in the art of tea at Tea Land, where passion, purity, and premium quality converge in every teacup.
      </p>
      <div className='wrap'>
        <div>
          <h3>Why Choose Tea Land?</h3>
          <ul>
            <li><b>Premium Quality:</b> Only the finest teas from renowned global gardens.</li>
            <li><b>Diverse Selection:</b> Explore classic favorites and unique, rare blends.</li>
            <li><b>Convenient Shopping:</b> At Tea Land, we believe in making your tea experience as delightful 
              as the blends we offer. Whether you prefer the convenience of ordering 
              online or the charm of in-person shopping.</li>
          </ul>
        </div>
        <img src={about} alt='tea cup'/>
      </div>
      
    </div>
      
            
    </div>
  );
}

export default Home;