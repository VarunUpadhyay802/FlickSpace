// This code sets up the Redux store with the homeSlice reducer, which will handle the state management 
// for the specific slice of the overall Redux state named 'home'.
import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './homeSlice';

// Configure the Redux store
export const store = configureStore({
  reducer: {
    home: homeSlice
  },
});
