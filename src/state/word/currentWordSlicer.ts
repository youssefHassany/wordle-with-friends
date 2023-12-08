import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WordSlice {
  value: string;
}

const initialState: WordSlice = {
  value: "",
};

const currentWordSlice = createSlice({
  name: "currentWord",
  initialState,
  reducers: {
    addLetter: (state, letter: PayloadAction<string>) => {
      state.value += letter.payload;
    },
    deleteLast: (state) => {
      if (state.value.length) {
        state.value = state.value.slice(0, state.value.length - 1);
      }
    },
    erase: (state) => {
      state.value = "";
    },
  },
});

export const { addLetter, deleteLast, erase } = currentWordSlice.actions;
export default currentWordSlice.reducer;
