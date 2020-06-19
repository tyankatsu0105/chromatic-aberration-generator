---
to: _hygen/_generated/<%= name %>.container.tsx
---
import * as React from 'react';

import { <%= h.toUpperCamelCase(name) %>Presentational } from './<%= name %>.presentational';

type Props = {};

export const <%= h.toUpperCamelCase(name) %>: React.FC<Props> = (props) => {
  return <<%= h.toUpperCamelCase(name) %>Presentational />;
};
