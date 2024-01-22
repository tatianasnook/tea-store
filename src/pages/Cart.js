import { useSelector } from "react-redux";
import { getCartItems } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  
  return (
    <div>
      <h1>This is a cart page with cart items.</h1>
      {cartItems.map(cartItem => {
        const {teaId, quantity} = cartItem
        console.log(cartItem)
        return(
          <div key={teaId}>
            <p>Amount: {quantity}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Cart;