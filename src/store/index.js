import { configureStore } from '@reduxjs/toolkit';

import cvsSlice from './cvsSlice';
import filtersSlice from './filtersSlice';
import viewSlice from './viewSlice';

export default configureStore({
  reducer: {
    cvs: cvsSlice,
    filters: filtersSlice,
    view: viewSlice,
  },
});
