import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from '../Redux/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,

  },
})