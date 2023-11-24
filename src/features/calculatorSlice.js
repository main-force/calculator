import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: 0,
  },
  reducers: {
    add: (state, action) => {
      state.value = action.payload.num1 + action.payload.num2;
    },
    subtract: (state, action) => {
      state.value = action.payload.num1 - action.payload.num2;
    },
    multiply: (state, action) => {
      state.value = action.payload.num1 * action.payload.num2;
    },
    divide: (state, action) => {
      if (action.payload.num2 !== 0) {
        state.value = action.payload.num1 / action.payload.num2;
      } else {
        state.value = 'Error';
      }
    },
  },
});

export const { add, subtract, multiply, divide } = calculatorSlice.actions;

export default calculatorSlice.reducer;
