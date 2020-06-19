import * as React from "react";
import styles from "./all-wrapper.module.scss";

export const AllWrapper: React.FC = (props) => (
  <div className={styles["all-wrapper"]}>{props.children}</div>
);
