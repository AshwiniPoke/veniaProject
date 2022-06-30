// import {createStore} from "redux";
// import rootred from "./redux/reducer/main";
// // import { cartreducer } from "./redux/reducer/reducer";

// const store = createStore(
//     rootred
// );

// export default store;

import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice';

export const store = configureStore({
  reducer: {
    cart : cartSlice
  },
})