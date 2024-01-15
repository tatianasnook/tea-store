import gsap from "gsap";
import { data } from '../data/data';
import { useState, useEffect, useRef } from 'react';
import Teas from '../components/Teas';
import Buttons from '../components/Buttons';

const Home = () => {
  const [teas, setTeas] = useState(data);
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

  const filterTea = (searchTerm) => {
    const newTeaArr = data.filter(element => element.searchTerm === searchTerm);
    setTeas(newTeaArr);
  }

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
      <div className='product-container'>
        <p className='aboveBtn'>
          Browse our online store for loose-leaf teas carefully cultivated 
          by artisan farmers. Explore a diverse selection of tea varieties, 
          including green tea, black tea, herbal tea, and white tea.
        </p>
        <Buttons 
          filterTea={filterTea}
          data={data}
          setTeas={setTeas}
        />
        <Teas products={teas}/>
      </div>
            
    </div>
  );
}

export default Home;