import * as React from "react";
import { State } from "~store/index";

import styles from "./main-editor.module.scss";

type Props = {
  handleUpdateElement1X: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateElement1Y: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateElement1Color: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleUpdateElement2X: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateElement2Y: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateElement2Color: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;

  editorValue: State["editorValue"];
};

export const MainEditorPresentational: React.FC<Props> = (props) => {
  return (
    <div className={styles["container"]}>
      <div>
        <p>要素1</p>
        <label htmlFor="element1X">
          X
          <input
            type="number"
            id="element1X"
            value={props.editorValue.element1.x}
            onChange={props.handleUpdateElement1X}
          />
        </label>
        <label htmlFor="element1Y">
          Y
          <input
            type="number"
            id="element1Y"
            value={props.editorValue.element1.y}
            onChange={props.handleUpdateElement1Y}
          />
        </label>
        <label htmlFor="element1Color">
          色
          <input
            type="text"
            id="element1Color"
            value={props.editorValue.element1.color}
            onChange={props.handleUpdateElement1Color}
          />
          <input
            type="color"
            value={props.editorValue.element1.color}
            onChange={props.handleUpdateElement1Color}
          />
        </label>
      </div>

      <div>
        <p>要素2</p>
        <label htmlFor="element2X">
          X
          <input
            type="number"
            id="element2X"
            value={props.editorValue.element2.x}
            onChange={props.handleUpdateElement2X}
          />
        </label>
        <label htmlFor="element2Y">
          Y
          <input
            type="number"
            id="element2Y"
            value={props.editorValue.element2.y}
            onChange={props.handleUpdateElement2Y}
          />
        </label>
        <label htmlFor="element2Color">
          色
          <input
            type="text"
            id="element1Color"
            value={props.editorValue.element2.color}
            onChange={props.handleUpdateElement2Color}
          />
          <input
            type="color"
            value={props.editorValue.element2.color}
            onChange={props.handleUpdateElement2Color}
          />
        </label>
      </div>
    </div>
  );
};
