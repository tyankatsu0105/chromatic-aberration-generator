import * as React from "react";
import { useSelector } from "react-redux";

import { State } from "~store/index";

import { MainPreviewPresentational } from "./main-preview.presentational";

export const MainPreview: React.FC = () => {
  const editorValue = useSelector((state: State) => state.editorValue);

  const mainPreviewPresentationalProps = {
    editorValue,
  };

  return <MainPreviewPresentational {...mainPreviewPresentationalProps} />;
};
