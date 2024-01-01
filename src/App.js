import { data } from './data';
import './App.css';
import { useState } from 'react';
import Teas from './Teas';

function App() {
  const [teas, setTeas] = useState(data)

  return (
    <div className="App">
      <Teas products={teas}/>      
    </div>
  );
}

export default App;
