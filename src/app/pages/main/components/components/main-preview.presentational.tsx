import * as React from "react";
import styles from "./main-preview.module.scss";

import styled from "@emotion/styled";

import { State } from "~store/index";

type PreviewItem = {
  translate1: number;
  translate2: number;
  color1: string;
  color2: string;
};

const PreviewItem = styled.div<PreviewItem>`
  position: relative;
  display: inline-block;
  width: 400px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.5);

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: "";
    mix-blend-mode: multiply;
  }

  &::before {
    background-color: ${(props) => props.color1};
    transform: translate(
        ${(props) => props.translate1}px,
        ${(props) => props.translate1}px
      )
      rotate(0.1deg);
  }

  &::after {
    background-color: ${(props) => props.color2};
    transform: translate(
      -${(props) => props.translate2}px,
      -${(props) => props.translate2}px
    );
  }
`;

type Props = {
  editorValue: State["editorValue"];
};
export const MainPreviewPresentational: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <PreviewItem
        translate1={props.editorValue.translate1}
        translate2={props.editorValue.translate2}
        color1="#0ff"
        color2="#f0f"
      />
    </div>
  );
};
