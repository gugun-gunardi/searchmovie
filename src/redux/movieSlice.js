import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [],
    searchQuery: '',
    errorMessage: '',
  },
  reducers: {
    setMovies(state, action) {
      state.list = action.payload;
      state.errorMessage = '';
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
      state.list = [];
    },
  },
});

export const { setMovies, setSearchQuery, setErrorMessage } =
  moviesSlice.actions;
export default moviesSlice.reducer;
