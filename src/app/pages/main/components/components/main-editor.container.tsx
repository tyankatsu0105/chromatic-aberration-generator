import * as React from "react";
import { useCallback } from "react";

import { useDispatch } from "react-redux";
import { updateTranslate1, updateTranslate2 } from "~store/editor-value";
import { useSelector } from "~store/index";

import { MainEditorPresentational } from "./main-editor.presentational";

export const MainEditor: React.FC = () => {
  const dispatch = useDispatch();

  const handleUpdateTranslate1 = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateTranslate1(Number(event.target.value)));
    },
    [dispatch]
  );

  const handleUpdateTranslate2 = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateTranslate2(Number(event.target.value)));
    },
    [dispatch]
  );

  const editorValue = useSelector((state) => state.editorValue);

  const mainEditorPresentationalProps = {
    handleUpdateTranslate1,
    handleUpdateTranslate2,
    editorValue,
  };
  return <MainEditorPresentational {...mainEditorPresentationalProps} />;
};
