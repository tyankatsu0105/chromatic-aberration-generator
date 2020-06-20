---
to: _hygen/_generated/<%= name %>.presentational.tsx
---
import * as React from 'react';

import styles from "./<%= name %>.module.scss";

type Props = {};

export const <%= h.toUpperCamelCase(name) %>Presentational: React.FC<Props> = (props) => {
  return <div></div>;
};