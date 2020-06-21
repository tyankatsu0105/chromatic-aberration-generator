import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  translate1: 3,
  translate2: 3,
};

export const slice = createSlice({
  name: "editorValue",
  initialState,
  reducers: {
    updateTranslate1: (state, { payload }) => {
      return {
        ...state,
        translate1: payload,
      };
    },
    updateTranslate2: (state, { payload }) => {
      return {
        ...state,
        translate2: payload,
      };
    },
  },
});

export const { updateTranslate1, updateTranslate2 } = slice.actions;
