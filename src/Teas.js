import React from 'react';

const Teas = ({products}) => {
  return (
    <div>
      {products.map(tea => {
        const {id, name, price, image, description} = tea
        return(
          <div key={id}>
            <img src={image} alt='tea' width='200'/>
            <h3>{name}</h3>
            <h5>$ {price}</h5>
            <p>{description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Teas;