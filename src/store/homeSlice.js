import { createSlice } from '@reduxjs/toolkit';

// Create a slice using createSlice function
export const homeSlice = createSlice({
  name: 'home', // Name of the slice
  initialState: {
    url: {}, // Initial state for url
    genres: {} // Initial state for genres
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      // Reducer function to handle getApiConfiguration action
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      // Reducer function to handle getGenres action
      state.genres = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
