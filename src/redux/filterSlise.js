import { createSlice } from '@reduxjs/toolkit';

const filterSlise = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});

export const { setFilter } = filterSlise.actions;
export default filterSlise.reducer;
