import { useSelector, useDispatch } from "react-redux";
import { getCartItems, removeItemFromCart } from "../redux/cartSlice";
import { data } from '../data/data';
import trash from '../icons/trash.png';

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();
  
  const totalPrice = cartItems.reduce((total, cartItem) => {
    const { teaId, quantity } = cartItem;
    const tea = data.find(item => item.id === teaId);
    return total + tea.price * quantity;
  }, 0);

  return (
    <div> 
      <p>Your Cart</p>
      <h3>TOTAL: ${totalPrice}</h3>

      {cartItems.map(cartItem => {
        const {teaId, quantity} = cartItem

        const tea = data.find(item => item.id === teaId);

        return(
          <div key={teaId}>
            <p>{tea.name}</p>
            <p>Quantity: {quantity}</p>
            <p>Price: ${tea.price * quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}> 
              <img className="trash-icon" src={trash} alt='delete'/>
            </span>
            
          </div>
        )
      })}
    </div>
  )
}

export default Cart;