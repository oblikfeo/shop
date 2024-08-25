import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    filteredProducts: [],
    addItem: []
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
      state.filteredProducts = action.payload;
    },
    sortProducts: (state, action) => {
      if (action.payload === "min") {
        state.filteredProducts = state.filteredProducts.sort((a,b) => b.price - a.price)
      } 
      if (action.payload === "max") {
        state.filteredProducts = state.filteredProducts.sort((a,b) => a.price - b.price)
      }
    },
    searchProducts: (state, action) => {
      if (!action.payload) {
        state.filteredProducts = state.data
      }
      state.filteredProducts = state.data.filter((item) => item.title.toLowerCase().includes(action.payload))
    },
    
  },
});

export const { setProducts, sortProducts, searchProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;