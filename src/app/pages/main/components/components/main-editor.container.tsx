import * as React from "react";
import { useCallback } from "react";

import { useDispatch } from "react-redux";
import {
  updateElement1X,
  updateElement1Y,
  updateElement1Color,
  updateElement2X,
  updateElement2Y,
  updateElement2Color,
} from "~store/editor-value";
import { useSelector } from "~store/index";

import { MainEditorPresentational } from "./main-editor.presentational";

export const MainEditor: React.FC = () => {
  const dispatch = useDispatch();

  const handleUpdateElement1X = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateElement1X(Number(event.target.value)));
    },
    [dispatch]
  );
  const handleUpdateElement1Y = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateElement1Y(Number(event.target.value)));
    },
    [dispatch]
  );
  const handleUpdateElement1Color = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateElement1Color(event.target.value));
    },
    [dispatch]
  );

  const handleUpdateElement2X = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateElement2X(Number(event.target.value)));
    },
    [dispatch]
  );
  const handleUpdateElement2Y = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateElement2Y(Number(event.target.value)));
    },
    [dispatch]
  );
  const handleUpdateElement2Color = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateElement2Color(event.target.value));
    },
    [dispatch]
  );

  const editorValue = useSelector((state) => state.editorValue);

  const mainEditorPresentationalProps = {
    handleUpdateElement1X,
    handleUpdateElement1Y,
    handleUpdateElement1Color,
    handleUpdateElement2X,
    handleUpdateElement2Y,
    handleUpdateElement2Color,
    editorValue,
  };
  return <MainEditorPresentational {...mainEditorPresentationalProps} />;
};
