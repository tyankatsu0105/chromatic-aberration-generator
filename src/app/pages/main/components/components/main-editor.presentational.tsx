import * as React from "react";

import styles from "./main-editor.module.scss";

export const MainEditorPresentational: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <label htmlFor="translate1">
        要素1
        <input type="number" id="translate1" />
      </label>
      <label htmlFor="translate2">
        要素2
        <input type="number" id="translate2" />
      </label>
    </div>
  );
};
