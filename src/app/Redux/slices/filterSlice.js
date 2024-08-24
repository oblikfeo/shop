import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemID: 0,
  sort: {
    sort: 'up'
  }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = filterSlice.actions

export default filterSlice.reducer