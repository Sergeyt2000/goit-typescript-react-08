import { createSlice } from "@reduxjs/toolkit";

interface FiltersState {
  name: string;
}
const initialState: FiltersState = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;