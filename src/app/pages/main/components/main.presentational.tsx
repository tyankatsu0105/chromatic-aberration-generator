import * as React from "react";

import { MainPreview, MainEditor } from "./components";

export const MainPresentational: React.FC = () => {
  return (
    <>
      <MainPreview />
      <MainEditor />
    </>
  );
};
