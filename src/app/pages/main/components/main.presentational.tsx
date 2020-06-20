import * as React from "react";

import { MainPreview, MainEditor } from "./components";

import styles from "./main.module.scss";

export const MainPresentational: React.FC = () => {
  return (
    <div className={styles["main"]}>
      <MainPreview />
      <MainEditor />
    </div>
  );
};
