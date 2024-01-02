import React from 'react';

const Buttons = ({filterTea}) => {
  return (
    <div className='cont'>
      <button className='change' onClick={() => filterTea('green')}>Green Tea</button>
      <button className='change' onClick={() => filterTea('black')}>Black Tea</button>
      <button className='change' onClick={() => filterTea('herbal')}>Herbal Tea</button>
      <button className='change' onClick={() => filterTea('white')}>White Tea</button>
    </div>
  )
}

export default Buttons;