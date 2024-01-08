import { useParams } from "react-router-dom";
import { data } from '../data';

const AboutProduct = () => {
  const { title } = useParams();

  return (
    <div>
      {data.filter((item) => item.title === title).map(element => { 
        const {id, name, searchTerm, description, price, image} = element;
         
        return (
          <div key={id} className="container">
            <img className="product-image" src={image} alt="product" />
            <div className="about-product">
              <h1>{name} - {searchTerm} tea</h1>
              <p>{description}</p>
              <h4>$ {price} / 100g</h4>
              <button>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default AboutProduct;