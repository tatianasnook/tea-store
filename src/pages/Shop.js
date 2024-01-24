import Buttons from "../components/Buttons";
import ModalWindow from "../components/ModalWindow";
import Teas from "../components/Teas";
import { data } from '../data/data';
import { useState } from 'react';

const Shop = () => {
  const [teas, setTeas] = useState(data);

  const filterTea = (searchTerm) => {
    const newTeaArr = data.filter(element => element.searchTerm === searchTerm);
    setTeas(newTeaArr);
  }

  return (
    <div className='product-container'>
      <ModalWindow/>
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
  )
}

export default Shop;