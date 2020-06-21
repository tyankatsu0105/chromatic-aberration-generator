import * as React from "react";
import { State } from "~store/index";

import styles from "./main-editor.module.scss";

type Props = {
  handleUpdateTranslate1: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateTranslate2: (event: React.ChangeEvent<HTMLInputElement>) => void;
  editorValue: State["editorValue"];
};

export const MainEditorPresentational: React.FC<Props> = (props) => {
  return (
    <div className={styles["container"]}>
      <label htmlFor="translate1">
        要素1
        <input
          type="number"
          id="translate1"
          value={props.editorValue.translate1}
          onChange={props.handleUpdateTranslate1}
        />
      </label>
      <label htmlFor="translate2">
        要素2
        <input
          type="number"
          id="translate2"
          value={props.editorValue.translate2}
          onChange={props.handleUpdateTranslate2}
        />
      </label>
    </div>
  );
};
