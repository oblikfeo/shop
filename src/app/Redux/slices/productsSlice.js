import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    filteredProducts: [],
    items: [],
    balanceDollar: 99,
    balanceCoins: 99
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
    addItems: (state, action) => {
      const element = state.items.find((item) => item?.id === action.payload)
      if (element) {
        state.items = state.items.filter((item) => item?.id !== action.payload)
      } else {
        const product = state.data.find((item) => item?.id === action.payload)
        state.items = [...state.items, product]
      }
    },
    delItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    dollar: (state, action) => {
      if (action.payload === "plus") {
        state.balanceDollar += 1
        state.balanceCoins -= 1
      }
      if (action.payload === "minus") {
        state.balanceCoins += 1
      state.balanceDollar -= 1
      }
    },
    pay: (state, action) => {
      const sum = state.items.reduce((acc, val) => acc + Number(val.price), 0)
      if (action.payload === "dollar") {
        if (state.balanceDollar > sum) {
          state.balanceDollar -= sum
          alert(`Покупка совершена успешно! Ваш баланс ${state.balanceDollar.toFixed(2)} $`)
        } else alert('Недостаточно средств')
      }
      if (action.payload === 'coins') {
        if (state.balanceCoins > sum) {
          state.balanceCoins -= sum
          alert(`Покупка совершена успешно! Ваш баланс ${state.balanceCoins.toFixed(2)} Coins`)
        } else alert('Недостаточно средств')
      }
    },
    clearBasket: (state, action) => {
      if (action) {
        state.items = []
      }
    },
  },
});

export const { setProducts, sortProducts, searchProducts, addItems, delItem, dollar, pay, clearBasket } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;