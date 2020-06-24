import * as React from "react";
import styles from "./main-preview.module.scss";

import styled from "@emotion/styled";

import { State } from "~store/index";

type PreviewItem = {
  element1: {
    x: number;
    y: number;
    color: string;
  };
  element2: {
    x: number;
    y: number;
    color: string;
  };
};

const PreviewItem = styled.div<PreviewItem>`
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
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
    background-color: ${(props) => props.element1.color};
    transform: translate(
        ${(props) => props.element1.x}px,
        ${(props) => props.element1.y}px
      )
      rotate(0.1deg);
  }

  &::after {
    background-color: ${(props) => props.element2.color};
    transform: translate(
      ${(props) => props.element2.x}px,
      ${(props) => props.element2.y}px
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
        element1={{
          x: props.editorValue.element1.x,
          y: props.editorValue.element1.y,
          color: props.editorValue.element1.color,
        }}
        element2={{
          x: props.editorValue.element2.x,
          y: props.editorValue.element2.y,
          color: props.editorValue.element2.color,
        }}
      />
    </div>
  );
};
