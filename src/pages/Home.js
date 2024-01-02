
import { data } from '../data';
import { useState } from 'react';
import Teas from '../Teas';
import Buttons from '../Buttons';

const Home = () => {
  const [teas, setTeas] = useState(data);

  const filterTea = (searchTerm) => {
    const newTeaArr = data.filter(element => element.searchTerm === searchTerm);
    setTeas(newTeaArr);
  }

  return (
    <div className="App">
      <Buttons filterTea={filterTea}/>
      <Teas products={teas}/>      
    </div>
  );
}

export default Home;