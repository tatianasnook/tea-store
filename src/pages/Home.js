
import { data } from '../data';
import { useState} from 'react';
import Teas from '../components/Teas';
import Buttons from '../components/Buttons';

const Home = () => {
  const [teas, setTeas] = useState(data);

  const filterTea = (searchTerm) => {
    const newTeaArr = data.filter(element => element.searchTerm === searchTerm);
    setTeas(newTeaArr);
  }

  return (
    <div className="App">
      <div className='background'>
        <h4 className='shipping'>Free Standard Shipping on Orders Over $50</h4>
        <div className='main-title'>
          <p>Steeped in tradition, tea unveils the art of wellness sip by sip, a harmonious blend of antioxidants and tranquility pouring into the cup of vitality.</p>
        </div>
      </div>
      <p className='aboveBtn'>
        Browse our online store for loose-leaf teas carefully cultivated by artisan farmers. Explore a diverse selection of tea varieties, including green tea, black tea, herbal tea, and white tea.
      </p>
      <Buttons 
        filterTea={filterTea}
        data={data}
        setTeas={setTeas}
      />
      <Teas products={teas}/>      
    </div>
  );
}

export default Home;