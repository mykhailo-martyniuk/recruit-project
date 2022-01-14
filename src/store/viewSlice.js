import {createSlice} from '@reduxjs/toolkit';
import {DESKTOP} from '../utils/constants';

const viewSlice = createSlice({
  name: 'view',
  initialState: {
    resolution: DESKTOP,
  },
  reducers: {
    setResolution(state, action) {
      state.resolution = action.payload;
    },
  },
});

export const { setResolution } = viewSlice.actions;

export default viewSlice.reducer;