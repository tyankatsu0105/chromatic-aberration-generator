import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  element1: {
    x: 3,
    y: 3,
    color: "#00ffff",
  },
  element2: {
    x: -3,
    y: -3,
    color: "#ff00ff",
  },
};

export const slice = createSlice({
  name: "editorValue",
  initialState,
  reducers: {
    updateElement1X: (
      state,
      action: PayloadAction<typeof initialState["element1"]["x"]>
    ) => {
      return {
        ...state,
        element1: {
          ...state.element1,
          x: action.payload,
        },
      };
    },
    updateElement1Y: (
      state,
      action: PayloadAction<typeof initialState["element1"]["y"]>
    ) => {
      return {
        ...state,
        element1: {
          ...state.element1,
          y: action.payload,
        },
      };
    },
    updateElement1Color: (
      state,
      action: PayloadAction<typeof initialState["element1"]["color"]>
    ) => {
      return {
        ...state,
        element1: {
          ...state.element1,
          color: action.payload,
        },
      };
    },
    updateElement2X: (
      state,
      action: PayloadAction<typeof initialState["element2"]["x"]>
    ) => {
      return {
        ...state,
        element2: {
          ...state.element2,
          x: action.payload,
        },
      };
    },
    updateElement2Y: (
      state,
      action: PayloadAction<typeof initialState["element2"]["y"]>
    ) => {
      return {
        ...state,
        element2: {
          ...state.element2,
          y: action.payload,
        },
      };
    },
    updateElement2Color: (
      state,
      action: PayloadAction<typeof initialState["element2"]["color"]>
    ) => {
      return {
        ...state,
        element2: {
          ...state.element2,
          color: action.payload,
        },
      };
    },
  },
});

export const {
  updateElement1X,
  updateElement1Y,
  updateElement1Color,
  updateElement2X,
  updateElement2Y,
  updateElement2Color,
} = slice.actions;
