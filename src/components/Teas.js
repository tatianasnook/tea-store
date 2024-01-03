import { Link } from 'react-router-dom';

const Teas = ({products}) => {
  return (
    <div className='products'>
      {products.map(element => {
        const {id, name, searchTerm, price, image} = element;
        
        return(
          <div key={id} className='product-card'>
            <Link to={`/about/${element.title}`} className='title-link'>
              <img src={image} alt='tea' width='200'/>
              <h3 className='title'>{name}</h3>
            </Link>
            
            <p>{searchTerm} tea</p>
            <h4>$ {price} / 100g</h4>
          </div>
        )
      })}
    </div>
  )
}

export default Teas;