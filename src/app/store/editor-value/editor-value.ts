import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  translate1: 3,
  translate2: 3,
};

export const slice = createSlice({
  name: "editorValue",
  initialState,
  reducers: {
    updateTranslate1: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        translate1: action.payload,
      };
    },
    updateTranslate2: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        translate2: action.payload,
      };
    },
  },
});

export const { updateTranslate1, updateTranslate2 } = slice.actions;
