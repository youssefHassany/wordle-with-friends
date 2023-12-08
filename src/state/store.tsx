import { configureStore } from "@reduxjs/toolkit";
import currentWordReducer from "./word/currentWordSlicer";
import turnReducer from "./turn/turnSlice";

export const store = configureStore({
  reducer: {
    currentWord: currentWordReducer,
    turn: turnReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
