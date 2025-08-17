import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../reducer/cart";

export const Store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }

})