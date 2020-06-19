import * as React from "react";
import styles from "./main-wrapper.module.scss";

export const MainWrapper: React.FC = (props) => (
  <main className={styles["main-wrapper"]}>{props.children}</main>
);
