import { useSelector, useDispatch } from "react-redux";
import { getCartItems, removeItemFromCart, getTotalQuantity } from "../redux/cartSlice";
import { data } from '../data/data';
import trash from '../icons/trash.png';


const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();
  const totalQuantity = useSelector(getTotalQuantity);
  
  const totalPrice = cartItems.reduce((total, cartItem) => {
    const { teaId, quantity } = cartItem;
    const tea = data.find(item => item.id === teaId);
    return total + tea.price * quantity;
  }, 0);

  return (
    <div className="cart-page">
      <div>
        <h1>Your Cart</h1>
      <h3>TOTAL: ${(totalPrice).toFixed(2)}</h3>
      <p>Total quantity: {totalQuantity}</p>

      {cartItems.map(cartItem => {
        const {teaId, quantity} = cartItem

        const tea = data.find(item => item.id === teaId);

        return(
          <div key={teaId} className="cart-container">
            <table>
              <tr>
                <td>
                  <img src={tea.image} alt='tea' width="100"/>
                </td>
                <td className="box2">
                  <p>{tea.name}</p>
                </td>
                <td className="box3">
                  <p>Quantity: {quantity}</p>
                </td>
                <td>
                  <p>Price: ${(tea.price * quantity).toFixed(2)}</p>
                </td>
                <td>
                  <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}> 
              <img className="trash-icon" src={trash} alt='delete'/>
            </span>
                </td>
              </tr>
            </table>
            
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Cart;