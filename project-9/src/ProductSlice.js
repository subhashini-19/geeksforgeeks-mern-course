import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenProducts: [],
  cartProducts: {},
};

export const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setScreenProducts: (state, action) => {
      state.screenProducts = action.payload;
    },
    
    setCartProducts: (state, action) => {
      if (state.cartProducts[action.payload]) {
        state.cartProducts = {
          ...state.cartProducts,
          [action.payload]: {
            quantity: state.cartProducts[action.payload].quantity + 1,
          },
        };
      } else {
        state.cartProducts = {
          ...state.cartProducts,
          [action.payload]: {
            quantity: 1,
          },
        };
      }
    },
    removeFromCart: (state, action) => {
      console.log("removing item with id:", action.payload);
      const {[action.payload]: _, ...rest} = state.cartProducts;
      state.cartProducts = rest;
       console.log("after item with id:", rest);
    },
    decrementFromCart: (state, action) => {
      if (state.cartProducts[action.payload] && state.cartProducts[action.payload].quantity > 1) {
        state.cartProducts = {
          ...state.cartProducts,
          [action.payload]: {
            quantity: state.cartProducts[action.payload].quantity - 1,
          },
        };
      } else {
        const {[action.payload]: _, ...rest} = state.cartProducts;
        state.cartProducts = rest;
      }
    },
  },
});

export const { setScreenProducts, setCartProducts , removeFromCart , decrementFromCart } = ProductSlice.actions;

export default ProductSlice.reducer;
