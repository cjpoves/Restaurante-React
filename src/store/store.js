import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import orderReducer from './ordersSlice'
import cartReducer from './cartSlice'

export const store = configureStore ({
    reducer: {
        auth: authReducer, 
        order: orderReducer,
        cart: cartReducer,
    },

});