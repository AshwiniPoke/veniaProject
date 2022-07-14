import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addItem(state, action) {
      const itemIndex = state.item.findIndex((val) => val.id === action.payload.id)

      if (itemIndex >= 0) {
        state.item[itemIndex].cartQuantity += 1

      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.item.push(tempProduct)

      }

      localStorage.setItem("items", JSON.stringify(state.item))
    },
    removeFromCart(state, action) {
      const nextCart = state.item.filter(
        (item) =>{ return item.id !== action.payload} 
      );
      state.item = nextCart;
      localStorage.setItem("items", JSON.stringify(state.item));
    return state;
  },
    decreaseCartItem(state, action) {
      const itemIndex = state.item.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.item[itemIndex].cartQuantity > 1) {
        state.item[itemIndex].cartQuantity -= 1;
      } else if (state.item[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.items.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );

        state.item = nextCartItems;
      }
       state.cartTotalAmount -= state.item[itemIndex].price;
      

      localStorage.setItem("items", JSON.stringify(state.item));
    },
    increaseCartItem(state, action) {
      const itemIndex = state.item.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      state.item[itemIndex].cartQuantity += 1;
      state.cartTotalAmount += state.item[itemIndex].price;

      localStorage.setItem("items", JSON.stringify(state.item));
    },
    getTotals(state, action) {
      let { total, quantity } = state.item.reduce((cartTotal, item) => {
        const { price, cartQuantity } = item
        const itemTotal = price * cartQuantity;

        cartTotal.total += itemTotal
        cartTotal.quantity += cartQuantity

        return cartTotal
      }, {
        total: 0,
        quantity: 0
      })

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;

    }
  },
});


export const handleAction= cartSlice.actions

export default cartSlice.reducer