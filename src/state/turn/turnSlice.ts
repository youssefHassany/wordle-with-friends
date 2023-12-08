import { createSlice } from "@reduxjs/toolkit";

interface TurnSlice {
  value: number;
}

const initialState: TurnSlice = {
  value: 0,
};

const turnSlice = createSlice({
  name: "turn",
  initialState,
  reducers: {
    nextTurn: (state) => {
      state.value += 1;
    },
  },
});

export const { nextTurn } = turnSlice.actions;
export default turnSlice.reducer;
