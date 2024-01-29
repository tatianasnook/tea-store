import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addItemToCart: (state, action) => {
      const timeId = new Date().getTime()
      state.cartItems.push({
        id: timeId,
        teaId: action.payload.id,
        quantity: action.payload.quantity,
        totalQuantity: action.payload.quantity
      })
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.cartItemId
      )
    }
  }
})

export const getTotalQuantity = state => {
  return state.cart.cartItems.reduce ((total,cartItems) => {
    return cartItems.totalQuantity + total
  },0)
}

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;