import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart", 
    initialState: {
        items: [],
        totalPrecio: 0,
        mesa: 1,
    }, 
    reducers: {

        //Accion para si ya está en el carrito, aumentar cantidad, sino mantenerlo con catidad 1
        addToCart: (state, action) => {
            const {id, nombre, precio} = action.payload;
            const existingItem = state.items.find(item => item.id === id);
           
            if (existingItem) {
                existingItem.cantidad += 1; 
              } else {
                state.items.push({ id, nombre, precio, cantidad: 1});
              }

              state.totalPrecio = state.items.reduce((total, item) => total + item.precio * item.cantidad, 0);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            state.totalPrecio = state.items.reduce((total, item) => total + item.precio * item.cantidad, 0);
          },

          updateQuantity: (state, action) => {
            const { id, cantidad } = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.cantidad = cantidad > 0 ? cantidad : 1;
            }

            // Recalcular el total
            state.totalPrecio = state.items.reduce((total, item) => total + item.precio * item.cantidad, 0);
        },
          
        removeCart: (state) => {
          state.items = [];
          state.totalPrecio = 0;
      },

      updateMesa: (state, action) => {
        state.mesa = action.payload;

    },
    },
});

export const {addToCart, removeFromCart, updateQuantity, removeCart, updateMesa} = cartSlice.actions;
export default cartSlice.reducer; 