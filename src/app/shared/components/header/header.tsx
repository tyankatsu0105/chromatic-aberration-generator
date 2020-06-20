import * as React from "react";
import styles from "./header.module.scss";
import logo from "../../../../assets/logo.png";

export const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.heading}>
      <img className={styles["logo"]} src={logo} alt="" />
      <p className={styles["logo-type"]}>Chromatic Aberration Generator</p>
    </h1>
  </header>
);
