import { configureStore } from '@reduxjs/toolkit';
import historyReducer from './slices/history.slice';

export const store = configureStore({
  reducer: {
    history: historyReducer,
  },
});
