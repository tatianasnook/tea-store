import { useParams, useNavigate } from "react-router-dom";
import { data } from '../data';

const AboutProduct = () => {
  const navigate = useNavigate();
  const { title } = useParams();

  return (
    <div>
      {data.filter((item) => item.title === title).map(element => { 
        const {id, name, description, price, image} = element;
         
        return (
          <div key={id}>
            <h3>{name}</h3>
            <img src={image} alt="product" width="300px" />
            <p>{description}</p>
            <h5>$ {price} / 100g</h5>
            <button>Buy</button>
            <button className="btn" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </div>
        );
      })}
    </div>
  )
}

export default AboutProduct;