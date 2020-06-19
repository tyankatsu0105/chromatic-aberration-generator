import * as React from "react";
import styles from "./footer.module.scss";

export const Footer = () => (
  <footer className={styles["footer"]}>
    <p className={styles["copyright-contaner"]}>
      <small>&copy; 2020 tyankatsu</small>
    </p>
  </footer>
);
