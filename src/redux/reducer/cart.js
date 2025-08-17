import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
  },

  reducers: {
    addToCart: (state, { payload }) => {
      const product = state.products.find(p => p.watchId === payload.watchId);
      if (product) {
        product.quantity += 1;
        product.total = product.quantity * Number(product.price);
      } else {
        state.products.push({
          ...payload,
          quantity: 1,
          total: Number(payload.price)
        });
      }
      state.total = state.products.reduce((sum, product) => sum + product.total, 0); 
    },
   
    removeFromCart: (state, {payload}) => {
      state.products = state.products.filter((prod) => prod.watchId !== payload.watchId)
      state.total = state.products.reduce((sum, product) => sum + product.total, 0); 
    },
    decreaseQuantity: (state, {payload}) => {
      const product = state.products.find(prod => prod.watchId === payload.watchId)
      if(product) {
        if(product.quantity > 1 ) {
            product.quantity -= 1;
            product.total = product.quantity * Number(product.price);
        }
        else {
            state.products = state.products.filter((prod) => 
                prod.watchId !== payload.watchId);
        };
        
        state.total = state.products.reduce((sum, product) => sum + product.total, 0); 
      }
    }
  },
});

export const { addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions;
