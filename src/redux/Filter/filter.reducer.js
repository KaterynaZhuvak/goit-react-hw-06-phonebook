import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
      filterChangeState(state, action ) {
          state.filter = action.payload;
      }
  },
});


export const { filterChangeState} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
