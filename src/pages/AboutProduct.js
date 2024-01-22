import { useParams } from "react-router-dom";
import { data } from '../data/data';
import ChangeQuantity from "../components/Cart/ChangeQuantity";
import { useState } from "react";
import { addItemToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const AboutProduct = () => {
  const { title } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

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
              <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
              <button className="add-btn" onClick={() => dispatch(addItemToCart({id, name, quantity}))}>
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default AboutProduct;