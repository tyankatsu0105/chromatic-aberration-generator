import { combineReducers } from "redux";
import {
  useSelector as OriginalUseSelector,
  TypedUseSelectorHook,
} from "react-redux";

import { configureStore } from "@reduxjs/toolkit";

import * as editorValue from "./editor-value";

const reducer = combineReducers({
  [editorValue.slice.name]: editorValue.slice.reducer,
});

export const store = configureStore({ reducer });

export type State = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<State> = OriginalUseSelector;
