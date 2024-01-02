import React from 'react';

const Teas = ({products}) => {
  return (
    <div className='products'>
      {products.map(element => {
        const {id, name, searchTerm, price, image} = element;
        return(
          <div key={id} className='product-card'>
            <img src={image} alt='tea' width='200'/>
            <h3>{name}</h3>
            <p>{searchTerm} tea</p>
            <h5>$ {price} / 100g</h5>
          </div>
        )
      })}
    </div>
  )
}

export default Teas;