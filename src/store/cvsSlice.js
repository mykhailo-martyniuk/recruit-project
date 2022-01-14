import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://135.181.30.244:27007/api/summaries/';

export const fetchCvs = createAsyncThunk(
  'cvs/fetchCvs',
  async function (_, { getState }) {
    const filters = getState().filters;
    let filtersStr = '';
    for (let key in filters) {
      if (filters[key]) filtersStr += `&${key}=${filters[key]}`;
    }
    const response = await (await fetch(`${API_URL}?${filtersStr}`)).json();
    return {
      results: response.results,
      pageCount: response.page_count,
      currentPage: response.current_page,
      totalCount: response.total_count,
    };
  }
);
export const setCurrentPage = createAsyncThunk(
  'cvs/fetchCvsByPage',
  async function (page, { getState }) {
    const filters = getState().filters;
    let filtersStr = '';
    for (let key in filters) {
      if (filters[key]) filtersStr += `&${key}=${filters[key]}`;
    }
    const response = await (
      await fetch(`${API_URL}?page=${page}${filtersStr}`)
    ).json();
    return {
      results: response.results,
      pageCount: response.page_count,
      currentPage: response.current_page,
      totalCount: response.total_count,
    };
  }
);

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

const cvsSlice = createSlice({
  name: 'cvs',
  initialState: {
    status: null,
    error: null,
    pageCount: 1,
    currentPage: 1,
    totalCount: 0,
    cvs: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCvs.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchCvs.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.cvs = [...action.payload.results];
      state.currentPage = action.payload.currentPage;
      state.pageCount = action.payload.pageCount;
      state.totalCount = action.payload.totalCount;
    },
    [fetchCvs.rejected]: setError,

    [setCurrentPage.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [setCurrentPage.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.cvs = [...action.payload.results];
      state.currentPage = action.payload.currentPage;
      state.pageCount = action.payload.pageCount;
      state.totalCount = action.payload.totalCount;
    },
    [setCurrentPage.rejected]: setError,
  },
});

export default cvsSlice.reducer;
