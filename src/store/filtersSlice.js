import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    photo: false,
  },
  reducers: {
    setOnlyPhoto(state, action) {
      const entries = Object.entries(action.payload);
      entries.forEach((el) => {
        state[el[0]] = el[1];
      });
    },
  },
});

export const { setOnlyPhoto } = filtersSlice.actions;

export default filtersSlice.reducer;
