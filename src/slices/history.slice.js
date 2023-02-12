import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    resetHistory: (state) => {
      state.value = '';
    },
    changeHistoryWithPrev: (state, action) => {
      state.value += action.payload;
    },
    changeHistory: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeHistory, resetHistory,changeHistoryWithPrev } = historySlice.actions;

export default historySlice.reducer;
