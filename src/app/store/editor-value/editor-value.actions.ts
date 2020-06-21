import { createAction } from "@reduxjs/toolkit";
import { featureKey } from "./editor-value.states";

export const updateTranslate1 = createAction(`${featureKey}/updateTranslate1`);
export const updateTranslate2 = createAction(`${featureKey}/updateTranslate2`);
