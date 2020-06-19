import * as React from "react";
import styles from "./header.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.heading}>
      <span className={styles["logo"]}></span>
      <p className={styles["logo-type"]}>Chromatic Aberration Generator</p>
    </h1>
  </header>
);
